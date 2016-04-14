describe('',function(){
	var $httpBackend = null;
	var productService = null;
	beforeEach(function(){
		module('product');
		inject(function(_$httpBackend_,_productService_){
			$httpBackend = _$httpBackend_;
			productService = _productService_;
		});
	});

	it('',function(){
		$httpBackend.when('GET','/products').respond(200,'');
		$httpBackend.expectGET('/products');
		productService.getAll('any');
		$httpBackend.flush();
	});
	it('',function(done){
		$httpBackend.when('GET','/products').respond(500,'');
		productService.getAll('any').error(function(){
			expect(true).toBe(true);
			done();
		})
		$httpBackend.flush();
	});

});
