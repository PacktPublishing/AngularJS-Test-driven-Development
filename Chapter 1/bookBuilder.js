var bookBuilder = function(){
	var _resultBook = {
		id: 1,
		author: 'Any Author',
		dateTime: new DateTime()
	};

	this.build = function(){
		return _resultBook;
	};

	this.setAuthor = function(author){
		_resultBook.author = author;
		return this;
	};
	
	this.setDateTime = function(dateTime){
		_resultBook.dateTime = dateTime;
		return this;
	};
};
