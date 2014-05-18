'use strict';

// Configuring the Articles module
angular.module('maps').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Maps', 'maps');
		Menus.addMenuItem('topbar', 'Create map', 'maps/create');

	}
]);