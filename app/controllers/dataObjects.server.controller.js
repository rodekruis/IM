'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	DataObject = mongoose.model('DataObject'),
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
				message = 'DataObject already exists';
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
 * Create a dataObject
 */
exports.create = function(req, res) {
	var dataObject = new DataObject(req.body);
	dataObject.user = req.user;

	dataObject.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(dataObject);
		}
	});
};

/**
 * Show the current dataObject
 */
exports.read = function(req, res) {
	res.jsonp(req.dataObject);
};

/**
 * Update a dataObject
 */
exports.update = function(req, res) {
	var dataObject = req.dataObject;

	dataObject = _.extend(dataObject, req.body);

	dataObject.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(dataObject);
		}
	});
};

/**
 * Delete an dataObject
 */
exports.delete = function(req, res) {
	var dataObject = req.dataObject;

	dataObject.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(dataObject);
		}
	});
};

/**
 * List of DataObjects
 */
exports.list = function(req, res) {
	DataObject.find().sort('-created').populate('user', 'displayName').exec(function(err, dataObjects) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(dataObjects);
		}
	});
};

/**
 * DataObject middleware
 */
exports.dataObjectByID = function(req, res, next, id) {
	DataObject.findById(id).populate('user', 'displayName').exec(function(err, dataObject) {
		if (err) return next(err);
		if (!dataObject) return next(new Error('Failed to load dataObject ' + id));
		req.dataObject = dataObject;
		next();
	});
};

/**
 * DataObject authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.dataObject.user.id !== req.user.id) {
		return res.send(403, {
			message: 'User is not authorized'
		});
	}
	next();
};