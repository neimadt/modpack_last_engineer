ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('immersiveengineering')) return;

  if (Platform.isLoaded('utilitarian')) {
    event
      .custom({
        type: 'immersiveengineering:cloche',
        input: { item: 'minecraft:sugar_cane' },
        render: { type: 'stacking', block: 'minecraft:sugar_cane' },
        results: [{ item: 'minecraft:sugar_cane' }],
        soil: { item: 'utilitarian:snad' },
        time: 480,
      })
      .id('last_engineer:immersiveengineering/cloche/sugar_cane_with_snad');

    event
      .custom({
        type: 'immersiveengineering:cloche',
        input: { item: 'minecraft:sugar_cane' },
        render: { type: 'stacking', block: 'minecraft:sugar_cane' },
        results: [{ item: 'minecraft:sugar_cane' }],
        soil: { item: 'utilitarian:red_snad' },
        time: 480,
      })
      .id('last_engineer:immersiveengineering/cloche/sugar_cane_with_red_snad');

    event
      .custom({
        type: 'immersiveengineering:cloche',
        input: { item: 'minecraft:sugar_cane' },
        render: { type: 'stacking', block: 'minecraft:sugar_cane' },
        results: [{ item: 'minecraft:sugar_cane' }],
        soil: { item: 'utilitarian:soul_snad' },
        time: 480,
      })
      .id(
        'last_engineer:immersiveengineering/cloche/sugar_cane_with_soul_snad'
      );

    event
      .custom({
        type: 'immersiveengineering:cloche',
        input: { item: 'occultism:datura_seeds' },
        render: { type: 'crop', block: 'occultism:datura' },
        results: [
          { item: 'occultism:datura' },
          { item: 'occultism:datura_seeds' },
        ],
        soil: { item: 'minecraft:dirt' },
        time: 640,
      })
      .id('last_engineer:immersiveengineering/cloche/datura_with_dirt');
  }
});
