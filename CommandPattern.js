var calc = function () {
	this._currentValue = 0;
	this.actions = [];
}

//Since, add and subtract are taking 1 param, we will define command to use this functions which will be outside prototype.
calc.prototype = {
	add : function (num) {
		this.actions.push (this._currentValue);
		this._currentValue += num;		
	},
	sub : function (num) {
		this.actions.push (this._currentValue);
		this._currentValue -= num;
	},
	undo : function () {
		this._currentValue = this.actions.pop ();
	},
	result : function () {
		return this._currentValue;
	}
};

var newCalc = new calc();
newCalc.add (5);
newCalc.sub (4);
console.log (newCalc.result ());
newCalc.undo ();
console.log (newCalc.result ());

var CMDCalc = function () {
	this._currentValue = 0;
	this.actions = [];
}

CMDCalc.prototype = {
	execute : function (command) {
		this.actions.push (this._currentValue);
		this._currentValue = command.execute (this._currentValue);		
	},
	undo : function () {
		this._currentValue = this.actions.length ? this.actions.pop () : this._currentValue;
	},
	result : function () {
		return this._currentValue;
	}
}

var Command = function (fn, num) {
	this.execute = fn;
	this.valueee = num;
}

var addCommand = function (value) {
	Command.call (this, function (valuee) {
		return valuee + this.valueee;
	}, value); 
}

var subCommand = function (value) {
	Command.call (this, function (value) {
		return value - this.valueee;
	}, value);
}
 
var newCalc2 = new CMDCalc();
newCalc2.execute (new addCommand (19));
newCalc2.execute (new addCommand (4));
console.log (newCalc2.result());
newCalc2.execute (new subCommand (5));
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.execute (new subCommand (5));
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.undo ();
console.log (newCalc2.result ());
newCalc2.execute (new addCommand (4));
console.log (newCalc2.result());