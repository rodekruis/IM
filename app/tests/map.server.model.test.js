'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	AMap = mongoose.model('AMap');

/**
 * Globals
 */
var user, map;

/**
 * Unit tests
 */
describe('Map Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() {
			map = new AMap({
				title: 'Map Title',
				content: 'Map Content',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return map.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without title', function(done) {
			map.title = '';

			return map.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		AMap.remove().exec();
		User.remove().exec();
		done();
	});
});