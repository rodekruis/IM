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
  });