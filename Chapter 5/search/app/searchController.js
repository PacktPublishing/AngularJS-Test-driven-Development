angular.module('search')
		.controller('SearchController',['$scope',function($scope){
			$scope.results = [];
			$scope.search = function(){
				$scope.results = [{id:1,name:'Any Value'}];
			};
		}]);