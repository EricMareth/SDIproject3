// Eric Mareth
// SDI1211
// Project 3
// Story with flowchart construction


var impact = 480,
	cargo	= [" weapons", " ammunition", " food", " alcohol", " tools"],
	safe	= true,
	question= '"What is it?"',
	answer	= '"We have to jettison two crates from the cargo hold."',
	newTime,
	state	= {
		seconds : function(){				// minutes function
			while (impact > 0){ 		
				impact -= 60;
				var newTime = impact;
				return newTime;
			}
		},
		timeStamp : function(timeChange){						// timeStamp accessor
			if (timeChange > 300){
				console.log('"T-minus ' + timeChange + ' seconds until impact."');
			}
			else{
				console.log('"Warning! It is now ' + timeChange + ' seconds until impact!"')
			};
		},
		
		safety :	function(){						// safety procedure with nested conditional
			if (safe === true){
				if (newTime > 300){
					console.log('"I see only one option, Captain ' +ship.captain+ '."')
				}
				else{
					console.log('"It IS our only chance to pull out of the planet\'s gravity."')
				};
			}
			else{
				console.log('"We are coming too close, Captain ' +ship.captain+ '."')
			};
		},
		notSafe :	function(){						// notSafe mutator
			safe = false;
			return safe;
		}
		
	};
	
state.timeStamp(state.seconds());

console.log("The Star Ship " + ship.name + " found itself hurling toward the planet " + ship.planet + ".")
console.log("Captain " + ship.captain + " and the ship's droid " + ship.droid + " thought quickly about what to do.")

state.timeStamp(state.seconds());

console.log('"' +ship.droid+ ', what are our options?"');
state.safety();

state.timeStamp(state.seconds());

console.log(question);
console.log(answer);

state.timeStamp(state.seconds());

console.log('"No, we can\'t! What else can we do?"')
state.safety();

state.timeStamp(state.seconds());

state.notSafe();
state.safety();

state.timeStamp(state.seconds());
state.timeStamp(state.seconds());
	