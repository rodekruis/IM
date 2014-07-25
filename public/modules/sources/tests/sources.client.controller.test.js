'use strict';

(function() {
	// Sources Controller Spec
	describe('Sources Controller Tests', function() {
		// Initialize global variables
		var SourcesController,
			scope,
			$httpBackend,
			$stateParams,
			$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Sources controller.
			SourcesController = $controller('SourcesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Source object fetched from XHR', inject(function(Sources) {
			// Create sample Source using the Sources service
			var sampleSource = new Sources({
				name: 'New Source'
			});

			// Create a sample Sources array that includes the new Source
			var sampleSources = [sampleSource];

			// Set GET response
			$httpBackend.expectGET('sources').respond(sampleSources);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.sources).toEqualData(sampleSources);
		}));

		it('$scope.findOne() should create an array with one Source object fetched from XHR using a sourceId URL parameter', inject(function(Sources) {
			// Define a sample Source object
			var sampleSource = new Sources({
				name: 'New Source'
			});

			// Set the URL parameter
			$stateParams.sourceId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/sources\/([0-9a-fA-F]{24})$/).respond(sampleSource);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.source).toEqualData(sampleSource);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Sources) {
			// Create a sample Source object
			var sampleSourcePostData = new Sources({
				name: 'New Source'
			});

			// Create a sample Source response
			var sampleSourceResponse = new Sources({
				_id: '525cf20451979dea2c000001',
				name: 'New Source'
			});

			// Fixture mock form input values
			scope.name = 'New Source';

			// Set POST response
			$httpBackend.expectPOST('sources', sampleSourcePostData).respond(sampleSourceResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Source was created
			expect($location.path()).toBe('/sources/' + sampleSourceResponse._id);
		}));

		it('$scope.update() should update a valid Source', inject(function(Sources) {
			// Define a sample Source put data
			var sampleSourcePutData = new Sources({
				_id: '525cf20451979dea2c000001',
				name: 'New Source'
			});

			// Mock Source in scope
			scope.source = sampleSourcePutData;

			// Set PUT response
			$httpBackend.expectPUT(/sources\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/sources/' + sampleSourcePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid sourceId and remove the Source from the scope', inject(function(Sources) {
			// Create new Source object
			var sampleSource = new Sources({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Sources array and include the Source
			scope.sources = [sampleSource];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/sources\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleSource);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.sources.length).toBe(0);
		}));
	});
}());