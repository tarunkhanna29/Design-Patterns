//Javascript having singleton means our application is tightly coupled and we should be double sure if we want to use it.
//Testing Singleton patterns in javascript is also difficult.
var obj = (function () {
	var _count = 0;
	var _instance;
	var generateId = function () {
		return _count++;
	};
	var generateVal = function () {
		return "Val is " + generateId();
	};
	var createInstance = function () {
		return {
			generateId : generateId,
			generateVal : generateVal,
		};
	};
	return {
		getInstance : function () {
			return _instance || (_instance = createInstance());
		}
	};
}());

console.log (obj.getInstance().generateVal());
console.log (obj.getInstance().generateVal());
var myInstance = new obj.getInstance();
console.log (myInstance.generateVal());

var instance1 = new obj.getInstance();
var instance2 = new obj.getInstance();
console.log ("instance1 == instance2 " + (instance1 == instance2));