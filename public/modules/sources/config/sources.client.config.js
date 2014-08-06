'use strict';

// Configuring the Articles module
angular.module('sources').run(['Menus','gettextCatalog',
	function(Menus, gettextCatalog) {
		// Translate menu item
		var title = gettextCatalog.getString('Sources');
		
		// Set top bar menu items
		Menus.addMenuItem('topbar', title, 'sources');
	}
]);