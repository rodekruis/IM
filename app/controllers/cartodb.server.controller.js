'use strict';

/**
 * Module dependencies.
 */

var CartoDB = require('cartodb'),
	secrets = require('../../config/secrets'),
	_ = require('lodash');


/**
 * Get all rows from a table
 */
exports.getTable = function(req, res, next, id){
	var client = new CartoDB({user:secrets.cartodb.user, api_key:secrets.cartodb.api_key});
	
	
	var outputRows = function(err, data) {
            if (err) {
                    return res.send(400, {
                            message: err
                    });
            } else {
                    res.jsonp(data.rows);
            }
	};
	
	
	client.on('connect', function() {
	  client
	  .query('select * from {table}', {table: id}, outputRows);
	});
	
	client.connect();			
	
};

exports.getMapUrl = function(req, res, next, mapConfig){
	$.ajax({
            crossOrigin: true,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: 'https://' + secrets.cartodb.user + '.cartodb.com/api/v1/map/named?api_key=' + secrets.cartodb.api_key,
            data: JSON.stringify(mapConfig),
            success: function(data) {
              var templateUrl = 'http://' + secrets.cartodb.user + '.cartodb.com/api/v1/map/named' + data.layergroupid + '{z}/{x}/{y}.png';
              return res.jsonp(templateUrl);
            }
        });			
	
};
