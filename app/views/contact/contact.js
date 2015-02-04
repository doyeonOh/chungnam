'use strict';

var contactControllers = angular.module('chungnamApp.contact', []);

contactControllers.controller('ContactCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '연락처';
		
		//var container = document.getElementById('map');
		//var options = {
		//	center: new daum.maps.LatLng(33.450701, 126.570667),
		//	level : 3
		//};
		//var map = new daum.maps.Map(container, options);
        }]);
