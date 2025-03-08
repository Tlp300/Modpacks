ServerEvents.recipes(event => {
  const ID_PREFIX = 'scrimmers:crafting/';

  // Minecraft

  // Create

  // Farmer's Delight
  event.shapeless('supplementaries:rope', 'farmersdelight:rope').id(`${ID_PREFIX}fd_rope_to_sp_rope`);
  
  // Azalea Conversion
  event.shapeless('2x caverns_and_chasms:azalea_log', '2x quark:azalea_log').id(`${ID_PREFIX}quark_azalea_to_cave_azalea`);
  event.shapeless('2x quark:azalea_log', '2x caverns_and_chasms:azalea_log').id(`${ID_PREFIX}cave_azalea_to_quark_azalea`);
  // event.woodcutting('caverns_and_chasms:azalea_log', 'quark:azalea_log').id(`${ID_PREFIX}quark_azalea_to_cave_azalea`); mehvahd please document your fucking kubejs implementatioooonssss

});