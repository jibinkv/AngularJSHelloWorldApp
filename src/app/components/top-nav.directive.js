(function (){
	'use strict';

	angular
		.module('AngularJsHelloWorldApp')
		.directive('topNav',topNav);

	function topNav(){
		var directive = {
			link: link,
			templateUrl: 'app/components/top-nav.html',
			restrict: 'EA'
		}
		return directive;

		function link(scope, element, attrs){

		}
	}
})();
