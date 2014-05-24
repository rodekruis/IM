'use strict';

angular.module('monitors')

.directive('htmlparse', 
	[function($compile, $parse) {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function(scope, element, attr) {
				var html = $parse(attr.content)(scope);
				element.html = angular.element($parse(attr.content)(scope));
				var test = $compile(element)(scope);
				element.append(test);
				
				/*
				scope.$watch(attr.content, function() {
				  element.html($parse(attr.content)(scope));
				  $compile(element.contents())(scope);
				}, true);
				*/
			}
		};
	}]
);