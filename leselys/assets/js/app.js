'use strict';
var leselysApp = angular.module('leselysApp', ['leselysControllers', 'leselysServices', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);

leselysApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/read', {
					templateUrl: static_url + 'partials/reader.html',
					controller: 'readerCtrl'
				})
				.when('/read/:feedId', {
					templateUrl: static_url + 'partials/reader.html',
					controller: 'readerCtrl'
				})
				.when('/read/:feedId/:storyId', {
					templateUrl: static_url + 'partials/reader.html',
					controller: 'readerCtrl'
				})
				.when('/settings', {
					templateUrl: static_url + 'partials/settings.html',
					controller: 'settingsCtrl'
				})
				.otherwise({
					redirectTo: '/read'
				});
		}
	]);

leselysApp.config(['$httpProvider', function($httpProvider) {
    	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	}
]);