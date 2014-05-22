'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Monitor = mongoose.model('Monitor'),
	_ = require('lodash');

/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Monitor already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

/**
 * Create a monitor
 */
exports.create = function(req, res) {
	var monitor = new Monitor(req.body);
	monitor.user = req.user;

	monitor.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(monitor);
		}
	});
};

/**
 * Show the current monitor
 */
exports.read = function(req, res) {
	res.jsonp(req.monitor);
};

/**
 * Update a monitor
 */
exports.update = function(req, res) {
	var monitor = req.monitor;

	monitor = _.extend(monitor, req.body);

	monitor.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(monitor);
		}
	});
};

/**
 * Delete an monitor
 */
exports.delete = function(req, res) {
	var monitor = req.monitor;

	monitor.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(monitor);
		}
	});
};

/**
 * List of Monitors
 */
exports.list = function(req, res) {
	Monitor.find().sort('-created').populate('user', 'displayName').exec(function(err, monitors) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(monitors);
		}
	});
};

/**
 * Monitor middleware
 */
exports.monitorByID = function(req, res, next, id) {
	Monitor.findById(id).populate('user', 'displayName').exec(function(err, monitor) {
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