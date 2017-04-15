var myFunc = (function (val) {
	console.log ("Start");
	try {
		var x = val*2/3;
		console.log ("X : " + x);
		var y = val/0;
		console.log ("Y : " + y);
		if (y >= Infinity) throw "Y is Infinity"; 
		console.logg ("Wrong function");
	} catch (ex) {	//Cannot have multiple catches in Javascript or ECMAScript
		if (!ex.name) {
			console.log ("Exception : " + ex);
		} else {
			console.log ("Exception : Name " + ex.name + " Message " + ex.message);
		}
	} finally {
		console.log ("I am Finnaly");
	}
	console.log ("End");
}(5));