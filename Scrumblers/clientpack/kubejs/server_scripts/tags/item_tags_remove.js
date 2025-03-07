ServerEvents.tags('item', event => {

 // Copper Stuff
  event.remove('forge:nuggets/copper', [
    //'create:copper_nugget',
	'malum:copper_nugget',
	'caverns_and_chasms:copper_nugget',
  ]);
  
  event.remove('forge:nuggets', [
    //'create:copper_nugget',
	'malum:copper_nugget',
	'caverns_and_chasms:copper_nugget',
  ]);
  
  event.remove('forge:rope', [
	'quark:rope',
	'farmersdelight:rope',
  ]);
  
  // Food Stuff
  
    event.remove('forge:cooked_eggs', [
    'naturalist:cooked_egg',
	'incubation:fried_egg',
  ]);
  
});