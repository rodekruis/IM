'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Source = mongoose.model('Source'),
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
				message = 'Source already exists';
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
 * Create a Source
 */
exports.create = function(req, res) {
	var source = new Source(req.body);
	source.user = req.user;

	source.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(source);
		}
	});
};

/**
 * Show the current Source
 */
exports.read = function(req, res) {
	res.jsonp(req.source);
};

/**
 * Update a Source
 */
exports.update = function(req, res) {
	var source = req.source;

	source = _.extend(source, req.body);

	source.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(source);
		}
	});
};

/**
 * Delete an Source
 */
exports.delete = function(req, res) {
	var source = req.source;

	source.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(source);
		}
	});
};

/**
 * List of Sources
 */
exports.list = function(req, res) {
	Source.find().sort('-created').populate('user', 'displayName').exec(function(err, sources) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(sources);
		}
	});
};

/**
 * Source middleware
 */
exports.sourceByID = function(req, res, next, id) {
	Source.findById(id).populate('user', 'displayName').exec(function(err, source) {
		if (err) return next(err);
		if (!source) return next(new Error('Failed to load Source ' + id));
		req.source = source;
		next();
	});
};

/**
 * Only allow users with role admin to this module
 */
exports.hasAuthorization = function(req, res, next) {
	if (_.intersection(req.user.roles, ['admin']).length) {
				return next();
			} else {
				return res.send(403, {
					message: 'User is not authorized'
				});
			}
};