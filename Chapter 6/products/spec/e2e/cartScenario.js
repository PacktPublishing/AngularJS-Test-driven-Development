describe('',function(){
	beforeEach(function(){
		browser.get("#/product/1")
		var saveToCartButton = element(by.buttonText('Save to Cart'));
		saveToCartButton.click();
	});
	it('',function(){
		var productsInCart = element.all(by.repeater('product in cart'));
		expect(productsInCart.count()).toBe(1);
	});
});