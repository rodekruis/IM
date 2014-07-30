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
			}
		};
	}]
)


.directive('ngLegendClick', ['$modal',
    function($modal, $compile, $parse) {

      var ModalInstanceCtrl = function($scope, $modalInstance, wmsLegends, wfsLegends, visualisationLegends) {        
            $scope.wmsLegends = wmsLegends;
            $scope.wfsLegends = wfsLegends;
            
            
            $scope.visualisationLegends = visualisationLegends;
            
            $scope.ok = function () {
              $modalInstance.close();
            };
      };

      return {
        restrict: 'A',
        scope:true,
        link: function(scope, element, attrs) {
          element.bind('click', function() {

            var modalInstance = $modal.open({
                templateUrl: 'modules/maps/views/legends.client.template.html',
                controller: ModalInstanceCtrl,
                size: scope.size,
                resolve: {
                    wmsLegends: function () {
                      return scope.wmsLegends;
                    },
                    wfsLegends: function () {
                      return scope.wfsLegends;
                    },
                    visualisationLegends: function () {
                      return scope.visualisationLegends;
                    }
                  }
            });

            modalInstance.result.then(function() {
              // nothing
            }, function() {
              //Modal dismissed
            });
            //*/
            
          });

        }
      };
    }
])

.directive('heightresize', ['$window', function($window, $rootScope) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            var window = angular.element($window);
            
            scope.onResize = function() {
                $(elem).height( window.height() - $('.navbar').height() - $('.mapHeader').height() );
                if(typeof $rootScope !== 'undefined'){
                    if($rootScope.hasOwnProperty('LMap')){
                         $rootScope.LMap.invalidateSize();
                    }
                }
           };
   
            scope.onResize();

            window.bind('resize', function() {
                scope.onResize();
                scope.$apply();
            });
        }
    };
}]);