ServerEvents.recipes(event => {
  const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};

  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};

  const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
  const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};

  // ----- Fixes -----

  // ----- Compatibility -----

  // Ingot Compatibility

  // Plate Compatibility

  // Nugget Compatibility
  replaceInput('caverns_and_chasms:copper_nugget', 'create:copper_nugget');
  replaceOutput('caverns_and_chasms:copper_nugget', 'create:copper_nugget');
  replaceInput('malum:copper_nugget', 'create:copper_nugget');
  replaceOutput('malum:copper_nugget', 'create:copper_nugget');

  // Flour Compatibility
  replaceInput('create:wheat_flour', '#forge:flour/wheat');

  // Rose Quartz Compatibility
  replaceInput('biomesoplenty:rose_quartz_shard', '#scrimmers:rose_quartz');
  replaceInput('create:rose_quartz', '#scrimmers:rose_quartz');

  // Stick / Rod Compatibility
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden');
  
  // Other Compatibility
  replaceInput('neapolitan:milk_bottle', 'farmersdelight:milk_bottle');
  replaceOutput('neapolitan:milk_bottle', 'farmersdelight:milk_bottle');

  replaceInputID('minecraft:blast_furnace', 'minecraft:furnace', '#scrimmers:furnaces');

  // Misc
  replaceOutput('farmersdelight:rope', 'supplementaries:rope');
  replaceOutput('naturalist:cooked_egg', 'farmersdelight:fried_egg');
  replaceOutput('incubation:fried_egg', 'farmersdelight:fried_egg');
  replaceInput('farmersdelight:rope', 'supplementaries:rope');
  replaceInput('farmersdelight:tree_bark', '#immersive_weathering:bark');

  // ----- Gameplay Changes / Fixes -----
  
});