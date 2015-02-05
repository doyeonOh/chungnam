'use strict';

var bannerControllers = angular.module('chungnamApp.banner', []);

bannerControllers.controller('BannerCtrl', ['$scope', '$http', 
	function ($scope, $http) {
		$scope.name = 'banner';
	}]);
