'use strict';

/* App Module */

var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',     
    'helloWorldControllers'
    
]);


helloWorldApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'MainCtrl'
                }).when('/show', {
                    templateUrl: 'templates/show.html',
                    controller: 'ShowCtrl'
                }).when('/customer', {
                    templateUrl: 'templates/customer.html',
                    controller: 'customerCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



