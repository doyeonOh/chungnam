'use strict';

var introControllers = angular.module('chungnamApp.composite', []);

introControllers.controller('CompositeCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '구성';
        }]);
