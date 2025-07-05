ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: [
        {
          count: 1,
          tag: 'forge:ingots/gold',
        },
        {
          type: 'pneumaticcraft:stacked_item',
          count: 2,
          tag: 'theurgy:alchemical_salts',
        },
      ],
      pressure: 2.0,
      results: [
        {
          count: 12,
          item: 'theurgy:purified_gold',
        },
      ],
    })
    .id('last_engineer:theurgy/pressure_chamber/purified_gold');
});
