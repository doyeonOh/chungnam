'use strict';

var introControllers = angular.module('chungnamApp.greeting', []);

introControllers.controller('GreetingCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '대표 인사말';
		$scope.subtitle = '골프를 즐기시는 여러분들을 환영합니다';
        }]);
