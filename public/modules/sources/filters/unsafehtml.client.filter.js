'use strict';

angular.module('sources')

.filter('unsafehtml', ['$sce',
	function($sce) {
		return function(input) {
			return $sce.trustAsHtml(input);
		};
	}
])

.filter('unsafesource', ['$sce',
	function($sce) {
		return function(input) {
			return $sce.trustAsResourceUrl(input);
		};
	}
]);



