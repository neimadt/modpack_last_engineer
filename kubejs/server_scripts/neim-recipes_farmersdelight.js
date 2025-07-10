ServerEvents.recipes((event) => {
  if (Platform.isLoaded('farmersdelight')) {
    event
      .shapeless(Item.of('minecraft:slime_ball', 1), [
        'farmersdelight:wheat_dough',
        'minecraft:lime_dye',
      ])
      .id(
        'last_engineer:farmersdelight/slime_ball_from_wheat_dough_and_lime_dye'
      );

    event
      .custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'minecraft:nether_wart_block' }],
        tool: {
          type: 'farmersdelight:tool_action',
          action: 'pickaxe_dig',
        },
        result: [
          {
            count: 6,
            item: 'minecraft:nether_wart',
          },
        ],
      })
      .id(
        'last_engineer:farmersdeligh/cutting/nether_wart_from_nether_wart_block'
      );

    event
      .custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'minecraft:scaffolding' }],
        tool: {
          type: 'farmersdelight:tool_action',
          action: 'axe_dig',
        },
        result: [
          {
            count: 4,
            item: 'minecraft:bamboo',
          },
        ],
      })
      .id('last_engineer:farmersdelight/cutting/bamboo_from_scaffolding');

    event
      .custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'minecraft:dripstone_block' }],
        tool: {
          type: 'farmersdelight:tool_action',
          action: 'pickaxe_dig',
        },
        result: [
          {
            count: 3,
            item: 'minecraft:pointed_dripstone',
          },
        ],
      })
      .id(
        'last_engineer:farmersdelight/cutting/pointed_dripstone_from_dripstone_block'
      );

    event
      .custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'minecraft:blue_ice' }],
        tool: {
          type: 'farmersdelight:tool_action',
          action: 'pickaxe_dig',
        },
        result: [
          {
            count: 8,
            item: 'minecraft:packed_ice',
          },
        ],
      })
      .id('last_engineer:farmersdeligh/cutting/packed_ice_from_blue_ice');

    event
      .custom({
        type: 'farmersdelight:cutting',
        ingredients: [{ item: 'minecraft:packed_ice' }],
        tool: {
          type: 'farmersdelight:tool_action',
          action: 'pickaxe_dig',
        },
        result: [
          {
            count: 8,
            item: 'minecraft:ice',
          },
        ],
      })
      .id('last_engineer:farmersdeligh/cutting/ice_from_packed_ice');

    if (Platform.isLoaded('aquaculture')) {
      event
        .shapeless(Item.of('aquaculture:fish_fillet_raw', 1), [
          'farmersdelight:salmon_slice',
          '#forge:tools/knives',
        ])
        .id(
          'last_engineer:aquaculture/shapeless/fish_fillet_raw_from_salmon_slice'
        )
        .keepIngredient('#forge:tools/knives');

      event
        .shapeless(Item.of('aquaculture:fish_fillet_raw', 1), [
          'farmersdelight:cod_slice',
          '#forge:tools/knives',
        ])
        .id(
          'last_engineer:aquaculture/shapeless/fish_fillet_raw_from_cod_slice'
        )
        .keepIngredient('#forge:tools/knives');

      event
        .custom({
          type: 'farmersdelight:cutting',
          ingredients: [{ item: 'farmersdelight:salmon_slice' }],
          tool: {
            tag: 'forge:tools/knives',
          },
          result: [
            {
              item: 'aquaculture:fish_fillet_raw',
              count: 1,
            },
          ],
        })
        .id(
          'last_engineer:aquaculture/cutting/fish_fillet_raw_from_salmon_slice'
        );

      event
        .custom({
          type: 'farmersdelight:cutting',
          ingredients: [{ item: 'farmersdelight:cod_slice' }],
          tool: { tag: 'forge:tools/knives' },
          result: [
            {
              item: 'aquaculture:fish_fillet_raw',
              count: 1,
            },
          ],
        })
        .id('last_engineer:aquaculture/cutting/fish_fillet_raw_from_cod_slice');
    }
  } else {
    event
      .shapeless(Item.of('minecraft:nether_wart', 6), [
        'minecraft:nether_wart_block',
        { tag: 'forge:tools/pickaxes' },
      ])
      .id(
        'last_engineer:farmersdelight/shapeless/nether_wart_from_nether_wart_block'
      )
      .keepIngredient('#forge:tools/pickaxes');

    event
      .shapeless(Item.of('minecraft:bamboo', 4), [
        'minecraft:scaffolding',
        { tag: 'forge:tools/axes' },
      ])
      .id('last_engineer:farmersdelight/shapeless/bamboo_from_scaffolding')
      .keepIngredient('#forge:tools/axes');
  }
});
