'use strict';

// Configuring the Articles module
angular.module('sources').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Tabellen', 'sources');
	}
]);