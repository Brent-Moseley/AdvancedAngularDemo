// Namespace a new module from AngularApp called 'controllers', then
// add the 'MainController' controller.

angular.module('AngularApp.controllers', []).

controller("MainController", function ($scope, businessService) {
  $scope.isAuthenticated = false;
  $scope.user = {};
  $scope.checkLogin = function () {
    // the checkLogin function will use the businessService service to
    // check that the admin login is correct (note: this is the only valid)
    // account for this simple demo.
    
    var loginInfo = businessService.getLogin();
    loginInfo.success(function (login) {
      if (login.username === $scope.user.username && login.password === $scope.user.password) {
        $scope.isAuthenticated = true;
      }
      //TODO Add an ngToast error message if login failed. 
    });
  };
})

// register a Home controller
.controller("HomeController", function ($scope) {
  $scope.logoutApp = function () {
    $scope.$parent.isAuthenticated = false;
  }
}).

controller("ListController", function ($scope, businessService) {
  // Controller for the list employees functionality. This calls
  // the getEmployeeList function on the businessService and makes
  // the returned employee data accessible to the view.
  
  // call the get employee list function in the service.
  var empInfo = businessService.getEmployeeList (); 
  
  // on success, set the view scope variable to the list of employees that was returned. 
  empInfo.success(function (emp) {
    $scope.employeeList = emp.employees;
  });
  
});
