'use strict';

var contactControllers = angular.module('chungnamApp.contact', []);

contactControllers.controller('ContactCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '연락처';
		
		$scope.address_old = '구)제주특별자치도 서귀포시 남원읍 한남리 215-0번지 청남골프연습장';
		$scope.address_new = '신)제주특별자치도 서귀포시 남원읍 중산간동로 6286 청남골프연습장';
		//var container = document.getElementById('map');
		//var options = {
		//	center: new daum.maps.LatLng(33.450701, 126.570667),
		//	level : 3
		//};
		//var map = new daum.maps.Map(container, options);
        }]);
