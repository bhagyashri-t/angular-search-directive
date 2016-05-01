
var searchDirectiveApp = angular.module('searchDirectiveApp', ['ngRoute']);

searchDirectiveApp.controller('searchController', [ '$scope', 'actorsFactory', 'moviesFactory', 'directorsFactory', function($scope, actorsFactory, moviesFactory, directorsFactory) {
	$scope.actors = actorsFactory.actors;
	$scope.movies = moviesFactory.movies;
	$scope.directors = directorsFactory.directors;

	$scope.searchData = [$scope.actors, $scope.movies, $scope.directors];
}]);

searchDirectiveApp.controller('actorsController', [ '$scope', 'actorsFactory', function($scope, actorsFactory) {
	$scope.actors = actorsFactory.actors;

	$scope.searchData = [$scope.actors];
}]);

searchDirectiveApp.controller('moviesController', [ '$scope', 'moviesFactory', function($scope, moviesFactory) {
	$scope.movies = moviesFactory.movies;

	$scope.searchData = [$scope.movies];
}]);