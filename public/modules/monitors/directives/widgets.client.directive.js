'use strict';


angular.module('monitors')
.directive('wtTime', [function ($interval) {
    return {
      restrict: 'A',
      scope: true,
      replace: true,
      template: '<div>Time<div class="alert alert-success">{{time}}</div></div>',
      link: function (scope) {
        function update() {
          scope.time = new Date().toLocaleTimeString();
        }

        var promise = $interval(update, 500);

        scope.$on('$destroy', function () {
          $interval.cancel(promise);
        });
      }
    };
  }])
 
  .directive('wtScopeWatch', [function () {
    return {
      restrict: 'A',
      replace: true,
      template: '<div>Value<div class="alert alert-info">{{value}}</div></div>',
      scope: {
        value: '=value'
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
  }])
  
  .directive('twitter', [function ($compile, $parse) {
    return {
      restrict: 'A',
      scope: {
            widgetId: '=widgetId'
        },
      replace: true,
      templateUrl: '/modules/monitors/templates/twitterWidget.html', 
      /*link: function (scope, element, attr) {
                scope.widgetId = attr.widgetId;
      }*/
    };
  }]);