var obj = {
	_count : 0,
	generateId : function () {
		return this._count++;
	},
	generateVal : function () {
		var myId = this.generateId();
		return "Val is " + myId;
	}
};

console.log (obj.generateVal());
console.log (obj.generateVal());
console.log (obj.generateVal());
obj._count = "no";
console.log (obj.generateVal());

//_ stands for private variable but _count in above object can be changed. So, the way to prevent changing private variable is IIFE - Immediatly Invoked Function Expression.
var obj2 = (function (jQ) {
	var _count = 0;
	var generateId = function () { // This would allow us to use generateId to be used elsewhere inside Obj2 but outside return.
		return _count++;
	};
	var generateVal = function () { //This would allow us to use generateVal to be used elsewhere inside Obj2 but outside return.
		var myId = generateId();
		return "Val2 is " + myId;
	}
	return {
		generateId : generateId,
		generateVal : generateVal,
	};
}(obj));	//Parameter can be passed to IIFE and can be used as argument or both can be empty.

console.log (obj2.generateVal());
console.log (obj2.generateVal());
console.log (obj2.generateVal());
obj2._count = 55;		//This doesn't change value of above _count.
console.log (obj2.generateVal());

var obj3 = (function () {
	var _count = 0;
	var generateId = function () { 
		return _count++;
	};
	var generateVal = function () {
		var myId = generateId();
		return "Val2 is " + myId;
	};
	var createInstance = function () {
		return {
			generateId : generateId,
			generateVal : generateVal,			
		};
	}
	return {
		getInstance : function () {
			return createInstance();
		}
	};
}());

var instance31 = new obj3.getInstance();
var instance32 = new obj3.getInstance();
console.log ("instance31 == instance32 " + (instance31 == instance32));

//Below define function is used to define module. First parameter is Id and second parameter is array of dependecies.
//First 2 parameters are optional. 3rd parameter is IIFE but we don't have to invoke it. 
//Parameter in the function are in order of dependencies listed in array.
//Purpose is similar like module.exports

/*define ("myId", ["dependency1", "directory/dependency2"], function (dep1, dep2) {

});*/

/*define (function () {
	
});

/*
//Generate.js
define (function () {
	var _counter = 0;
	var generateId = function () {
		return _count++;
	};
	var generateVal = function () {
		var myId = generateId();
		return "Val is " + myId;
	};
	return {
		generateId : generateId,
		generateVal : generateVal,
	};
});
//Consume.js
require (["Generate"], function (res) {
	
})
*/