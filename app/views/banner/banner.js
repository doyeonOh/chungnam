'use strict';

var bannerControllers = angular.module('chungnamApp.banner', []);

bannerControllers.controller('BannerCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$scope.subject = '청남골프연습장에 오신 것을 환영합니다';
		$scope.content = '본 사이트는 HTML5 에 최적화 되어 있습니다';
	}]);
