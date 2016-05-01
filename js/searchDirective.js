/* searchFor directive accepts isolated scope variable searchData as an 
	array of entity array, and performs search on given searchData
*/
searchDirectiveApp.directive('searchFor', function() {
	
	var searchDirController = ['$scope', function($scope) {
		$scope.searchData = [];
		
		for(var i = 0; i < $scope.searchDataArr.length; i++) {
			if($scope.searchDataArr.length > 1) {
				$scope.searchData = $scope.searchData.concat($scope.searchDataArr[i]);
			} else {
				$scope.searchData = $scope.searchDataArr[0];
			}
		}

		$scope.inputChanged = function() {
			if($scope.searchText != '') {
				$('.searchDataList').css('display', 'block');
			} else {
				$('.searchDataList').css('display', 'none');
			}
		};
	}];

	return {
		restrict: 'AE',
		scope: {
			searchDataArr: '='
		},
		templateUrl: 'views/searchDirective.html',
		controller: searchDirController
	};
});

