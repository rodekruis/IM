'use strict';

angular.module('monitors').controller('MonitorsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Monitors', '$sce', 
	function($scope, $stateParams, $location, Authentication, Monitors, $sce) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var monitor = new Monitors({
				title: this.title,
				content: this.content
			});
			monitor.$save(function(response) {
				$location.path('monitors/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			this.content = '';
		};

		$scope.remove = function(monitor) {
			if (monitor) {
				monitor.$remove();

				for (var i in $scope.monitors) {
					if ($scope.monitors[i] === monitor) {
						$scope.monitors.splice(i, 1);
					}
				}
			} else {
				$scope.monitor.$remove(function() {
					$location.path('monitors');
				});
			}
		};

		$scope.update = function() {
			var monitor = $scope.monitor;

			monitor.$update(function() {
				$location.path('monitors/' + monitor._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.monitors = Monitors.query();
		};

		$scope.findOne = function() {
			$scope.monitor = Monitors.get({
				monitorId: $stateParams.monitorId
			});			
		};
		
		/*
		$scope.$on('$viewContentLoaded', function() {
			$('iframe').css('height', $(window).height()-300 + 'px');
		});
		*/
	}
])
.directive('htmlparse', 
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
);