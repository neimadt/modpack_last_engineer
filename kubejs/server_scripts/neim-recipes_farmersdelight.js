ServerEvents.recipes((event) => {
  if (Platform.isLoaded('farmersdelight')) {
    event.shapeless(Item.of('minecraft:slime_ball', 1), [
      'farmersdelight:wheat_dough',
      'minecraft:lime_dye',
    ]);

    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: 'minecraft:nether_wart_block' }],
      tool: { tag: 'forge:tools/knives' },
      result: [
        {
          item: {
            id: 'minecraft:nether_wart',
            count: 6,
          },
        },
      ],
    });

    if (Platform.isLoaded('aquaculture')) {
      event
        .shapeless(Item.of('aquaculture:fish_fillet_raw', 1), [
          'farmersdelight:salmon_slice',
          '#forge:tools/knives',
        ])
        .id('last_engineer:aquaculture/fish_fillet_raw_from_salmon_slice')
        .keepIngredient('#forge:tools/knives');

      event
        .shapeless(Item.of('aquaculture:fish_fillet_raw', 1), [
          'farmersdelight:cod_slice',
          '#forge:tools/knives',
        ])
        .id('last_engineer:aquaculture/fish_fillet_raw_from_cod_slice')
        .keepIngredient('#forge:tools/knives');

      event
        .custom({
          type: 'farmersdelight:cutting',
          ingredients: [{ item: 'farmersdelight:salmon_slice' }],
          tool: { tag: 'forge:tools/knives' },
          result: [
            {
              item: {
                id: 'aquaculture:fish_fillet_raw',
                count: 1,
              },
            },
          ],
        })
        .id(
          'last_engineer:cutting/aquaculture/fish_fillet_raw_from_salmon_slice'
        );

      event
        .custom({
          type: 'farmersdelight:cutting',
          ingredients: [{ item: 'farmersdelight:cod_slice' }],
          tool: { tag: 'forge:tools/knives' },
          result: [
            {
              item: {
                id: 'aquaculture:fish_fillet_raw',
                count: 1,
              },
            },
          ],
        })
        .id('last_engineer:cutting/aquaculture/fish_fillet_raw_from_cod_slice');
    }
  } else {
    event
      .shapeless(Item.of('minecraft:nether_wart', 6), [
        'minecraft:nether_wart_block',
        { tag: 'forge:tools/knives' },
      ])
      .keepIngredient('#forge:tools/knives');
  }
});
