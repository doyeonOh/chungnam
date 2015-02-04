'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('chungnamApp', [
  'ngRoute',

  'chungnamApp.intro',
  'chungnamApp.greeting',
  'chungnamApp.contact',
  'chungnamApp.aboutus',

  'chungnamApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('/', {
		templateUrl: 'index.html'
	}).
	when('/intro', {
		templateUrl: 'views/intro/intro.html',
		controller: 'IntroCtrl'	
	}).

	otherwise({redirectTo: '/'});
}]);