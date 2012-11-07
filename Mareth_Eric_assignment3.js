// Eric Mareth
// SDI1211
// Project 3
// Story with flowchart construction

// Global Variables
var currentTime = 43;
var droid;
var listIndex;
var oil;

var geT = {

	minutes : function(){					// *While Loop, *Method Function,
		while (currentTime < 49){ 			// *Argument Number, *Return Number
			currentTime++;
			var newTime = currentTime;
			return newTime
		};
	},

	timeStamp : function(){					
		console.log("\"Attention spaceport travelers: The time is now 19:" + geT.minutes() + ".\"");
	},
	
	name : function(number){				// *Method: Accessor
		var droid = shipList.stats[number].droid;
		return droid
	},
	
	cargo : function(number2){
		var list = shipList.stats[number2].cargo;
		return list
	}
};

var speak = {
	needOil	:"\"My rust levels are high, I am going to need oil soon.\"",
	noOil	:"\"I got my 30,000 mile checkup last week, so my rust levels are low.\"",
	topic1	:"\"I am hauling" + geT.cargo(1) + ".\" said " + geT.name(1) + ".",
	topic2	:"\"All we have is " + geT.cargo(0) + ".\" said " + geT.name(0) + ".",
};


geT.timeStamp();

console.log(geT.name(0) + " meets up with " + geT.name(1) +" in a remote spaceport.");
console.log(geT.name(1) + " says " + speak.needOil + ".");
console.log(geT.name(0) + " says " + speak.noOil + ".");

geT.timeStamp();

console.log(speak.topic1);
console.log(speak.topic2);

geT.timeStamp();
geT.timeStamp();
geT.timeStamp();