ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('powah')) return;

  event.remove({ output: 'powah:dielectric_paste' });
  event
    .custom({
      type: 'minecraft:crafting_shapeless',
      ingredients: [
        {
          tag: 'minecraft:coals',
        },
        {
          tag: 'minecraft:coals',
        },
        {
          tag: 'minecraft:coals',
        },
        {
          item: 'ae2:silicon',
        },
        {
          item: 'ae2:silicon',
        },
        {
          item: 'minecraft:lava_bucket',
        },
      ],
      result: {
        item: 'powah:dielectric_paste',
        count: 16,
      },
    })
    .id('last_engineer:powah/dielectric_paste_coals');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['brb', 'rtr', 'brb'],
      key: {
        b: {
          item: 'minecraft:lava_bucket',
        },
        r: {
          item: 'minecraft:redstone',
        },
        t: {
          item: 'powah:capacitor_basic_large',
        },
      },
      result: {
        item: 'powah:thermoelectric_plate',
      },
    })
    .id('last_engineer:powah/thermoelectric_plate');
});
