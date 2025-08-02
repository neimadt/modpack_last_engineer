ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('apotheosis')) return;

  if (Platform.isLoaded('create') && Platform.isLoaded('createmetallurgy')) {
    // event.remove({ id: 'apotheosis:scrap_tome' });
    event
      .custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
          { item: 'minecraft:book' },
          { item: 'minecraft:book' },
          { item: 'minecraft:book' },
          { item: 'minecraft:book' },
          { item: 'createmetallurgy:iron_dust' },
          {
            amount: 4000,
            fluid: 'create_enchantment_industry:experience',
            nbt: {},
          },
        ],
        results: [
          {
            item: 'apotheosis:scrap_tome',
            count: 4,
          },
        ],
      })
      .id('last_engineer:apotheosis/mixing/scrap_tome');
    // .id('apotheosis:scrap_tome'); THAT LINE WAS CAUSING ISSUES !!!!

    event
      .custom({
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
          { item: 'apotheosis:scrap_tome' },
          { item: 'apotheosis:scrap_tome' },
          { item: 'bloodmagic:reagentgrowth' },
          {
            amount: 5000,
            fluid: 'create_enchantment_industry:experience',
            nbt: {},
          },
        ],
        results: [
          {
            item: 'apotheosis:improved_scrap_tome',
            count: 2,
          },
        ],
      })
      .id('last_engineer:apotheosis/mixing/improved_scrap_tome');

    event.remove({ output: 'minecraft:enchanted_golden_apple' });

    // event.replaceInput(
    //   { id: 'apotheosis:enchanted_golden_apple' },
    //   {
    //     item: 'minecraft:potion',
    //     nbt: '{Potion:"minecraft:strong_regeneration"}',
    //   },
    //   'minecraft:gold_block'
    // );

    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          F: {
            type: 'forge:partial_nbt',
            item: 'minecraft:potion',
            nbt: '{Potion:"minecraft:fire_resistance"}',
          },
          G: {
            item: 'minecraft:gold_block',
          },
          a: {
            item: 'minecraft:golden_apple',
          },
          A: {
            type: 'forge:partial_nbt',
            item: 'minecraft:potion',
            nbt: '{Potion:"apotheosis:strong_absorption"}',
          },
          S: {
            type: 'forge:partial_nbt',
            item: 'minecraft:potion',
            nbt: '{Potion:"minecraft:long_strength"}',
          },
        },
        pattern: ['FGF', 'SaS', 'ASA'],
        result: {
          item: 'minecraft:enchanted_golden_apple',
        },
        show_notification: true,
      })
      .id('apotheosis:enchanted_golden_apple');
  }
});
