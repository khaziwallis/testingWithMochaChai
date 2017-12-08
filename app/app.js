'use strict';

// Declare app level module which depends on views, and components
angular.module('demo', [
  'ngRoute',
  'demo.services',
  'lodash',
  'demo.filters',
  'demo.controllers',
  'ui.bootstrap'
])
.constant('_', window._)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({redirectTo: '/home'});
	$routeProvider.when('/home', {
	    templateUrl: 'controllers/Home.html',
	    controller: 'HomeCtrl',
	    controllerAs: 'vm',
	});
}])
.run(function ($rootScope) {
	$rootScope._ = window._;
});
