// Namespace a module for the directives and register the four directives that
// the app will need.

angular.module('AngularApp.directives', [])

// Regsiter a directive used as a wrapper around the entire employee list table.
.directive ('tableContainer', function () {
  return {
    restrict: 'A',
    controller: function ($scope) {
      
      // variables used to control the display of the table summary.
      this.summary = 'No summary yet';
      $scope.summaryReady = false;
      
      // the controller api for this directive:  expose methods to get and set
      // the summary text. 
      this.setSummary = function (summary) {
        this.summary = summary;
        $scope.summaryReady = true;
      }
      
      this.getSummary = function () {
        return this.summary;
      }
    }
  }
})

// Register another directive that will display the actual list of employees.
.directive('exListEmployees', function (businessService) {
  return {
    restrict: 'E',
    replace: true,
    
    // require in the table container's controller to allow access to the set
    // summary method.  Note that this controller is indicated as being on
    // the parent controller (^).  A parent scope controller was used because
    // sibling to sibling directive communication via shared controllers is 
    // difficult to do in Angular. 
    // Also note:  this idea demonstrates but one technique
    // for directive to directive communication, there are other ways to handle
    // this....
    require: '^tableContainer',
    templateUrl: 'partials/list-directive-emp.html',
    
    link: function ($scope, element, attrs, tabCtrl) {
      
      // Utilize the business service's get employee list method to retrieve
      // the list of all employees.
      var empInfo = businessService.getEmployeeList ();
      
      empInfo.success(function (emp) {
        // on success, update the scope variables so that the data will display
        // on the view. 
        $scope.employeeList = emp.employees;
        
        // ... and also utilize the set summary method in the table container
        // controller to set the summary text.
        tabCtrl.setSummary ("Total employees: " + $scope.employeeList.length);
      });
      
      // Also utilize the business service to get the title for the table.
      var title = businessService.getTitle ();
      title.success(function (title) {
        $scope.title = title.title;
      });      
    }
  }
})

// Register a simple directive that will handle display of the table header. 
.directive('headerListEmployees', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/list-directive-header.html'
  }
})

// ... and a directive to handle the summary block data / display.
// Note that a controller is required in from the parent scope to facilitate
// communication between directives.
.directive('summary', function () {
  return {
    restrict: 'E',
    //replace: true,
    require: '^tableContainer',
    template: '<p>{{summary}}</p>',
    link: function (scope, elem, attrs, tabCtrl) {
      
      // set a watch on the 'summaryReady' parent scope variable which indicates
      // when the summary text has been set.  When this becomes true, retrieve
      // this summary text and set the scope variable so that the view will be
      // updated with this text.
      scope.$watch ('summaryReady', function (newval) {
        if (newval) scope.summary = tabCtrl.getSummary();
      });
    }
  }
});

