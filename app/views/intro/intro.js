'use strict';

var introControllers = angular.module('chungnamApp.intro', []);

introControllers.controller('IntroCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$scope.subject = '이곳을 소개합니다';
		$scope.subtitle= '청남 골프 연습장은 제주 남원의 골프 역사가 시작이 된 곳입니다';
	}]);
introControllers.controller('IntroDetailCtrl', ['$scope', '$routeParams',
	function ($scope, $routeParams) {
		$scope.detail = 'Oh';
	}]);
