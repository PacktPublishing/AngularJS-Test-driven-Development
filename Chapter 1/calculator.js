var calculator = {
	multiply : function(amount1,amount2){
		return amount1* amount2;
	}
};

var multipleTest1 = function (){
	var result = calculator.multiply(3,3);

	if (result === 9) {
		console.log('Test Passed');
	}
	else{
		console.log('Test Failed');
	}

};

multipleTest1();