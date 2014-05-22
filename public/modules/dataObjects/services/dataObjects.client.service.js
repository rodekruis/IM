'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('dataObjects').factory('DataObjects', ['$resource', function($resource) {
    return $resource('dataObjects/:dataObjectId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);