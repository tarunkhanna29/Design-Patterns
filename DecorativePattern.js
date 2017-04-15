//Beverage is used as Interface in this example. So, no object for Beverage will be created.
var Beverage = function () {
	this._cost = 0;
}

Beverage.prototype.cost = function () {
	return this._cost;
}

var DecorativeBeverage = function (beverage) {
	Beverage.call (this);
	this.beverage = beverage;
}

DecorativeBeverage.prototype = Object.create (Beverage.prototype);
DecorativeBeverage.prototype.cost = function () {
	return this._cost + this.beverage.cost ();
}

var Coffee = function () {
	Beverage.call (this);	//Calling super constructor.
}

Coffee.prototype = Object.create (Beverage.prototype); //Assigning all the super class prototype methods.
Coffee.prototype.setCost = function (newCost) {
	this._cost = newCost;
}

var Sugar = function (beverage) {
	DecorativeBeverage.call (this, beverage);
	this._cost = 0.15;
}

Sugar.prototype = Object.create (DecorativeBeverage.prototype);

var coffee = new Coffee();
coffee.setCost (5);
console.log (coffee.cost ());
coffee = new Sugar (coffee);
console.log (coffee.cost ());