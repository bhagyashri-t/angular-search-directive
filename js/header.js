
searchDirectiveApp.directive('searchHeader', function() {
	var headerController = ['$scope', '$location', function($scope, $location) {
		var activeTab = 0;
		$scope.goTo = function(page) {

			switch (page) {
				case 'Home':
					addActiveClass(0);
					//activeTab = 0;
					$location.path('/home');
					break;
				case 'Actors':
					addActiveClass(1);
					//activeTab = 1;
					$location.path('/searchActors');
					break;
				case 'Movies':
					addActiveClass(2);
					//activeTab = 2;
					$location.path('/searchMovies');
					break;
				default:
					break;
			}
		}

		// $('.navtabs li').on('click', function(e) {
		// 		e.preventDefault();
		// 		$.each( $('.navtabs li'), function(index) {

		// 		if($(this).attr('class') == 'activeTab') {

		// 			$(this).removeClass('activeTab');
		// 		}
		// 		if(index == activeTab) {
		// 			$(this).addClass('activeTab');
		// 		} 
		// 		//console.log(index, $(this));
		// 	});
		// })
		function addActiveClass(activeTab) {
			 var list = $('.navtabs li');
			$.each( list, function(index) {

				if(list[index].className == 'activeTab') {
					list[index].className = '';
					//$(this).removeClass('activeTab');
					//$(this).attr('class', '');
				}
				if(index == activeTab) {
					//$(this).addClass('activeTab');
					//$(this).attr('class', 'activeTab')
					list[index].className = 'activeTab';
				} 
				//console.log(index, $(this));
			});
		}
	}];

	return {
		restrict: 'AE',
		templateUrl: 'views/header.html',
		controller: headerController
	}
})