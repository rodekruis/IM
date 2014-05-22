'use strict';

angular.module('dataObjects').controller('DataObjectsController', ['$scope', '$stateParams', '$location', 'Authentication', 'DataObjects',
	function($scope, $stateParams, $location, Authentication, DataObjects) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var dataObject = new DataObjects({
				title: this.title,
				content: this.content
			});
			dataObject.$save(function(response) {
				$location.path('dataObjects/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			this.content = '';
		};

		$scope.remove = function(dataObject) {
			if (dataObject) {
				dataObject.$remove();

				for (var i in $scope.dataObjects) {
					if ($scope.dataObjects[i] === dataObject) {
						$scope.dataObjects.splice(i, 1);
					}
				}
			} else {
				$scope.dataObject.$remove(function() {
					$location.path('dataObjects');
				});
			}
		};

		$scope.update = function() {
			var dataObject = $scope.dataObject;

			dataObject.$update(function() {
				$location.path('dataObjects/' + dataObject._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.dataObjects = DataObjects.query();
		};

		$scope.findOne = function() {
			$scope.dataObject = DataObjects.get({
				dataObjectId: $stateParams.dataObjectId
			});
		};
	}
]);