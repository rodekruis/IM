'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
	_ = require('lodash');

/**
 * Map authorization middleware
 */
exports.hasAuthorization = function(roles) {
	var _this = this;

	return function(req, res, next) {
		_this.requiresLogin(req, res, function() {
			if (_.intersection(req.user.roles, roles).length) {
				return next();
			} else {
				return res.send(403, {
					message: 'User is not authorized'
				});
			}
		});
	};
};
