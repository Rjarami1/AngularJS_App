'use strict';

/* App Module */

var blogApp = angular.module('blogApp', [
    'ngRoute',     
    'blogControllers',
    'blogServices'
]);


blogApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/main.html',
                    controller: 'BlogCtrl'
                }).when('/blogPost/:id', {
                    templateUrl: 'templates/blogPost.html',
                    controller: 'BlogViewCtrl'
                });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



