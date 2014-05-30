'use strict';


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
        Visualisation = mongoose.model('Visualisation'),
	_ = require('lodash');

var CartoDB = require('cartodb');
var secrets = require('config/secrets');

/**
 * Create a Visualisation
 */
exports.create = function(req, res) {
	
};

/**
 * Show the current Visualisation
 */
exports.read = function(req, res) {
    // please, fill secret.js using secret.js.example before launch the demo
    var client = new CartoDB({user:secrets.cartodb.user, api_key:secrets.cartodb.api_key});    
    
    // return function
    var outputRows = function(err, data) {
            console.log(data.rows);
    };
                
    client.on('connect', function() {
      client.query('select visualisations.group from visualisations GROUP BY visualisations.group', outputRows);
    });
    
    client.connect();	
};

/**
 * Update a Visualisation
 */
exports.update = function(req, res) {
	
};

/**
 * Delete an Visualisation
 */
exports.delete = function(req, res) {
	
};

/**
 * List of Visualisations
 */
exports.list = function(req, res) {
	
};

/**
 * Monitor middleware
 */
exports.visualisationByID = function(req, res, next, id) {
	Visualisation.findById(id).populate('user', 'displayName').exec(function(err, monitor) {
		if (err) return next(err);
		if (!monitor) return next(new Error('Failed to load monitor ' + id));
		req.monitor = monitor;
		next();
	});
};

/**
 * Monitor authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.monitor.user.id !== req.user.id) {
		return res.send(403, {
			message: 'User is not authorized'
		});
	}
	next();
};
