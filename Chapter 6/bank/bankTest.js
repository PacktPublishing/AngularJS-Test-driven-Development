describe('',function(){
	var atmScope = {};
	var recentTransactionScope = {};
	beforeEach(function(){
		module('bank');
		inject(function($controller,$rootScope){
			recentTransactionScope = $rootScope.$new();
			atmScope =$rootScope.$new();
			$controller('AtmController',{$scope:atmScope});
			$controller('RecentTransactionsController',{$scope:recentTransactionScope});
		});
	});

	describe('When withdrawing',function(){
		beforeEach(function(){
			spyOn(atmScope,'$emit').and.callThrough();
			spyOn(recentTransactionScope.recent,'push');
			atmScope.withdraw(3.33);
		});
		afterEach(function(){
			atmScope.$emit.calls.reset();
			recentTransactionScope.recent.push.calls.reset();
		})
		it('should emit an event',function(){
			expect(atmScope.$emit).toHaveBeenCalled();
		});
		it('should send event to recent transactions',function(){
			expect(recentTransactionScope.recent.push).toHaveBeenCalled();
		});
	});
});