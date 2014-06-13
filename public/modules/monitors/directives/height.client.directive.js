'use strict';

angular.module('monitors')

.directive('heightresize', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var window = angular.element($window);
            
            scope.onResize = function() {
               $(elem).height( window.height() - $('.navbar').height() - $('.monitorHeader').height());
           };
   
            scope.onResize();

            window.bind('resize', function() {
                scope.onResize();
                scope.$apply();
            });
        }
    };
}]);