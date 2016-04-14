var ValidateBuilder = function(){
	var _complexThing = {
		id: 1,
		author: "Any Author",
		dateTime: new DateTime()
	};

	this.setAuthor = function(author){
		this._complexThing.author = author;
		return this;
	};

	this.setDateTime = function(dateTime){
		this._complexThing.dateTime = dateTime;
		return this;
	};

	this.build = function(){
		return this._complexThing;
	};
};

describe('',function(){
	var complexThing = new ValidateBuilder().build();
	it('validations should return true',function(){
		var result = validate(complexThing);
		assert(result)
	})
});

describe('',function(){
	var complexThing = new ValidateBuilder().setAuthor(null).build();
	it('validations should return true',function(){
		var result = validate(complexThing);
		assert(!result)
	})
});

describe('',function(){
	var complexThing = new ValidateBuilder().setDateTime(null).build();
	it('validations should return true',function(){
		var result = validate(complexThing);
		assert(!result)
	})
});