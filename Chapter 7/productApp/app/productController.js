angular.module('product')
	.controller('ProductController',['$scope','productService',function($scope,productService){
		$scope.getAll = function(){
			productService.getAll()
						.success(function(data){
							$scope.results = data;
						})
						.error(function(error){
							$scope.error = error;
						})
		};
	}]);