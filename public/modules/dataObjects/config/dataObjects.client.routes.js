'use strict';

// Setting up route
angular.module('dataObjects').config(['$stateProvider',
	function($stateProvider) {
		// Datamanagement state routing
		$stateProvider.
		state('listDataObjects', {
			url: '/dataObjects',
			templateUrl: 'modules/dataObjects/views/list-dataObjects.client.view.html'
		}).
		state('createDataObject', {
			url: '/dataObjects/create',
			templateUrl: 'modules/dataObjects/views/create-dataobject.client.view.html'
		}).
		state('viewDataObject', {
			url: '/dataObjects/:dataObjectId',
			templateUrl: 'modules/dataObjects/views/view-dataobject.client.view.html'
		}).
		state('editDataObject', {
			url: '/dataObjects/:dataObjectId/edit',
			templateUrl: 'modules/dataObjects/views/edit-dataobject.client.view.html'
		});
	}
]);