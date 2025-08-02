ServerEvents.recipes((event) => {
  if (Platform.isLoaded('powah')) {
    event
      .custom({
        type: 'powah:energizing',
        ingredients: [
          {
            tag: 'forge:ingots/gold',
          },
          {
            tag: 'theurgy:alchemical_salts',
          },
          {
            tag: 'theurgy:alchemical_salts',
          },
        ],
        energy: 12000,
        result: {
          item: 'theurgy:purified_gold',
          count: 12,
        },
      })
      .id('last_engineer:theurgy/energizing/purified_gold');
  } else {
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
  }
});
