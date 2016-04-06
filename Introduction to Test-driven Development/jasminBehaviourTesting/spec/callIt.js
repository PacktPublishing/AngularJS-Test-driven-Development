describe('when calling callIt',function(){
	beforeEach(function(){
		spyOn(complex,'logic');
	});

	it('should call expected number of times',function(){
		callIt(1);
		var callCount = complex.logic.calls.count();
		expect(callCount).toEqual(1);
	});
	it('should call with expected arguments',function(){
		callIt(3);
		var callArgs = complex.logic.calls.argsFor(1);
		expect(callArgs[0]).toEqual(1);
	});
})