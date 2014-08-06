'use strict';

// Configuring the Articles module
angular.module('monitors').run(['Menus', 'gettextCatalog',
	function(Menus, gettextCatalog) {
		// Translate menu item
		var title = gettextCatalog.getString('Web monitor');
		
		// Set top bar menu items
		Menus.addMenuItem('topbar', title, 'monitors');
	}
]);