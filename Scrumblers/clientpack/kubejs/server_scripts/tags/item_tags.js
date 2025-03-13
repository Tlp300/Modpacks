ServerEvents.tags('item', event => {

  event.add('scrimmers:ropes', [
    'farmersdelight:rope',
    'supplementaries:rope',
  ]);

  event.add('scrimmers:bowls', [
    'minecraft:bowl',
  ]);
  
  event.add('scrimmers:living_flesh', [
    'caverns_and_chasms:living_flesh',
	'malum:living_flesh',
  ]);
  
  event.add('scrimmers:furnaces', [
    'minecraft:furnace',
    'mynethersdelight:blackstone_furnace',
    'quark:deepslate_furnace',
    'quark:blackstone_furnace',
  ]);

  event.add('scrimmers:rose_quartz', [
    'biomesoplenty:rose_quartz_chunk',
    'create:rose_quartz',
  ]);
  
  event.add('forge:ingots/silver', [
    'caverns_and_chasms:silver_ingot',
  ]);
  
  event.add('forge:nuggets/silver', [
    'caverns_and_chasms:silver_nugget',
  ]);
});