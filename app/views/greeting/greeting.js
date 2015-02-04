'use strict';

var introControllers = angular.module('chungnamApp.greeting', []);

introControllers.controller('GreetingCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '인사말';
        }]);
