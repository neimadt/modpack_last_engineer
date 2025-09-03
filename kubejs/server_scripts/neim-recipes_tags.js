ServerEvents.tags('item', (event) => {
  if (Platform.isLoaded('resource_ghouls')) {
    event.add('forge:armor', 'resource_ghouls:broken_miners_helmet_helmet');
  }
  if (Platform.isLoaded('forbidden_arcanus')) {
    event.add('forge:planks', 'forbidden_arcanus:aurum_planks');
  }

  const swordsList = [
    'kubejs:iron_staff',
    'kubejs:golden_staff',
    'kubejs:diamond_staff',
    'kubejs:osmium_staff',
    'kubejs:netherite_staff',
  ];

  if (Platform.isLoaded('ef_weapon_extended')) {
    swordsList.push('ef_weapon_extended:iron_knuckles');
    swordsList.push('ef_weapon_extended:golden_knuckles');
    swordsList.push('ef_weapon_extended:diamond_knuckles');
    swordsList.push('ef_weapon_extended:netherite_knuckles');
  }

  if (Platform.isLoaded('thalassophobia')) {
    swordsList.push('thalassophobia:alpha_fang');
  }

  for (const element of swordsList) {
    event.add('minecraft:swords', element);
  }

  if (Platform.isLoaded('mekanismtools')) {
    const paxelsList = [
      'wood',
      'stone',
      'osmium',
      'bronze',
      'iron',
      'gold',
      'diamond',
      'netherite',
      'lapis_lazuli',
      'refined_glowstone',
      'refined_obsidian',
      'steel',
    ];

    for (const element of paxelsList) {
      event.add('minecraft:pickaxes', `mekanismtools:${element}_paxel`);
      event.add('minecraft:shovels', `mekanismtools:${element}_paxel`);
      event.add('minecraft:axes', `mekanismtools:${element}_paxel`);
    }
  }
});
