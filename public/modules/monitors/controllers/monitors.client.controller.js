'use strict';

angular.module('monitors')

.controller('MonitorsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Monitors', '$sce', '$interval', '$window',
	function($scope, $stateParams, $location, Authentication, Monitors, $sce, $interval, $window) {
		$scope.authentication = Authentication;
		$scope.monitorIndex = 0;
		$scope.currentMonitor = null;
		var window = angular.element($window);

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
			
			$scope.monitors.$promise.then(function (result) {
				$scope.setCurrentMonitor();
			});
			
		};

		$scope.findOne = function() {
			$scope.monitor = Monitors.get({
				monitorId: $stateParams.monitorId
			});			
		};		
            
	        // resize the remainder of the page, excluding the height of the navbar and the monitor header
		$scope.onResize = function() {
			var newHeight = window.height() - $('.navbar').height() - $('.monitorHeader').height();
			$('.monitorVerticalStretch').css('height', newHeight);
			$('.monitorVerticalStretch').css('minHeight', newHeight);
		};
	       
	        // call function once to initialize
		$scope.onResize();
	    
	        // bind function to window resize event
		window.bind('resize', function() {
			$scope.onResize();
		});
		
		
		$scope.setCurrentMonitor = function(){
			$scope.currentMonitor = $scope.monitors[$scope.monitorIndex];
		};

		$scope.prev = function() {
			if ($scope.monitorIndex === 0) {
				$scope.monitorIndex = $scope.monitors.length - 1;
			}
			else {
				$scope.monitorIndex--;
			}
			
			$scope.setCurrentMonitor();
		};
		
		$scope.next = function() {
			if ($scope.monitorIndex === ($scope.monitors.length -1 )) {
				$scope.monitorIndex = 0;
			}
			else {
				$scope.monitorIndex++;
			}
			
			$scope.setCurrentMonitor();
		};
		
		$scope.swipe = true;
		
		$scope.toggleSwipe = function() {
			$scope.swipe = !$scope.swipe;
		};
		
		$scope.rotate = false;
		$scope.toggleRotate = function() {
			$scope.rotate = !$scope.rotate;
			
			if ($scope.rotate) {
				$scope.interval = $interval($scope.next, 20000);
			}
			else {
				$interval.cancel($scope.interval);
			}
		};
		
		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed too
			if (angular.isDefined($scope.interval)) {
				$interval.cancel($scope.interval);
				$scope.interval = undefined;
			}
			
		});
		/*
		$scope.$watch('rotate', function($timeout) {
			// enable rotate 
			if ($scope.rotate) {
				$timeout($scope.next, 5000);
			}
			else {
				$timeout.cancel($scope.next);
			}
		});
		*/
		
		      
	}
]);