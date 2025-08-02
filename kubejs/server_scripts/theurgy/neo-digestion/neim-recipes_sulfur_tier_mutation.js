ServerEvents.recipes((event) => {
  const types = ['gems', 'metals', 'other_minerals'];
  const tiers = [
    { low: 'abundant', high: 'common' },
    { low: 'common', high: 'rare' },
    { low: 'rare', high: 'precious' },
  ];

  for (const type of types) {
    for (const tier of tiers) {
      if (Platform.isLoaded('powah')) {
        event
          .custom({
            type: 'powah:energizing',
            ingredients: [
              { item: `theurgy:alchemical_sulfur_${type}_${tier.high}` },
              { tag: 'theurgy:alchemical_salts' },
              { item: 'theurgy:sal_ammoniac_crystal' },
            ],
            energy: 50000,
            result: {
              item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              count: 4,
            },
          })
          .id(
            `last_engineer:theurgy/energizing/alchemical_sulfur_${type}_${tier.low}_from_${tier.high}`
          );

        event
          .custom({
            type: 'powah:energizing',
            ingredients: [
              {
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
              {
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
              {
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
              {
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
              {
                item: 'theurgy:purified_gold',
              },
              { item: 'theurgy:sal_ammoniac_crystal' },
            ],
            energy: 75000,
            result: {
              count: 1,
              item: `theurgy:alchemical_sulfur_${type}_${tier.high}`,
            },
          })
          .id(
            `last_engineer:theurgy/energizing/alchemical_sulfur_${type}_${tier.high}_from_${tier.low}`
          );
      } else {
        event
          .custom({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: [
              {
                item: `theurgy:alchemical_sulfur_${type}_${tier.high}`,
              },
              {
                tag: 'theurgy:alchemical_salts',
              },
              { item: 'theurgy:sal_ammoniac_crystal' },
            ],
            pressure: 3.0,
            results: [
              {
                count: 4,
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
            ],
          })
          .id(
            `last_engineer:theurgy/pressure_chamber/alchemical_sulfur_${type}_${tier.low}_from_${tier.high}`
          );

        event
          .custom({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: [
              {
                type: 'pneumaticcraft:stacked_item',
                count: 4,
                item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
              },
              {
                item: 'theurgy:purified_gold',
              },
              { item: 'theurgy:sal_ammoniac_crystal' },
            ],
            pressure: 3.0,
            results: [
              {
                count: 1,
                item: `theurgy:alchemical_sulfur_${type}_${tier.high}`,
              },
            ],
          })
          .id(
            `last_engineer:theurgy/pressure_chamber/alchemical_sulfur_${type}_${tier.high}_from_${tier.low}`
          );
      }
    }
  }
});
