'use strict';


angular.module('maps')
.directive('layermenu', function ($compile) {
   return {
      template: '<div></div>',
      replace: true,
      link: function(scope, element) {
        var container = scope.menuContainer;      
        $compile(container)(scope);
        element.append(container);
      }
    };
  })

.directive('heightresize', ['$window', function($window, $rootScope) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var window = angular.element($window);
            
            scope.onResize = function() {
               $(elem).height( window.height() - $('.navbar').height() - $('.mapHeader').height() );
               $rootScope.LMap.invalidateSize();
           };
   
            scope.onResize();

            window.bind('resize', function() {
                scope.onResize();
                scope.$apply();
            });
        }
    };
}]);