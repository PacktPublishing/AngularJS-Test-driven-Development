describe('',function(){
	var selectedProductSpy = jasmine.createSpy();
	beforeEach(function(){
		module('product');
		inject(function($controller,$rootScope){
			var searchControllerScope = $rootScope.$new();
			$controller('SearchController',{$scope:searchControllerScope,$rootScope:$rootScope});
			$rootScope.$on('SELECTEDPRODUCT',selectedProductSpy);
			var fakeProduct = {productId:1};
			searchControllerScope.selectProduct(fakeProduct);
		});
	});
	it('',function(){
		expect(selectedProductSpy).toHaveBeenCalled();
	});
});