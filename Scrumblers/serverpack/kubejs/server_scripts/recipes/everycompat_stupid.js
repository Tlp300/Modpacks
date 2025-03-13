ServerEvents.recipes(event => {
  const ID_PREFIX = 'scrimmers:crafting/';
  
 // welcome to hell!
 
 // Environmental
   event.shaped('environmental:willow_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'environmental:willow_planks'
  }).id(`${ID_PREFIX}environmental_willow_chest`);
  
   event.shaped('environmental:pine_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'environmental:pine_planks'
  }).id(`${ID_PREFIX}environmental_pine_chest`);
  
   event.shaped('environmental:plum_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'environmental:plum_planks'
  }).id(`${ID_PREFIX}environmental_plum_chest`);
  
   event.shaped('environmental:wisteria_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'environmental:wisteria_planks'
  }).id(`${ID_PREFIX}environmental_wisteria_chest`);
  
  // Atmospheric
  
   event.shaped('atmospheric:rosewood_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:rosewood_planks'
  }).id(`${ID_PREFIX}atmospheric_rosewood_chest`);
  
   event.shaped('atmospheric:morado_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:morado_planks'
  }).id(`${ID_PREFIX}atmospheric_morado_chest`);
  
  event.shaped('atmospheric:yucca_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:yucca_planks'
  }).id(`${ID_PREFIX}atmospheric_yucca_chest`);
  
  event.shaped('atmospheric:aspen_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:aspen_planks'
  }).id(`${ID_PREFIX}atmospheric_aspen_chest`);
  
  event.shaped('atmospheric:laurel_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:laurel_planks'
  }).id(`${ID_PREFIX}atmospheric_laurel_chest`);
  
  event.shaped('atmospheric:kousa_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:kousa_planks'
  }).id(`${ID_PREFIX}atmospheric_kousa_chest`);
  
  event.shaped('atmospheric:grimwood_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'atmospheric:grimwood_planks'
  }).id(`${ID_PREFIX}atmospheric_grimwood_chest`);
  
  // Autumnity
  
  event.shaped('autumnity:maple_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'autumnity:maple_planks'
  }).id(`${ID_PREFIX}autumnity_maple_chest`);
  
  // Endergetic
  
  event.shaped('endergetic:poise_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'endergetic:poise_planks'
  }).id(`${ID_PREFIX}endergetic_poise_chest`);
  
  // Caverns & Chasms
  
  event.shaped('caverns_and_chasms:azalea_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'caverns_and_chasms:azalea_planks'
  }).id(`${ID_PREFIX}caverns_and_chasms_azalea_chest`);
  
  // Upgrade Aquatic
  
  event.shaped('upgrade_aquatic:driftwood_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'upgrade_aquatic:driftwood_planks'
  }).id(`${ID_PREFIX}upgrade_aquatic_driftwood_chest`);
  
  event.shaped('upgrade_aquatic:river_chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'upgrade_aquatic:river_planks'
  }).id(`${ID_PREFIX}upgrade_aquatic_river_chest`);
  
});