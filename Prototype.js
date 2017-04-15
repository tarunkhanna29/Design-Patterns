//MyFunc is a constructor function because we will use new keyword to invoke it.
function MyFunc (x) {
	//sayHello is property of MyFunc that contains funtion object. This results in use of extra memory.
	this.sayHello = function (y) {
		console.log (x+y);
	}
}

MyFunc.prototype.sayHi = function (z) {
	this.sayHello(z);
}

MyFunc.prototype.val = "x";

//Below 3 functions will have there own sayHello but will share same sayHi.
var myFunc1 = new MyFunc(2);
var myFunc2 = new MyFunc(3);
var myFunc3 = new MyFunc(4);

var sayHelloEquality = myFunc1.sayHello == myFunc2.sayHello;  //False
var sayHiEquality = myFunc1.sayHi == myFunc2.sayHi;  //True
myFunc3.val = "I am not x";

myFunc1.sayHello(5);
myFunc2.sayHello(6);
myFunc3.sayHello(7);
myFunc1.sayHi(11);
myFunc2.sayHi(12);
myFunc3.sayHi(13);
console.log ("sayHelloEquality " + sayHelloEquality);
console.log ("sayHiEquality " + sayHiEquality);
console.log ("myFunc1.val " + myFunc1.val);
console.log ("myFunc2.val " + myFunc2.val);
console.log ("myFunc3.val " + myFunc3.val);

MyFunc.prototype.newMemberFunction = function () {
	console.log ("I am new member function");
}

myFunc1.newMemberFunction();
myFunc2.newMemberFunction();
myFunc3.newMemberFunction();