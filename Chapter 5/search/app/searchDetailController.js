angular.module('search')
		.controller('SearchDetailController',['$scope','$routeParams',function($scope,$routeParams){
			$scope.detail = {
				id : $routeParams.id
			}
		}]);