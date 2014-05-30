'use strict';

// Setting up route
angular.module('maps').config(['$stateProvider',
	function($stateProvider) {
		// Maps state routing
		$stateProvider.
		state('listAMap', {
			url: '/AMap',
			templateUrl: 'modules/maps/views/base-list.client.view.html'
		}).
		state('newAMap', {
			url: '/maps/AMap/new',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('editAMap', {
			url: '/maps/AMap/:id/edit',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('newAMapForm', {
			url: '/maps/AMap/:form/new',
			templateUrl: 'modules/maps/views/base-new.client.view.html'
		}).
		state('editAMapForm', {
			url: '/maps/AMap/:form/:id/edit',
			templateUrl: 'modules/maps/views/base-edit.client.view.html'
		}).
		state('listAMapForm', {
			url: '/maps/AMap/:form',
			templateUrl: 'modules/maps/views/base-list.client.view.html'
		}).
		state('analyseAMap', {
			url: '/maps/analyse/AMap/:reportSchemaName',
			templateUrl: 'modules/maps/views/base-analysis.client.view.html'
		}).
		state('listMaps', {
			url: '/maps',
			templateUrl: 'modules/maps/views/list-maps.client.view.html'
		}).
		state('createMap', {
			url: '/maps/create',
			templateUrl: 'modules/maps/views/create-map.client.view.html'
		}).
		state('viewMap', {
			url: '/maps/:mapId',
			templateUrl: 'modules/maps/views/view-map.client.view.html'
		}).
		state('editMap', {
			url: '/maps/:mapId/edit',
			templateUrl: 'modules/maps/views/edit-map.client.view.html'
		})
		;
	}
]);

/*
angular.module('maps').config(['formRoutesProvider', function (formRoutes) {
    formRoutes.setRoutes([
	{route:'/mapsForm/nieuw', options:{templateUrl: 'modules/maps/views/base-new.html'}},            // example view override
        {route:'/mapsForm/:id/edit', options:{templateUrl: 'modules/maps/views/base-edit.html'}},      // example view override
        {route:'/mapsForm/:form/new', options:{templateUrl: 'modules/maps/views/base-new.html'}},      // example view override with specified form content
        {route:'/mapsForm/:form/:id/edit', options:{templateUrl: 'modules/maps/views/base-edit.html'}} // example view override with specified form content
    ], '/maps');
}]);
*/