describe('Given we are getting search detail',function(){
	var scope = {};
	beforeEach(function(){
		module('search');
		inject(function($controller){
			var route = {id:1};
			$controller('SearchDetailController',{$scope:scope,$routeParams:route});
		});

	});

	it('Should return results',function(){
		expect(scope.detail.id).toBe(1);
	});
});