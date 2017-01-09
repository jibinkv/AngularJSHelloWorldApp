(function (){
	'use strict';

	 angular.module('AngularJsHelloWorldApp')
  		.config(routeConfig);

  	function routeConfig($locationProvider, $routeProvider){
  	  $locationProvider.html5Mode(true);
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "app/home/home.html",
          controller: "HomeController",
          controllerAs: "vm"
        })
        .when("/contact", {
          templateUrl: "app/contact/contact.html",
          controller: "ContactController",
          controllerAs: "vm"
        })
        .otherwise({
           redirectTo: '/'
        });
  	}

})();