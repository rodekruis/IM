'use strict';


angular.module('monitors').directive('twitterTimeline', [function() {
		return {
			restrict: 'A',
			scope: {
				cssUrl: '@',
				autoResize: '='
			},
			link: function (scope, element, attrs) {
				angular.element('body').removeAttr('data-twttr-rendered');

				element
					.attr('id', 'twitter-feed')
					.attr('width', '100%' || attrs.width)
					.attr('data-chrome', 'noheader transparent')
					.attr('data-widget-id', attrs.twitterTimeline)
					.addClass('twitter-timeline');

				function render() {
					var body = angular.element('.twitter-timeline').contents().find('body');

					if (scope.cssUrl) {
						body.append(angular.element('<link/>', { rel: 'stylesheet', href: scope.cssUrl, type: 'text/css' }));
					}

					function setHeight() {
						if (body.find('.stream').length === 0) {
							setTimeout(setHeight, 100);
						} else {
							body.find('.stream').addClass('stream-new').removeClass('stream').css('height', 'auto');
							angular.element('.twitter-timeline').css('height', (body.height() + 20) + 'px');
						}
					}

					if (scope.autoResize) {
						setHeight();
					}
				}

				if (!angular.element('#twitter-wjs').length) {
					$.getScript((/^http:/.test(document.location)?'http':'https') + '://platform.twitter.com/widgets.js', function() {
						render();
						angular.element('.twitter-timeline').load(render);
	        		});
				}
			}
		};

}]);