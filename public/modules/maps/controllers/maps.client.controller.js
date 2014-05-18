'use strict';

angular.module('maps', ['leaflet-directive']).controller('MapsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Maps',
	function($scope, $stateParams, $location, Authentication, Maps) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var map = new Maps({
				title: this.title,
				//content: this.content
			});
			map.$save(function(response) {
				$location.path('maps/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			//this.content = '';
		};

		$scope.remove = function(map) {
			if (map) {
				map.$remove();

				for (var i in $scope.maps) {
					if ($scope.maps[i] === map) {
						$scope.maps.splice(i, 1);
					}
				}
			} else {
				$scope.map.$remove(function() {
					$location.path('maps');
				});
			}
		};

		$scope.update = function() {
			var map = $scope.map;

			map.$update(function() {
				$location.path('maps/' + map._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.maps = Maps.query();
		};

		$scope.findOne = function() {
			$scope.map = Maps.get({
				mapId: $stateParams.mapId
			});
		};

		angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 8
                },
                markers: {
                    mainMarker: {
                        lat: 51,
                        lng: 0,
                        focus: true,
                        message: "Hey, drag me if you want",
                        draggable: true
                    }
                }
            });

		
		
	}
]);