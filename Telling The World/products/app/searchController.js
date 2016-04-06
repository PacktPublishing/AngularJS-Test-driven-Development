angular.module('product')
		.controller('SearchController',['$scope','$rootScope',function($scope,$rootScope){
			$scope.results = [];
			$scope.search = function(){
				$scope.results = [{id:1,name:'Any Value'}];
			};
			$scope.selectProduct = function(productId){
				$rootScope.$broadcast('SELECTEDPRODUCT',productId);
			};
		}]);