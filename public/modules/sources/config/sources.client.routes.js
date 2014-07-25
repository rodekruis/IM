'use strict';

//Setting up route
angular.module('sources').config(['$stateProvider',
	function($stateProvider) {
		// Sources state routing
		$stateProvider.
		state('listSources', {
			url: '/sources',
			templateUrl: 'modules/sources/views/list-sources.client.view.html'
		}).
		state('createSource', {
			url: '/sources/create',
			templateUrl: 'modules/sources/views/create-source.client.view.html'
		}).
		state('viewSource', {
			url: '/sources/:sourceId',
			templateUrl: 'modules/sources/views/view-source.client.view.html'
		}).
		state('editSource', {
			url: '/sources/:sourceId/edit',
			templateUrl: 'modules/sources/views/edit-source.client.view.html'
		});
	}
])

.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     // Allow same origin resource loads.
     'self',
     // Allow loading from our assets domain.  Notice the difference between * and **.
     'https://docs.google.com/spreadsheets/d//**'
   ]);

   // The blacklist overrides the whitelist so the open redirect here is blocked.
   $sceDelegateProvider.resourceUrlBlacklist([
     'http://myapp.example.com/clickThru**'
   ]);
 });