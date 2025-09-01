ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['  S', ' B ', 'S  '],
      key: {
        B: { item: 'minecraft:stick' },
        S: { item: 'minecraft:diamond' },
      },
      result: { item: 'kubejs:diamond_staff', count: 1 },
    })
    .id('last_engineer:battle_staves/shaped/diamond_staff');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['  S', ' B ', 'S  '],
      key: {
        B: { item: 'minecraft:stick' },
        S: { item: 'mekanism:ingot_osmium' },
      },
      result: { item: 'kubejs:osmium_staff', count: 1 },
    })
    .id('last_engineer:battle_staves/shaped/osmium_staff');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['  S', ' B ', 'S  '],
      key: {
        B: { item: 'minecraft:stick' },
        S: { item: 'minecraft:gold_ingot' },
      },
      result: { item: 'kubejs:golden_staff', count: 1 },
    })
    .id('last_engineer:battle_staves/shaped/golden_staff');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['  S', ' B ', 'S  '],
      key: {
        B: { item: 'minecraft:stick' },
        S: { item: 'minecraft:iron_ingot' },
      },
      result: { item: 'kubejs:iron_staff', count: 1 },
    })
    .id('last_engineer:battle_staves/shaped/iron_staff');

  event
    .custom({
      type: 'minecraft:smithing_transform',
      base: {
        item: 'kubejs:diamond_staff',
      },
      addition: {
        item: 'minecraft:netherite_ingot',
      },
      result: {
        item: 'kubejs:netherite_staff',
      },
      template: {
        item: 'minecraft:netherite_upgrade_smithing_template',
      },
    })
    .id('last_engineer:battle_staves/smithing_transform/netherite_staff');
});
