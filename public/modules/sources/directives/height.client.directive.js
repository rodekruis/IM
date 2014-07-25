'use strict';

angular.module('sources')

.directive('resizeheight', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var window = angular.element($window);
            
            scope.onResize = function() {
                var windowHeight = window.height();
                var navbarHeight = $('.navbar').height();
                var sourceHeaderHeight = $('.sourceHeader').height();
                
               $(elem).height( window.height() - $('.navbar').height() - $('.sourceHeader').height());
           };
   
            scope.onResize();

            window.bind('resize', function() {
                scope.onResize();
                scope.$apply();
            });
        }
    };
}])

.directive('iframe', [function ($compile, $parse) {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      template: '<iframe id="iframe" src="url | unsafehtml"></iframe>', 
      link: function (scope, element, attr) {
                scope.$watch(attr.url, function() {
                                element.html($parse(attr.url)(scope));
                                $compile(element.contents())(scope);
                }, true);
      }
    };
  }]);