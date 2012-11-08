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
				console.log('"Warning! It is now ' + timeChange + ' seconds until impact!"');
			};
		},
		
		safety :	function(dangerous){						// safety procedure with nested conditional
			if (safe === true){
				if (dangerous === false){
					console.log('"I see only one option, Captain ' +ship.captain+ '."');
				}
				else{
					console.log('"It IS our only chance to pull out of the planet\'s gravity."');
				};
			}
			else{
				console.log('"We are coming too close, Captain ' +ship.captain+ '."');
			};
		},
		
		notSafe :	function(){						// notSafe mutator
			safe = false;
			return safe;
		},
		
		dropCargo : function(){
			for (i = cargo.length + 1; i > 3; i--);
			console.log('"I have jettisoned the' + cargo[cargo.length-1] + ' crate."');
			cargo.pop();
		}
		
	};
	
console.log("The ship's computer chirped a warning");
state.timeStamp(state.seconds()); 

console.log("The Star Ship " + ship.name + " found itself hurling toward the planet " + ship.planet + ".");
console.log("Captain " + ship.captain + " and the ship's droid " + ship.droid + " thought quickly about what to do.");

state.timeStamp(state.seconds());

console.log('"' +ship.droid+ ', what are our options?"');
state.safety(false);

state.timeStamp(state.seconds());

console.log(question);
console.log(answer);
console.log('"What are we carrying?"');
console.log('"We have' + cargo + '."');

state.timeStamp(state.seconds());

console.log('"No, we can\'t! What else can we do?"');
state.safety(true);

state.timeStamp(state.seconds());

state.notSafe();
state.safety(true);
console.log('"Do it."');

state.timeStamp(state.seconds());

state.dropCargo();
state.dropCargo();
console.log('"We are now light enough to break the planet\'s Gravity."');

state.timeStamp(state.seconds());
console.log('Captain ' + ship.captain + ' shouted "GO!"');
console.log('And that is how the Star Ship ' + ship.name + ' broke free from the grips of planet ' + ship.planet + ', and journeyed on to other adventures.');