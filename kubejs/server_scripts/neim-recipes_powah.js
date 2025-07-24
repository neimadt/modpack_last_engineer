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
});
