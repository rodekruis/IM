'use strict';

angular.module('maps').controller('MapsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Maps',
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
			defaults: {
			    tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
			    maxZoom: 14,
			    path: {
				weight: 10,
				color: '#800000',
				opacity: 1
			    }
			}
		});
		
		angular.extend($scope, {
			layers: {
				baselayers: {
				    osm: {
					name: 'OpenStreetMap',
					url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					type: 'xyz'
				    },
				    cloudmade2: {
					name: 'Cloudmade Tourist',
					type: 'xyz',
					url: 'http://{s}.tile.cloudmade.com/{key}/{styleId}/256/{z}/{x}/{y}.png',
					layerParams: {
					    key: '007b9471b4c74da4a6ec7ff43552b16f',
					    styleId: 7
					}
				    }
				}
			}
		});

		angular.extend($scope, {
		    center: {
			lat: 51.505,
			lng: -0.09,
			zoom: 8
		    }
		});

		
		
	}
]);