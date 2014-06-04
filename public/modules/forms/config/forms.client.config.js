'use strict';

angular.module('formsAngular').config(['cssFrameworkServiceProvider',function(cssFrameworkService) {
	cssFrameworkService.setOptions({framework:'bs3'});
}])
.config(['urlServiceProvider',function(urlService) {
    urlService.setOptions({html5Mode: false, hashPrefix: '!/forms'});
}]);