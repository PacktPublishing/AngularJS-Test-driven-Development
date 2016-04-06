describe('',function(){
	var recentlyViewedScope = null;
	beforeEach(function(){
		module('product');
		inject(function($controller,$rootScope){
			recentlyViewedScope = $rootScope.$new();
			$controller('RecentlyViewedController',{$scope:recentlyViewedScope});

			expect(recentlyViewedScope.recent.length).toBe(0);
			var fakeProductEvent = {productId:1};
			$rootScope.$broadcast('SELECTEDPRODUCT',fakeProductEvent);
		});
	});
	it('',function(){
		expect(recentlyViewedScope.recent.length).toBe(1);
	});
});


// describe('asdf',function(){
// 	var searchControllerScope = {};
// 	var recentlyViewedScope = {};

// 	beforeEach(function(){
// 		module('product');
// 		inject(function($controller){
// 			$controller('SearchController',{$scope:searchControllerScope});
// 			$controller('RecentlyViewedController',{$scope:recentlyViewedScope});
// 		});
// 		expect(recentlyViewedScope.recent.length).toBe(0);
// 		searchControllerScope.selectProduct();
// 	});

// 	afterEach(function(){
// 		searchControllerScope = {};
// 		recentlyViewedScope = {};
// 	});

// 	it('',function(){
// 		expect(recentlyViewedScope.recent.length).toBe(1)
// 	});
// });