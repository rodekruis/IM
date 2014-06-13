'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
		
		angular.element(document).on('click.nav','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') ) {
			    $(this).removeClass('in').addClass('collapse');
			}
		});
	}
]);