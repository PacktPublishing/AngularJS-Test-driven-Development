describe('',function(){
	var spy = jasmine.createSpy();
	beforeEach(function(done){
		var asynchronousFunc = function(callback){
			setTimeout(callback,0);
		};
		var callback = function(){
			spy();
			done();
		};
		asynchronousFunc(callback);
	});
	it('',function(){
		expect(spy).toHaveBeenCalled();
	});
});
