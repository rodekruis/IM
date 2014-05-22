'use strict';

// Configuring the Articles module
angular.module('monitors').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Web monitor', 'monitors');
	}
]);