ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('occultism')) return;

  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:craft',
      activation_item: {
        item: 'occultism:book_of_binding_bound_djinni',
      },
      pentacle_id: 'occultism:craft_djinni',
      duration: 45,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/custom_ritual',
      },
      ingredients: [
        { item: 'minecraft:black_dye' },
        { item: 'minecraft:black_dye' },
        { item: 'minecraft:bone_meal' },
        { item: 'minecraft:wither_rose' },
        { item: 'hexerei:blood_bottle' },
      ],
      result: {
        item: 'minecraft:wither_rose',
        count: 2,
      },
    })
    .id('last_engineer:minecraft/wither_rose');
});
