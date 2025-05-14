ServerEvents.recipes(event => {
  // Remove recipes by recipe ID.
  [


	// Random Stuff
	'incubation:fried_egg',
	'naturalist:cooked_egg',
	
	// Buzzier Bees
	'buzzier_bees:honey/honey_apple',
	
	// Create
	//'create:crafting/materials/copper_nugget',
	'create:compacting/chocolate',
	'create:mixing/chocolate_melting',
	
	// Savage & Ravage
	
	// Caverns & Chasms
	'caverns_and_chasms:copper_nugget',
	'caverns_and_chasms:copper_ingot_from_nuggets',

    // Farmer's Delight
    //'farmersdelight:cake_from_milk_bottle',

    // Minecraft
    'minecraft:cake', // Duplicate Recipe.
	
	// Malum
	'malum:copper_nugget_from_ingot',
	'malum:copper_ingot_from_nugget',
	'malum:copper_from_node_smelting',
	
	// Neapolitan
	//'neapolitan:milk/milk_bucket_from_bottles',
	//'neapolitan:milk/milk_bottles_from_bucket',
	'neapolitan:chocolate/chocolate_spider_eye',
	'neapolitan:cake',
	
	// Naturalist
	'naturalist:cooked_egg_from_smoking',
	'naturalist:cooked_egg_from_campfire_smoking',

    // Quark
    'quark:building/crafting/compressed/carrot_crate', // Replaced with Farmer's Delight version.
    'quark:building/crafting/compressed/potato_crate', // Replaced with Farmer's Delight version.
    'quark:building/crafting/compressed/beetroot_crate', // Replaced with Farmer's Delight version.
	
	// Backpacked
	'backpacked:backpack',
	
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // Note: Should generally use recipe IDs instead of input ingredient.

  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Note: Should generally use recipe IDs instead of output item.
	"minecraft:pumpkin_pie",
    
  ].forEach((itemID) => event.remove({output: itemID}));

});