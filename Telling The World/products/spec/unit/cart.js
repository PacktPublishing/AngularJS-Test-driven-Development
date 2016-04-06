describe('',function(){
	var scope = {};
	beforeEach(function(){
		module('product');
		inject(function($controller,$rootScope){
			scope = $rootScope.$new();
			$controller('CartController',{$scope:scope,$rootScope:$rootScope});
			var fakeProduct = {productId:1};
			$rootScope.$broadcast('SAVEDTOCART',fakeProduct);
		});
	});
	it('',function(){
		expect(scope.cart.length).toBe(1);
	})
});