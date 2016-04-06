describe('',function(){
	beforeEach(function(){
		browser.get('http://localhost:8080/index.html');
	});
	it('',function(){
		expect(browser.getTitle()).toBe('seleniumTestTitle');
	})
});
