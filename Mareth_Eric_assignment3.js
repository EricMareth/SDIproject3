// Eric Mareth
// SDI1211
// Project 3
// Story with flowchart construction


var property = {
		impact	: 480,
		cargo	: [" weapons", " ammunition", " food", " alcohol", " tools"],
		safe	: true,
		question: '"What is it?"',
		answer	: '"We have to jettison two crates from the cargo hold."',
		state	: {
			seconds : function(){				// seconds function
				while (property.impact > 0){ 		
					property.impact -= 60;
					var newTime = property.impact;
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
				if (property.safe === true){
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
				property.safe = false;
				return property.safe;
			},
			
			dropCargo : function(){
				for (i = property.cargo.length + 1; i > 3; i--);
				console.log('"I have jettisoned the' + property.cargo[property.cargo.length-1] + ' crate."');
				property.cargo.pop();
			}
			
		}
};
	
console.log("The ship's computer chirped a warning");
property.state.timeStamp(property.state.seconds()); 

console.log("The Star Ship " + ship.name + " found itself hurling toward the planet " + ship.planet + ".");
console.log("Captain " + ship.captain + " and the ship's droid " + ship.droid + " thought quickly about what to do.");

property.state.timeStamp(property.state.seconds());

console.log('"' +ship.droid+ ', what are our options?"');
property.state.safety(false);

property.state.timeStamp(property.state.seconds());

console.log(property.question);
console.log(property.answer);
console.log('"What are we carrying?"');
console.log('"We have' + property.cargo + '."');

property.state.timeStamp(property.state.seconds());

console.log('"No, we can\'t! What else can we do?"');
property.state.safety(true);

property.state.timeStamp(property.state.seconds());

property.state.notSafe();
property.state.safety(true);
console.log('"Do it."');

property.state.timeStamp(property.state.seconds());

property.state.dropCargo();
property.state.dropCargo();
console.log('"We are now light enough to break the planet\'s Gravity."');

property.state.timeStamp(property.state.seconds());
console.log('Captain ' + ship.captain + ' shouted "GO!"');
console.log('And that is how the Star Ship ' + ship.name + ' broke free from the grips of planet ' + ship.planet + ', and journeyed on to other adventures.');