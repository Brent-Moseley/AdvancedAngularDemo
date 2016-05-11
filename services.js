
// Use the factory method on the angular module to register a service labeled
// 'businessService'. This will contain our interface to the "backend" of our 
// app. 
angular.module('AngularApp.services', []).factory('businessService', function ($http) {

  var appApi = {};

  // Use a simple http get operation to retrieve the login list from the
  // "backend".  Note, at this point, this is simply a local text file available
  // to the browser.
  appApi.getLogin = function () {
    return $http.get('login.json');
  };

  // Get the employee list in the same way.
  appApi.getEmployeeList = function () {
    return $http.get('employee.json')
  };
  
  appApi.getTitle = function () {
    return $http.get('title.json')
  };
  
  return appApi;
});
