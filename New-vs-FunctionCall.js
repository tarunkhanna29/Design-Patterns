var Funcc = function (a, b) {
	this.val = a+b;
	val2 = a + b + 1;
	return val2;
}

var myValue = Funcc (2, 3);
console.log (myValue);

var myObject = new Funcc (2, 3);
console.log (myObject);

//========================================//

var myObject2 = myObject;
myObject2.val = 11;
console.log (myObject);
console.log (myObject2);

//========================================//

var myObject3 = new Funcc();
myObject3.val = 15;
console.log (myObject);
console.log (myObject3);

//If func returns object, then new will also get the return object instead of getting the object through this keyword.
//If func returns object, it is Factory Pattern
//If func returns object, it doesn't support prototype.
var Funcc2 = function () {
	this.val = 10;
	this.val2 = 20;
	return {
		val3 : 30,
		val4 : 40
	};
}
Funcc2.prototype.newFunc = function () {
	console.log ("Hello World");
}

Funcc2.prototype = {
	f1 : function () {
		console.log ("f1");
	},

	f2 : function () {
		console.log ("f2");
	}
};

//Both z1 and z2 will return object with values in return rather values tied up with this keyword.
var z1 = Funcc2();
console.log (z1);
var z2 = new Funcc2();
console.log (z2);
console.log ("z1==z2 " + (z1==z2)); //False because both are different objects with same value.
//newFunc is not available from both z1 as well as z2
//z1.newFunc();
//z2.newFunc();
//z1.f1();
//z2.f1();
