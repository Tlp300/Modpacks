ServerEvents.recipes(event => {
  const ID_PREFIX = 'scrimmers:crafting/';
  
  // Alex's Caves

  // Minecraft

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  }).id(`${ID_PREFIX}dispenser_with_crossbow`);

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_helmet`);

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_chestplate`);

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_leggings`);

  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_boots`);

  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  }).id(`${ID_PREFIX}bundle`);
  
  // Backpacked
    event.shaped('backpacked:backpack', [
    'LLL',
    'SIS',
    'LLL'
  ], {
    L: 'minecraft:leather',
    S: 'minecraft:string',
	I: 'minecraft:iron_ingot'
  }).id(`${ID_PREFIX}backpack`);

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  }).id(`${ID_PREFIX}quiver`);
  
  // Pie Flavour
    event.shaped('minecraft:pumpkin_pie',['PPP','PPP','SCS'],{P: 'farmersdelight:pumpkin_slice', S:'minecraft:sugar', C:'farmersdelight:pie_crust'}).id(`${ID_PREFIX}pumpkin_pie`);

});
