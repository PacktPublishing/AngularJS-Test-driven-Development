angular.module('anyModule',[])
	.service('productService', ['$http',function($http){
		return {
			search : function(query){
				return $http.get('/product/search');
			}
		};
	}]);

describe('',function(){
	var $httpBackend = null;
	var productService = null;
	beforeEach(function(){
		module('anyModule');
		inject(function(_$httpBackend_,_productService_){
			$httpBackend = _$httpBackend_;
			productService = _productService_;
		});
	});

	it('',function(){
		$httpBackend.when('GET','/product/search').respond(200,'');
		$httpBackend.expectGET('/product/search');
		productService.search('any');
		$httpBackend.flush();
	});
	it('',function(done){
		$httpBackend.when('GET','/product/search').respond(500,'');
		productService.search('any').error(function(){
			expect(true).toBe(true);
			done();
		})
		$httpBackend.flush();
	});

});
