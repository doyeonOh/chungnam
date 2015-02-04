'use strict';

var introControllers = angular.module('chungnamApp.intro', []);

introControllers.controller('IntroCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$scope.name = '청남골프연습장';
	}]);
introControllers.controller('IntroDetailCtrl', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		$scope.detail = 'Oh';
	}]);
