'use strict';


angular.module('monitors')
.directive('cartodb', [function () {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      template: '<div>Time<div class="alert alert-success">{{time}}</div></div>',
      link: function (scope) {
        
      }
    };
  }]);