app
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
		    url: '/app',
		    abstract: true,
		    templateUrl: 'templates/menu.html',
		    controller: 'AppCtrl'
		  })

		.state("main", {
			url: "/",
			templateUrl: "templates/main.html",
			controller: "MainCtrl"
		})

		.state("startApp", {
			url: "/start",
			templateUrl: "templates/startApp.html",
			controller: "startAppCtrl",
			params: {
				name_set: {
					value: null
				},
				gender_set: {
					value: null
				}
			}
		})

	$urlRouterProvider.otherwise("/");
});