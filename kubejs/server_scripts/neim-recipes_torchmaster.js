ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('torchmaster')) return;

  event.remove({ id: 'torchmaster:megatorch' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['TTT', 'DLD', 'GLG'],
      key: {
        T: { item: 'minecraft:torch' },
        D: { item: 'minecraft:diamond' },
        G: { tag: 'forge:storage_blocks/gold' },
        L: { item: 'hexerei:dried_sage_bundle' },
      },
      result: {
        item: 'torchmaster:megatorch',
      },
    })
    .id('last_engineer:torchmaster/megatorch');
});
