var obj = function (m) {
	this.m = m;
	return {
		'a' : 5,
		'b' : 6
	};
}

//We call obj as function and get object in return instead of using new keyword and getting the object using this keyword.
var x = obj();
console.log (x);
var y = obj();
console.log (y);
console.log ("x == y " + (x == y));