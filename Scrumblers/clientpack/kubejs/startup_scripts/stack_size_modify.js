ItemEvents.modification(event => {
	function stackTo16(x) {
		event.modify(x, item => {item.maxStackSize = 16})
	}
	function stackTo64(x) {
		event.modify(x, item => {item.maxStackSize = 64})
	}
	function stackTo4(x) {
		event.modify(x, item => {item.maxStackSize = 4})
	}
	function stackTo3(x) {
		event.modify(x, item => {item.maxStackSize = 3})
	}
	function stackTo1(x) {
		event.modify(x, item => {item.maxStackSize = 1})
	}
	stackTo3('minecraft:potion')
	
	stackTo4('create:blaze_cake')
	stackTo4('minecraft:cake')
	stackTo4('minecraft:pumpkin_pie')
	stackTo4('upgrade_aquatic:mulberry_pie')
	stackTo4('farmersdelight:apple_pie')
	stackTo4('farmersdelight:sweet_berry_cheesecake')
	stackTo4('farmersdelight:chocolate_pie')
	stackTo4('neapolitan:chocolate_cake')
	stackTo4('neapolitan:strawberry_cake')
	stackTo4('neapolitan:vanilla_cake')
	stackTo4('neapolitan:banana_cake')
	stackTo4('neapolitan:mint_cake')
	stackTo4('neapolitan:adzuki_cake')

	stackTo64('minecraft:snowball')
	stackTo64('minecraft:ender_pearl')
	stackTo64('minecraft:egg')
	stackTo64('environmental:duck_egg')
	stackTo64('autumnity:turkey_egg')
	stackTo64('quark:egg_parrot_red_blue')
	stackTo64('quark:egg_parrot_blue')
	stackTo64('quark:egg_parrot_green')
	stackTo64('quark:egg_parrot_yellow_blue')
	stackTo64('quark:egg_parrot_grey')
	stackTo64('farmersdelight:rotten_tomato')
})