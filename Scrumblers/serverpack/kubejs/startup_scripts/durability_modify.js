ItemEvents.modification(event => {
	function maxDura(x, q) {
		event.modify(x, item => {item.maxDamage = q})
	}
	
	// Tools
	maxDura('minecraft:wooden_pickaxe', 128)
	maxDura('minecraft:wooden_axe', 128)
	maxDura('minecraft:wooden_shovel', 128)
	maxDura('minecraft:wooden_hoe', 128)
	maxDura('minecraft:wooden_sword', 128)
	maxDura('farmersdelight:flint_knife', 128)
	
	maxDura('minecraft:stone_pickaxe', 256)
	maxDura('minecraft:stone_axe', 256)
	maxDura('minecraft:stone_shovel', 256)
	maxDura('minecraft:stone_hoe', 256)
	maxDura('minecraft:stone_sword', 256)
	
	maxDura('minecraft:golden_pickaxe', 64)
	maxDura('minecraft:golden_axe', 64)
	maxDura('minecraft:golden_shovel', 64)
	maxDura('minecraft:golden_hoe', 64)
	maxDura('minecraft:golden_sword', 64)
	maxDura('farmersdelight:golden_knife', 64)
	
	maxDura('caverns_and_chasms:silver_pickaxe', 320)
	maxDura('caverns_and_chasms:silver_axe', 320)
	maxDura('caverns_and_chasms:silver_shovel', 320)
	maxDura('caverns_and_chasms:silver_hoe', 320)
	maxDura('caverns_and_chasms:silver_sword', 320)
	
	maxDura('minecraft:iron_pickaxe', 512)
	maxDura('minecraft:iron_axe', 512)
	maxDura('minecraft:iron_shovel', 512)
	maxDura('minecraft:iron_hoe', 512)
	maxDura('minecraft:iron_sword', 512)
	maxDura('farmersdelight:iron_knife', 512)
	
	maxDura('minecraft:diamond_pickaxe', 1820)
	maxDura('minecraft:diamond_axe', 1820)
	maxDura('minecraft:diamond_shovel', 1820)
	maxDura('minecraft:diamond_hoe', 1820)
	maxDura('minecraft:diamond_sword', 1820)
	maxDura('farmersdelight:diamond_knife', 1820)
	
	maxDura('minecraft:netherite_pickaxe', 2560)
	maxDura('minecraft:netherite_axe', 2560)
	maxDura('minecraft:netherite_shovel', 2560)
	maxDura('minecraft:netherite_hoe', 2560)
	maxDura('minecraft:netherite_sword', 2560)
	maxDura('farmersdelight:netherite_knife', 2560)
	
	maxDura('caverns_and_chasms:necromium_pickaxe', 2560)
	maxDura('caverns_and_chasms:necromium_axe', 2560)
	maxDura('caverns_and_chasms:necromium_shovel', 2560)
	maxDura('caverns_and_chasms:necromium_hoe', 2560)
	maxDura('caverns_and_chasms:necromium_sword', 2560)
	
	// Armors
	
	maxDura('minecraft:leather_helmet', 80)
	maxDura('minecraft:leather_chestplate', 80)
	maxDura('minecraft:leather_leggings', 80)
	maxDura('minecraft:leather_boots', 80)
	
	maxDura('minecraft:chainmail_helmet', 160)
	maxDura('minecraft:chainmail_chestplate', 160)
	maxDura('minecraft:chainmail_leggings', 160)
	maxDura('minecraft:chainmail_boots', 160)
	
	maxDura('minecraft:golden_helmet', 120)
	maxDura('minecraft:golden_chestplate', 120)
	maxDura('minecraft:golden_leggings', 120)
	maxDura('minecraft:golden_boots', 120)
	
	maxDura('caverns_and_chasms:silver_helmet', 240)
	maxDura('caverns_and_chasms:silver_chestplate', 240)
	maxDura('caverns_and_chasms:silver_leggings', 240)
	maxDura('caverns_and_chasms:silver_boots', 240)
	
	maxDura('minecraft:iron_helmet', 320)
	maxDura('minecraft:iron_chestplate', 320)
	maxDura('minecraft:iron_leggings', 320)
	maxDura('minecraft:iron_boots', 320)
	
	maxDura('caverns_and_chasms:sanguine_helmet', 350)
	maxDura('caverns_and_chasms:sanguine_chestplate', 350)
	maxDura('caverns_and_chasms:sanguine_leggings', 350)
	maxDura('caverns_and_chasms:sanguine_boots', 350)
	
	maxDura('minecraft:diamond_helmet', 600)
	maxDura('minecraft:diamond_chestplate', 600)
	maxDura('minecraft:diamond_leggings', 600)
	maxDura('minecraft:diamond_boots', 600)
	
	maxDura('minecraft:netherite_helmet', 800)
	maxDura('minecraft:netherite_chestplate', 800)
	maxDura('minecraft:netherite_leggings', 800)
	maxDura('minecraft:netherite_boots', 800)
	
	maxDura('caverns_and_chasms:necromium_helmet', 800)
	maxDura('caverns_and_chasms:necromium_chestplate', 800)
	maxDura('caverns_and_chasms:necromium_leggings', 800)
	maxDura('caverns_and_chasms:necromium_boots', 800)
	
	// Misc Armors
	maxDura('savage_and_ravage:griefer_helmet', 400)
	maxDura('savage_and_ravage:griefer_chestplate', 400)
	maxDura('savage_and_ravage:griefer_leggings', 400)
	maxDura('savage_and_ravage:griefer_boots', 400)

	maxDura('alexscaves:diving_helmet', 450)
	maxDura('alexscaves:diving_chestplate', 450)
	maxDura('alexscaves:diving_leggings', 450)
	maxDura('alexscaves:diving_boots', 450)
	
	maxDura('alexscaves:primordial_helmet', 450)
	maxDura('alexscaves:primordial_tunic', 450)
	maxDura('alexscaves:primordial_pants', 450)
	
	maxDura('alexscaves:hood_of_darkness', 450)
	maxDura('alexscaves:cloak_of_darkness', 450)
	
	maxDura('create:copper_diving_helmet', 325)
	maxDura('create:copper_diving_boots', 325)
	maxDura('create:netherite_diving_helmet', 675)
	maxDura('create:netherite_diving_boots', 675)
	
	maxDura('malum:soul_stained_steel_helmet', 400)
	maxDura('malum:soul_stained_steel_chestplate', 400)
	maxDura('malum:soul_stained_steel_leggings', 400)
	maxDura('malum:soul_stained_steel_boots', 400)
	
	maxDura('malum:malignant_stronghold_helmet', 600)
	maxDura('malum:malignant_stronghold_chestplate', 600)
	maxDura('malum:malignant_stronghold_leggings', 600)
	maxDura('malum:malignant_stronghold_boots', 600)
	
	// Misc Tools
	maxDura('alexscaves:desolate_dagger', 500)
	maxDura('alexscaves:dreadbow', 750)
	maxDura('alexscaves:galena_gauntlet', 500)
	maxDura('alexscaves:resistor_shield', 1250)
	maxDura('alexscaves:extinction_spear', 1750)
	maxDura('supplementaries:flute', 128)
	maxDura('farmersdelight:skillet', 640)
	maxDura('minecraft:flint_and_steel', 64)
	maxDura('minecraft:shears', 384)
	maxDura('minecraft:brush', 128)
	maxDura('minecraft:fishing_rod', 128)
	maxDura('minecraft:carrot_on_a_stick', 128)
	maxDura('minecraft:warped_fungus_on_a_stick', 128)
	maxDura('create:sand_paper', 64)
	maxDura('create:red_sand_paper', 64)
	maxDura('supplementaries:wrench', 384)
	maxDura('minecraft:turtle_helmet', 320)
	maxDura('autumnity:snail_shell_chestplate', 320)
	maxDura('savage_and_ravage:mask_of_dishonesty', 300)
	maxDura('savage_and_ravage:conch_of_conjuring', 750)
	maxDura('savage_and_ravage:cleaver_of_beheading', 750)
	maxDura('savage_and_ravage:wand_of_freezing', 750)
	maxDura('minecraft:trident', 375)
	maxDura('create:super_glue', 128)
	maxDura('farmersdelight:skillet', 640)
	maxDura('minecraft:shield', 375)
})