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
				'public/lib/cartodb/cartodb.css',
				'public/lib/jquery-ui/themes/smoothness/jquery-ui.css',
				'public/lib/angular-centered/angular-centered.css',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.css',
				'public/lib/ng-grid/ng-grid.css',
				'public/lib/select2/select2.css',
				//'public/lib/select2-bootstrap-css/select2-bootstrap.css',
				'public/lib/forms-angular/css/forms-angular-bs3.css',
				'public/lib/angular-carousel/dist/angular-carousel.css',
				'public/lib/leaflet-search/dist/leaflet-search.src.css',
			],
			js: [

				'public/lib/jquery/jquery.js',
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
				//'public/lib/leaflet-dist/leaflet-src.js',
				'public/lib/cartodb/cartodb.uncompressed.js',
				'public/lib/cartodb/activelayers.js',
				'public/lib/angular-centered/angular-centered.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/lib/smart-table/Smart-Table.min.js',
				'public/lib/angular-ui-sortable/sortable.min.js',
				'public/lib/angular-ui-dashboard/dist/angular-ui-dashboard.js',
				'public/lib/angular-ui-date/src/date.js',
				'public/lib/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
				'public/lib/ngInfiniteScroll/build/ng-infinite-scroll.js',
				'public/lib/jspdf/dist/jspdf.debug.js',
				'public/lib/ng-grid/build/ng-grid.debug.js',
				'public/lib/angular-elastic/elastic.js',
				'public/lib/angular-ui-select2/src/select2.js',
				'public/lib/ckeditor/ckeditor.js',
				'public/lib/ng-ckeditor/ng-ckeditor.js',
				'public/lib/forms-angular/forms-angular.js',
				'public/lib/angular-carousel/dist/angular-carousel.js',
				'https://maps.googleapis.com/maps/api/js?v=3&sensor=true',
				'public/lib/leaflet-search/dist/leaflet-search.src.js'
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