
searchDirectiveApp.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'searchController'

	}).when('/searchActors', {
		templateUrl: 'views/searchActors.html',
		controller: 'actorsController'

	}).when('/searchMovies', {
		templateUrl: 'views/searchMovies.html',
		controller: 'moviesController'

	}).when('/home', {
		templateUrl: 'views/home.html',
		controller: 'searchController'
		
	})
	.otherwise({ 
		redirectTo: '/'});
}])