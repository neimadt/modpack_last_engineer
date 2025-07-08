ServerEvents.recipes((event) => {
  event.smelting('minecraft:iron_nugget', 'minecraft:iron_bars');
  event.smelting('minecraft:iron_nugget', 'minecraft:chain');

  event.remove({ output: 'minecraft:furnace' });
  event.shaped(Item.of('minecraft:furnace', 1), ['ccc', 'cCc', 'ccc'], {
    c: 'minecraft:cobblestone',
    C: '#minecraft:coals',
  });

  event.shaped(
    Item.of('minecraft:enchanted_golden_apple', 1),
    ['GGG', 'GAG', 'GGG'],
    {
      G: 'minecraft:gold_block',
      L: 'minecraft:apple',
    }
  );

  event.shaped(
    Item.of('minecraft:enchanted_golden_apple', 1),
    ['GIG', 'GAG', 'GGG'],
    {
      I: 'minecraft:gold_ingot',
      G: 'minecraft:gold_block',
      L: 'minecraft:golden_apple',
    }
  );

  event.shaped(
    Item.of('minecraft:netherite_upgrade_smithing_template', 1),
    ['NIN', 'NDN', 'NAN'],
    {
      N: 'minecraft:netherrack',
      D: 'minecraft:diamond_block',
      I: 'minecraft:netherite_ingot',
      A: 'minecraft:ancient_debris',
    }
  );

  event.shapeless(Item.of('minecraft:prismarine_shard', 1), [
    'minecraft:prismarine_crystals',
    'minecraft:prismarine_crystals',
    'minecraft:prismarine_crystals',
    'minecraft:prismarine_crystals',
  ]);

  event.shapeless(Item.of('minecraft:paper', 2), [
    'minecraft:bamboo',
    'minecraft:bamboo',
    'minecraft:bamboo',
  ]);

  event.shaped(Item.of('minecraft:saddle', 1), [' L ', 'LIL', 'N N'], {
    L: 'minecraft:leather',
    I: 'minecraft:iron_ingot',
    N: 'minecraft:iron_nugget',
  });

  event.shaped(Item.of('minecraft:trident', 1), [' CC', ' PC', 'P  '], {
    C: 'minecraft:prismarine_crystals',
    P: 'minecraft:prismarine_shard',
  });

  event
    .shaped(Item.of('minecraft:ink_sac', 3), ['DDD', ' B ', ' S '], {
      D: '#forge:dyes/black',
      S: 'minecraft:slime_ball',
      B: 'minecraft:water_bucket',
    })
    .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('last_engineer:ink_sac');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['LLL', 'SGS', 'S S'],
      key: {
        L: {
          tag: 'minecraft:logs',
        },
        G: {
          item: 'minecraft:gold_block',
        },
        S: {
          item: 'minecraft:stone',
        },
      },
      result: {
        item: 'minecraft:bell',
      },
    })
    .id('last_engineer:bell');
});
