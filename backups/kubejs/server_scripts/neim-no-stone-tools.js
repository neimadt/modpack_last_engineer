const toRemove = [
  // Remove stone tool recipes
  'minecraft:stone_pickaxe',
  'minecraft:stone_axe',
  'minecraft:stone_shovel',
  'minecraft:stone_hoe',
  'minecraft:stone_sword',
];

if (Platform.isLoaded('betterbeginnings')) {
  toRemove.push('betterbeginnings:copper_pickaxe');
  toRemove.push('betterbeginnings:copper_axe');
  toRemove.push('betterbeginnings:copper_shovel');
  toRemove.push('betterbeginnings:copper_hoe');
  toRemove.push('betterbeginnings:copper_sword');
}

if (Platform.isLoaded('iceandfire')) {
  toRemove.push('iceandfire:copper_pickaxe');
  toRemove.push('iceandfire:copper_axe');
  toRemove.push('iceandfire:copper_shovel');
  toRemove.push('iceandfire:copper_hoe');
  toRemove.push('iceandfire:copper_sword');

  toRemove.push('iceandfire:armor_copper_metal_helmet');
  toRemove.push('iceandfire:armor_copper_metal_chestplate');
  toRemove.push('iceandfire:armor_copper_metal_leggings');
  toRemove.push('iceandfire:armor_copper_metal_boots');
}

if (Platform.isLoaded('create_sa')) {
  toRemove.push('create_sa:copper_pickaxe');
  toRemove.push('create_sa:copper_axe');
  toRemove.push('create_sa:copper_shovel');
  toRemove.push('create_sa:copper_hoe');
  toRemove.push('create_sa:copper_sword');

  toRemove.push('create_sa:copper_helmet');
  toRemove.push('create_sa:copper_chestplate');
  toRemove.push('create_sa:copper_leggings');
  toRemove.push('create_sa:copper_boots');
}

ServerEvents.tags('block', (event) => {
  event.remove('minecraft:needs_stone_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
  ]);

  event.add('minecraft:needs_wooden_tool', [
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
  ]);
});

ServerEvents.tags('item', (event) => {
  for (const item of toRemove) {
    event.add('c:hidden_from_recipe_viewers', item);
  }
});

ServerEvents.recipes((event) => {
  for (const item of toRemove) {
    event.remove({ output: item });
  }
});

LootJS.modifiers((event) => {
  event
    .addLootTableModifier('minecraft:chests/village_toolsmith')
    .addLoot('minecraft:stone_pickaxe');

  event
    .addLootTableModifier('minecraft:chests/village_toolsmith')
    .addLoot('minecraft:stone_axe');
});

ItemEvents.rightClicked((event) => {
  const item = event.item.id;
  if (item.startsWith('minecraft:stone_')) {
    event.cancel();
    event.player.tell('Stone tools are disabled.');
  }
});
