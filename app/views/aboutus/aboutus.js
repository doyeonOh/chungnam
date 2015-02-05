'use strict';

var introControllers = angular.module('chungnamApp.aboutus', []);

introControllers.controller('AboutusCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '주변환경';
		$scope.about = {
			"one": "드라이버 방향을 진단할 수 있는 비거리 200야드",
			"two": "천연잔디 위에서 치는 생동감",
			"three": "골프연습장에서 10분거리에 있는 골프장 ",
			"four": "5곳(해비치ᆞ더클래식ᆞ부영ᆞ스프링데일ᆞ우리들)이 있습니다"
		};
        }]);
