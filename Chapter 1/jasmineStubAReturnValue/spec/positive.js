describe('when logic 1 greater than logic 2',function(){
	beforeEach(function(){
		spyOn(complex,'logic').and.returnValue(1);
	});

	it('should return value of logic 2',function(){
		var result = positive(1);
		expect(result).toEqual(true);
	});

})