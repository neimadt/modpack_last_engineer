ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('entangled')) return;

  event.remove({ output: 'entangled:block' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      acceptMirrored: false,
      pattern: ['POP', 'SBS', ' A ', 'SHS', 'POP'],
      key: {
        P: { tag: 'forge:ender_pearls' },
        O: { item: 'forbidden_arcanus:obsidian_ingot' },
        S: { item: 'create:brass_sheet' },
        B: { item: 'hexerei:blood_bottle' },
        A: { item: 'cataclysm:abyss_eye' },
        H: { tag: 'iceandfire:mob_skulls' },
      },
      result: { item: 'entangled:block' },
    })
    .id('last_engineer:entangled/block');

  if (Platform.isLoaded('occultism')) {
    event.remove({ output: 'entangled:item' });
    event
      .custom({
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:craft_foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/custom_ritual',
        },
        duration: 60,
        ingredients: [
          { item: 'minecraft:blaze_rod' },
          { tag: 'forge:ender_pearls' },
          { item: 'minecraft:diamond' },
          { item: 'hexerei:blood_bottle' },
          { item: 'create:electron_tube' },
        ],
        result: {
          item: 'entangled:item',
        },
      })
      .id('last_engineer:entangled/item');
  }
});
