'use strict';

describe('Given we are using a todo application',function(){
	var scope = {};
	beforeEach(function(){
		module('todo');
		inject(function($controller){
			$controller('TodoController',{$scope:scope});
		});
	});

	it('should define a list object',function(){
		expect(scope.list).toBeDefined();
	});

	it('should define a list object',function(){
		expect(scope.list[0]).toEqual('test');
	});
	
	it('should define a list object',function(){
		expect(scope.list[1]).toEqual('execute');
	});
	it('should define a list object',function(){
		expect(scope.list[2]).toEqual('refactor');
	});
	describe('',function(){

		beforeEach(function(){
			scope.add('repeat');
		});

		it('should add item to last item in list',function(){
			var lastIndexOfList = scope.list.length - 1;
			expect(scope.list[lastIndexOfList]).toEqual('repeat');
		});
	});
});