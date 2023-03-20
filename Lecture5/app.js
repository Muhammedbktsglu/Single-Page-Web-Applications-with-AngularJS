(function() {
    'use strict';
    angular.module('myFirstApp',[])
    .controller('myFirstController', function($scope) {
        $scope.name = "Muhammed";
        $scope.sayHello = function () {
            return "Hello Coursera!";
        }

    });
})();