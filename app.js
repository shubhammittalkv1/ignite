'use strict';
var task = angular.module('taskApp',['ngRoute']);

task.config(function($routeProvider) {
	$routeProvider.
      when('/', {
        controller: 'indexPageController',
        templateUrl: 'index.html'
      });
});