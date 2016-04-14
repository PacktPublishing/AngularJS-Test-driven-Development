describe('',function(){
	var recentTransactionScope = {};
	var rootScope = {};
	beforeEach(function(){
		module('bank');
		inject(function($controller,$rootScope){
			rootScope = $rootScope.$new();
			recentTransactionScope = $rootScope.$new();
			$controller('RecentTransactionsController',{$scope:recentTransactionScope});
		});
		spyOn(recentTransactionScope.recent,'push');
		rootScope.$emit('WITHDREW',3);
	});
	afterEach(function(){
		recentTransactionScope.recent.push.calls.reset();
	})
	it('should send event to recent transactions',function(){
		expect(recentTransactionScope.recent.push).toHaveBeenCalled();
	});
});