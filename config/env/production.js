'use strict';

var secrets = require('../secrets');

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/im-dev',
	usehttp: true, // should a non encrypted server be launched?
	usessl: true, // should an encrypted server be launced?
	port: process.env.PORT || 3000,
	sslport: process.env.SSLPORT || 444,
	key_file: './config/cert/rodekruis-key.pem',
	cert_file: './config/cert/rodekruis-cert.pem',
	ca_file: './config/cert/thawte.ca',
	app: {
		title: 'Rode Kruis Digital Operations Center'
	},
	assets: {
		lib: {
			css: [
				'public/lib/forms-angular/css/forms-angular-bs3.css',
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/bootstrap-glyphicons/css/bootstrap.icon-large.min.css',
				'public/lib/leaflet-dist/leaflet.css',
				'public/lib/cartodb.js/dist/cartodb.css',
				'public/lib/jquery-ui/themes/smoothness/jquery-ui.min.css',
				'public/lib/angular-centered/angular-centered.css',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.css',
				'public/lib/ng-grid/ng-grid.min.css',
				'public/lib/select2/select2.css',
				'public/lib/angular-carousel/dist/angular-carousel.min.css',
				'public/lib/leaflet-search/dist/leaflet-search.min.css',
				'public/lib/angular-busy/dist/angular-busy.min.css',
				'public/lib/leaflet-gps/dist/leaflet-gps.min.css'
				
			],
			js: [
				'public/lib/jquery/jquery.min.js',
				'public/lib/jquery-ui/ui/minified/jquery-ui.min.js',
				'public/lib/lodash/dist/lodash.min.js',
				'public/lib/angular/angular.min.js',
				'public/lib/angular-lodash/angular-lodash.js',
				'public/lib/angular-route/angular-route.min.js',
				'public/lib/angular-resource/angular-resource.min.js', 
				'public/lib/angular-cookies/angular-cookies.min.js',    
				'public/lib/angular-animate/angular-animate.min.js', 
				'public/lib/angular-touch/angular-touch.min.js',  
				'public/lib/angular-sanitize/angular-sanitize.min.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
				'public/lib/angular-leaflet/dist/angular-leaflet-directive.min.js',
				'public/lib/leaflet/dist/leaflet.js',
				'public/lib/cartodb.js/dist/cartodb.noleaflet.js',
				'public/lib/cartodb.js/activelayers.js',
				'public/lib/angular-centered/angular-centered.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/lib/angular-ui-sortable/sortable.min.js',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.js',
				'public/lib/angular-ui-date/src/date.js',
				'public/lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
				'public/lib/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
				'public/lib/jspdf/dist/jspdf.min.js',
				'public/lib/ng-grid/build/ng-grid.min.js',
				'public/lib/angular-elastic/elastic.js',
				'public/lib/angular-ui-select2/src/select2.js',
				'public/lib/ckeditor/ckeditor.js',
				'public/lib/ng-ckeditor/ng-ckeditor.min.js',
				'public/lib/forms-angular/forms-angular.js',
				'public/lib/angular-carousel/dist/angular-carousel.min.js',
				'https://maps.googleapis.com/maps/api/js?v=3&sensor=true',
				'public/lib/leaflet-search/dist/leaflet-search.min.js',
				'public/lib/Leaflet.NonTiledLayer/NonTiledLayer.js',
				'public/lib/Leaflet.NonTiledLayer/NonTiledLayer.WMS.js',
				'public/lib/leaflet-betterwms/L.TileLayer.BetterWMS.js',
				'public/lib/Leaflet.WMS.GetLegendGraphic/leaflet-wms-getlegendgraphic.js',
				'public/lib/azgs-leaflet/js/lib/less-1.2.2.min.js',
				'public/lib/azgs-leaflet/js/lib/jade.js',
				'public/lib/leaflet.ajax/dist/leaflet.ajax.min.js',
				'public/lib/azgs-leaflet/js/azgs-leaflet/GeoJSON.WFS.js',
				'public/lib/azgs-leaflet/js/azgs-leaflet/GeoJSON.WFS.ClickResponder.js',
				'public/lib/angular-busy/dist/angular-busy.min.js',
				'public/lib/leaflet-gps/dist/leaflet-gps.min.js'
			]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
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
		redirectURL: 'http://digidoc.rodekruis.nl/auth/azure/callback',
		redirectURLSSL: 'https://digidoc.rodekruis.nl/auth/azure/callback'
	}
};