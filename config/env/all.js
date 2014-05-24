'use strict';

module.exports = {
	app: {
		title: 'IM',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/leaflet-dist/leaflet.css',
				'public/lib/angular-centered/angular-centered.css',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.css',
			],
			js: [
				'public/lib/jquery/dist/jquery.min.js',
				'public/lib/jquery-ui/ui/jquery-ui.js',
				'public/lib/lodash/dist/lodash.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-lodash/angular-lodash.js',
				'public/lib/angular-route/angular-route.min.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js',  
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/angular-leaflet/dist/angular-leaflet-directive.js',
				'public/lib/leaflet-dist/leaflet.js',
				'public/lib/angular-centered/angular-centered.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/lib/smart-table/Smart-Table.min.js',
				'public/lib/angular-ui-sortable/sortable.min.js',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.js',
				
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};