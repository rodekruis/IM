'use strict';

angular.module('monitors')
.factory('MonitorDataModel', function ($interval, WidgetDataModel) {
    function MonitorDataModel() {
    }

    MonitorDataModel.prototype = Object.create(WidgetDataModel.prototype);

    MonitorDataModel.prototype.init = function () {
      this.intervalPromise = $interval(function () {
        var value = Math.floor(Math.random() * 100);
        this.updateScope(value);
      }.bind(this), 500);
    };

    MonitorDataModel.prototype.destroy = function () {
      WidgetDataModel.prototype.destroy.call(this);
      $interval.cancel(this.intervalPromise);
    };

    return MonitorDataModel;
  })
 .factory('widgetDefinitions', function($sce, MonitorDataModel) {
    return [
      {
        name: 'time',
        directive: 'wt-time'
      },
      {
        name: 'twitter',
        directive: 'twitter',
	attrs: {
	  widgetId: '456383502380834816',
	}
      },
      {
        name: 'iframe',
        directive: 'iframe',
	attrs: {
	  url: 'http://www.google.nl',
	}
      },
      {
        name: 'datamodel',
        directive: 'wt-scope-watch',
        dataAttrName: 'value',
        dataModelType: MonitorDataModel
      }
    ];
  })
  .value('defaultWidgets', [
    { name: 'datamodel' },
    {
      name: 'time',
      style: {
        width: '50%',
	height: '50%'
      }
    },
    {
      name: 'iframe',
      style: {
        width: '50%',
	height: '50%'
      }
    },
    {
      name: 'twitter',
      style: {
        width: '50%',
	height: '100%'
      }
    }
  ])


.controller('MonitorsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Monitors', '$sce', '$interval', '$window', 'widgetDefinitions', 'defaultWidgets',
	function($scope, $stateParams, $location, Authentication, Monitors, $sce, $interval, $window, widgetDefinitions, defaultWidgets) {
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
		
		$scope.dashboardOptions = {
			widgetButtons: true,
			widgetDefinitions: widgetDefinitions,
			defaultWidgets: defaultWidgets,
			storage: window.localStorage,
			storageId: 'explicitSave',
			explicitSave: true
		};
		      
	}
]);