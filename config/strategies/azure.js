'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	url = require('url'),
	AzureStrategy = require('passport-azure-oauth').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users');

module.exports = function() {
	// Use facebook strategy
	passport.use(new AzureStrategy({
			clientId: config.azure.clientID,
			clientSecret: config.azure.clientSecret,
			tenantId: config.azure.tenantId,
			resource: config.azure.resource, // token url
			redirectURL: config.azure.redirectURL, // callback
			passReqToCallback: true
		},
		function(req, accessToken, refreshToken, profile, done) {
			var providerData = profile._json;
			
			if(providerData.hd === 'rodekruis.nl'){
				// Set the provider data and include tokens
				providerData.accessToken = accessToken;
				providerData.refreshToken = refreshToken;
	
				// Create the user OAuth profile
				var providerUserProfile = {
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					displayName: profile.displayName,
					email: profile.emails[0].value,
					username: profile.username,
					provider: 'azure',
					providerIdentifierField: 'id',
					providerData: providerData
				};
	
				// Save the user OAuth profile
				users.saveOAuthUserProfile(req, providerUserProfile, done);
			 }else{
				// fail        
				done(new Error('Dit is geen geldig @rodekruis.nl account'));
			 }
						
			
		}
	));
};
