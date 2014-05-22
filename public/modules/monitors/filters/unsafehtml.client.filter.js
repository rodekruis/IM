'use strict';

angular.module('monitors').filter('unsafehtml', ['$sce',
	function($sce) {
		return function(input) {
			return $sce.trustAsHtml(input);
		};
	}
]);