describe('Given a view A that has a single button',function(){
	describe('When the button is pushed',function(){
		var viewA = element(by.css('#viewA'));
		var viewB = element(by.css('#viewB'));

		beforeEach(function(){
			browser.get('/');
			expect(viewA.isPresent()).toBeTruthy();
			var buttonToPush = element(by.linkText('flip'));
			buttonToPush.click();
		})
		it('should be switched to view B',function(){
			expect(viewB.isPresent()).toBeTruthy();
		})
		it('should not display view A',function(){
			expect(viewA.isPresent()).toBeFalsy();
		})
	})
})