// Eric Mareth
// SDI1211
// Project 3
// Story with flowchart construction


var impact = 16,
	cargo	= [" weapons", " ammunition", " food", " alcohol", " tools"],
	safe	= true
	question= '"What is it?"'
	answer	= '"We have to jettison two crates from the cargo hold."'
	state	= {
		minutes : function(newTime){				// minutes function
			while (impact > 0){ 		
				impact--;
				var newTime = impact;
				return newTime
			}
		},
		timeStamp : function(){						// timeStamp accessor
			if (state.minutes() > 10){
				console.log('"T-minus ' + state.minutes() + ' minutes until impact."');
				return;
			}
			else{
				console.log('"Warning! It is now ' + state.minutes() + ' minutes until impact!"')
			};
		},
		
		safety :	function(){						// safety procedure with nested conditional
			if (safe === true){
				if (state.minutes() > 10){
					console.log('"I see only one option, Captain ' +ship.captain+ '."')
				}
				else{
					console.log('"It IS our only chance to pull out of the planet gravity."')
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
	
state.timeStamp();

console.log("The Star Ship " + ship.name + " found itself hurling toward the planet " + ship.planet + ".")
console.log("Captain " + ship.captain + " and the ship's droid " + ship.droid + " thought quickly about what to do.")

state.timeStamp();

console.log('"' +ship.droid+ ', what are our options?"');
state.safety();

state.timeStamp();

console.log(question);
console.log(answer);

state.timeStamp();

state.safety();

state.timeStamp();

state.notSafe();
state.safety();

state.timeStamp();
state.timeStamp();
	