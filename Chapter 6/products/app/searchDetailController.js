angular.module('product')
		.controller('SearchDetailController',['$scope','$routeParams','productService','$rootScope',function($scope,$routeParams,productService,$rootScope){
			var product = productService.getProduct();
			$scope.product = product;
			$scope.saveProduct = function(product){
				$rootScope.$broadcast('SAVEDTOCART',product);
			};
		}]);