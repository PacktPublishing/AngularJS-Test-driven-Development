describe('',function(){
	var scope = {};
	var $httpBackend = null;
	beforeEach(function(){
		module('product');
		inject(function($controller,_$httpBackend_){
			$httpBackend = _$httpBackend_;
			$controller('ProductController',{$scope: scope});
		});
	});
	it('',function(){
		var testProduct = productDataBuilder().build();
		$httpBackend.when('GET','/products').respond(200,[testProduct]);
		scope.getAll();

		$httpBackend.flush();
		expect(scope.results[0]).toEqual(testProduct);
	});
	it('',function(){
		$httpBackend.when('GET','/products').respond(500,'error');
		scope.getAll();

		$httpBackend.flush();
		expect(scope.error).toEqual('error');
	});
});