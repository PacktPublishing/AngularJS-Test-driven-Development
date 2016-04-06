angular.module('product')
	.service('productService', ['$http',function($http){
		return {
			getAll : function(){
				return $http.get('/products')
			}
		};
	}]);