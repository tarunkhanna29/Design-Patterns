var Person = function (name) {
	this.name = name;
}

var Dog = function (name) {
	this.name = name;
}

var mover = {
	walk : function () {
		console.log (this.name + " is walking.");
	},

	run : function () {
		console.log (this.name + " is running.")
	}
};

var speaker = {
	speak : function () {
		console.log (this.name + " is speaking");
	}
}

//Extend function does job of Mixin. Mixin takes in object and mix the functionality of another object.
//Similarly, we can implement Mixin such that only selected methods from object is copied over to prototype of constructor function.
var extend = function () {
	for (var i = 1; i < arguments.length; i++) {
		for (var key in arguments[i]) {
			if (!arguments[0][key]) {
				arguments[0][key] = arguments[i][key];
			}
		}
	}
}

extend (Person.prototype, mover, speaker);  //Person.prototype = mover results in same because prototype points to object as well as mover points to object. Extend function is handled in more mature way.
//extend (Dog, speaker); //This doesn't work because prototype points to object but Dog points to constructor function where each member is handled with this keyword.
extend (Dog.prototype, speaker);
extend (Dog.prototype, mover);

var p1 = new Person ("tarun");
p1.run ();
p1.speak ();
var d1 = new Dog ("hushy");
d1.speak ();
d1.run ();