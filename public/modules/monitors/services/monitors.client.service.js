'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('monitors').factory('Monitors', ['$resource', function($resource) {
    return $resource('monitors/:monitorId', {
        monitorId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);