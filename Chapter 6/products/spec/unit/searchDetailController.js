describe('Given we are getting search detail',function(){
	var scope = {};
	var fakeProduct = {productId: 1,
						productName:"anyProductName",
						productDescription: "anyProductDescription",
						productImage:"anyProductImage"}
	beforeEach(function(){
		module('product');
		inject(function($controller,$rootScope){
			var route = {productId:1};
			scope = $rootScope.$new();
			var productService = {getProduct : function(){return fakeProduct;}};
			$controller('SearchDetailController',{$scope:scope,$routeParams:route,productService:productService});

		});
	});

	describe('',function(){
		var savedToCartEventSpy = jasmine.createSpy();
		beforeEach(function(){
			inject(function($rootScope){
				$rootScope.$on('SAVEDTOCART',savedToCartEventSpy);
				var fakeProduct = {productId:1};
				scope.saveProduct(fakeProduct);	
			});
		})
		afterEach(function(){
			savedToCartEventSpy.calls.reset();
		});
		it('',function(){
			expect(savedToCartEventSpy).toHaveBeenCalled();
		})
	})
	it('Should set the detail id',function(){
		expect(scope.product.productId).toBe(1);
	});

	it('Should set the product name',function(){
		expect(scope.product.productName).toBe("anyProductName");
	});
	it('Should set the product description',function(){
		expect(scope.product.productDescription).toBe("anyProductDescription");
	});
	it('Should set the product image',function(){
		expect(scope.product.productImage).toBe("anyProductImage");
	});
});