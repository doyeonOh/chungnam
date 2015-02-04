'use strict';

var introControllers = angular.module('chungnamApp.aboutus', []);

introControllers.controller('AboutusCtrl', ['$scope', '$http',
        function ($scope, $http) {
                $scope.subject = '주변환경';
        }]);
