ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('create_mechanical_spawner')) return;

  event.remove({ output: 'create_mechanical_spawner:mechanical_spawner' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      acceptMirrored: true,
      key: {
        B: { tag: 'forge:ingots/brass' },
        E: { item: 'minecraft:spawner' },
        H: { item: 'create:shaft' },
        I: { item: 'minecraft:iron_bars' },
        S: { tag: 'forge:plates/brass' },
        X: { item: 'forbidden_arcanus:xpetrified_orb' },
        C: { item: 'forbidden_arcanus:spawner_scrap' },
        F: { item: 'dungeonnowloading:spawner_frame' },
      },
      pattern: ['BSFSB', 'BIXIB', 'BIEIB', 'BICIB', 'BSHSB'],
      result: {
        item: 'create_mechanical_spawner:mechanical_spawner',
      },
    })
    .id('last_engineer:create_mechanical_spawner/mechanical_spawner');

  event.remove({ output: 'create_mechanical_spawner:loot_collector' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      acceptMirrored: true,
      key: {
        B: { tag: 'forge:ingots/brass' },
        C: { item: 'forbidden_arcanus:xpetrified_orb' },
        I: { item: 'minecraft:iron_bars' },
        S: { tag: 'forge:plates/brass' },
        F: { item: 'dungeonnowloading:spawner_frame' },
        H: { item: 'create:shaft' },
      },
      pattern: ['BSSSB', 'BIIIB', 'BICIB', 'BIFIB', 'BSHSB'],
      result: {
        item: 'create_mechanical_spawner:loot_collector',
      },
    })
    .id('last_engineer:create_mechanical_spawner/loot_collector');
});
