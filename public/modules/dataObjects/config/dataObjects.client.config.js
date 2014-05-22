'use strict';

// Configuring the Articles module

angular.module('dataObjects').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Data Management', 'dataObjects');
		Menus.addMenuItem('topbar', 'New Object', 'dataObjects/create');
	}
]);
