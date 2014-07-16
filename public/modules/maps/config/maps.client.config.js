'use strict';

// Configuring the Maps module
angular.module('maps').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Kaarten', 'maps', '/maps', true);
	}
]);