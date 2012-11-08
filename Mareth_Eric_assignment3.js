// Eric Mareth
// SDI1211
// Project 3
// Story with flowchart construction


var impact = 16,
	cargo	= [" weapons", " ammunition", " food", " clothes", " tools"],
	safe	= true
	
	state	= {
		minutes : function(newTime){				// Number function
			while (impact > 0){ 		
				impact--;
				var newTime = impact;
				return newTime
			}
		},
		timeStamp : function(){						// 
			if (state.minutes() > 10){
				console.log("\"T-minus " + state.minutes() + " minutes until impact.\"");
			}
			else{
				console.log("\"Warning! It is now " + state.minutes() + " minutes until impact!\"")
			};
		},
		
		safe :	function(safety){
			if (safety === true){
				console.log("\"I see only one option, Captain " +ship.captain+ ".\"")
			}
			else{
				console.log("\"We are coming too close, Captain " +ship.captain+ ".\"")
			};
		},
		
		
	};
	
state.timeStamp();

console.log("The Star Ship " + ship.name + " found itself hurling toward the planet " + ship.planet + ".")
console.log("Captain " + ship.captain + " and the ship's droid " + ship.droid + " thought quickly about what to do.")

state.timeStamp();

console.log("\"" +ship.droid+ ", what are our options?\"");
state.safe(true);

state.timeStamp();


state.timeStamp();
state.timeStamp();
state.timeStamp();
state.timeStamp();
	