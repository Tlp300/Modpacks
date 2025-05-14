ServerEvents.recipes(event => {
  const ID_PREFIX = 'scrimmers:create/';

	// Spouting
	// -- Foods
	event.recipes.create.filling('neapolitan:chocolate_strawberries', [Fluid.of('create:chocolate 250'), 'neapolitan:strawberries']).id(`${ID_PREFIX}spouting/chocolate_strawberries`);
	event.recipes.create.filling('neapolitan:chocolate_spider_eye', [Fluid.of('create:chocolate 250'), 'minecraft:spider_eye']).id(`${ID_PREFIX}spouting/chocolate_spider_eye`);
	event.recipes.create.filling('neapolitan:vanilla_chocolate_fingers', [Fluid.of('create:chocolate 250'), 'neapolitan:dried_vanilla_pods']).id(`${ID_PREFIX}spouting/vanilla_chocolate_fingers`);
	event.recipes.create.filling('neapolitan:mint_chocolate', [Fluid.of('create:chocolate 250'), 'neapolitan:mint_leaves']).id(`${ID_PREFIX}spouting/mint_chocolate`);
	event.recipes.create.filling('buzzier_bees:honey_bread', [Fluid.of('create:honey 250'), 'minecraft:bread']).id(`${ID_PREFIX}spouting/honey_bread`);
	event.recipes.create.filling('buzzier_bees:glazed_porkchop', [Fluid.of('create:honey 250'), 'minecraft:cooked_porkchop']).id(`${ID_PREFIX}spouting/glazed_porkchop`);
	
	// Mixing
	event.recipes.create.mixing(Fluid.of('create:chocolate 250'), 'neapolitan:chocolate_bar').heated().id(`${ID_PREFIX}mixing/chocolate`);
	event.recipes.create.mixing('neapolitan:chocolate_bar', [Fluid.of('create:chocolate 250')]).id(`${ID_PREFIX}mixing/chocolate_bar`);
	
});