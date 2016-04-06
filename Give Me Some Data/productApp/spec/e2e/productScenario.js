describe('',function(){
	beforeEach(function(){
		browser.get('/index.html');
		var productButton = element(by.buttonText('Get Products'));
		productButton.click();
	});
	it('',function(){
		var results = element.all(by.repeater('result in results'));
		expect(results.count()).toBeGreaterThan(0);
	});
});
