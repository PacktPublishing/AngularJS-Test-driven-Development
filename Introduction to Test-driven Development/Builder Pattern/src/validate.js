var complexThing = {
	id : '',
	author : '',
	dateTime : ''
};

var validate = function(complexThingToValidate){
	if(!complexThingToValidate.author)
		return false;

	if(!complexThingToValidate.dateTime)
		return false;
	
	return true;
};