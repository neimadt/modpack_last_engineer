ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('angelring')) return;

  event.remove({ output: 'angelring:diamond_ring' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      acceptMirrored: false,
      key: {
        R: { item: 'bloodmagic:reagentair' },
        L: { item: 'minecraft:elytra' },
        V: { item: 'cataclysm:void_core' },
        C: { item: 'minecraft:nether_star' },
        D: { item: 'cataclysm:ignitium_ingot' },
        E: { item: 'create:brass_casing' },
        S: { item: 'create:brass_sheet' },
        F: { item: 'hexerei:blood_bottle' },
      },
      pattern: ['RLR', 'FVF', ' D ', 'SSS', 'ECE'],
      result: { item: 'angelring:diamond_ring' },
    })
    .id('last_engineer:angelring/diamond_ring');
});
