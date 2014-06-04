'use strict';

// Setting up route
angular.module('forms').config(['$urlRouterProvider', '$stateProvider',
	function($urlRouterProvider, $stateProvider) {
		// Set undefined routes
		$urlRouterProvider.otherwise('/forms');
		
		// Maps state routing
		$stateProvider
		.state('otherwise', {
			url : '/forms',
			templateUrl: 'modules/forms/views/list-forms.client.view.html'
		})
		.state('model::edit',{
			url: '/forms/:model/:id/edit',		
			templateUrl: 'modules/forms/views/base-edit.client.view.html'
		})
		.state('model::new',{
			url: '/forms/:model/new',
			templateUrl: 'modules/forms/views/base-edit.client.view.html'
		})
		.state('model::list',{
			url: '/forms/:model',
			templateUrl: 'modules/forms/views/base-list.client.view.html',
		})
		/*
		state('listAMap', {
			url: '/AMap',
			templateUrl: 'modules/maps/views/base-list.client.view.html'
		}).
		state('newAMap', {
			url: 'AMap/new',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('editAMap', {
			url: '/maps/AMap/:id/edit',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('newAMapForm', {
			url: '/AMap/:form/new',
			templateUrl: 'modules/maps/views/base-new.client.view.html'
		}).
		state('editAMapForm', {
			url: '/AMap/:form/:id/edit',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('listAMapForm', {
			url: '/AMap/:form',
			templateUrl: 'modules/maps/views/base-list.client.view.html'
		}).
		state('analyseAMap', {
			url: '/analyse/AMap/:reportSchemaName',
			templateUrl: 'modules/maps/views/base-analysis.client.view.html'
		}).
		*/
		;
	}
]);