'use strict';
/*
angular.module('monitors').directive('htmlparse', [
	function($compile, $parse) {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function(scope, element, attr) {
				scope.$watch(attr.content, function() {
				  element.html($parse(attr.content)(scope));
				  $compile(element.contents())(scope);
				}, true);
			}
		};
	}
]);*/