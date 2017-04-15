var Beverage = function (name, temp) {
	this.name = name;
	this.temp = temp;
	return this;
}

Beverage.prototype.drink = function () {
	console.log ("I am drinking " + this.temp + " " + this.name);
}

Beverage.prototype.taste = function () {
	console.log ("I tasted " + this.temp + " " + this.name);
}

//Object creation
var water = new Beverage ("water", "mild");
console.log ("This is " + water.temp + " " + water.name);
water.drink ();

//Function Call
var coke = Beverage ("coke", "cold");
console.log ("This is " + coke.temp + " " + coke.name);
//coke.drink (); //Can't access as coke was not instance of Beverage

//coffee is object. So, cannot do coffee.prototype.sip and cannot create object of coffee or child class of coffee as coffee itself is object.
var coffee = new Beverage ("coffee", "hot");
coffee.sip = function () {
	console.log ("I am sipping " + this.temp + " " + this.name);
}
coffee.sip ();

var Daaru = function (type, name, temp) {
	Beverage.call (this, name, temp);	//Calling super constructor
	this.type = type;
}

Daaru.prototype = Object.create (Beverage.prototype); //Assigning all prototype member functions of super class

Daaru.prototype.bottomSup = function () {
	console.log ("I bottomSupped " + this.temp + " " + this.type + " " + this.name);
}

var JD = new Daaru ("whisky", "Jack Daniel", "chill");
JD.taste();
JD.drink();
JD.bottomSup();