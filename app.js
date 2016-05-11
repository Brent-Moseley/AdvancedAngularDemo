// Register a new Angular module called 'AngularApp' with its depedencies.
angular.module('AngularApp', [
  'AngularApp.services',
  'AngularApp.controllers',
  'AngularApp.directives',
  'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
  // Define the routes for the app
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html'
  }).
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/listDirective', {
    templateUrl: 'partials/list-directive.html'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);