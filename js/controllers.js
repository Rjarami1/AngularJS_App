'use strict';

/* Controllers */

var helloWorldControllers = angular.module('helloWorldControllers', []);



helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "Hello World";
    }]);

helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }]);

helloWorldControllers.controller('customerCtrl', ['$scope', 
    function customerCtrl($scope){
        $scope.customerName = "Bob's Burguers";
        $scope.customerNumber = '43561';

        $scope.changeCustomer = function(){
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        }
    }])