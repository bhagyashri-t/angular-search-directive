
searchDirectiveApp.directive('searchHeader', function() {
	
	var headerController = ['$scope', '$location', function($scope, $location) {

		$scope.goTo = function(page) {

			switch (page) {
				case 'Home':
					addActiveClass(0);
					$location.path('/home');
					break;
				case 'Actors':
					addActiveClass(1);
					$location.path('/searchActors');
					break;
				case 'Movies':
					addActiveClass(2);
					$location.path('/searchMovies');
					break;
				default:
					break;
			}
		}

		function addActiveClass(activeTab) {
			 var list = $('.navtabs li');
			$.each( list, function(index) {

				if(list[index].className == 'activeTab') {
					list[index].className = '';
				}
				if(index == activeTab) {
					list[index].className = 'activeTab';
				}
			});
		}
	}];

	return {
		restrict: 'AE',
		templateUrl: 'views/header.html',
		controller: headerController
	}
})