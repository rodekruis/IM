'use strict';

var secrets = require('../secrets');

module.exports = {
	db: 'mongodb://localhost/im-dev',
	usehttp: false, // should a non encrypted server be launced?
	usessl: true, // should an encrypted server be launced?
	app: {
		title: 'IM - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	},
	azure: {
		clientID: secrets.azure.clientID,
		clientSecret: secrets.azure.clientSecret,
		tenantId: secrets.azure.tenantId,
		resource: 'https://graph.windows.net',
		redirectURL: 'http://localhost:3000/auth/azure/callback',
		redirectURLSSL: 'http://localhost:3000/auth/azure/callback'
	}
};