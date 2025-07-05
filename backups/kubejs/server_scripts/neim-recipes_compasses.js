ServerEvents.recipes((event) => {
  if (Platform.isLoaded('naturescompass')) {
    event.remove({ output: 'naturescompass:naturescompass' });
    event
      .custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: true,
        pattern: ['WEW', 'GLG', 'S S'],
        key: {
          W: { tag: 'minecraft:logs' },
          L: { item: 'minecraft:compass' },
          G: { item: 'minecraft:lime_dye' },
          E: { item: 'hexerei:blood_bottle' },
          S: { tag: 'forge:plates/brass' },
        },
        result: { item: 'naturescompass:naturescompass' },
      })
      .id('last_engineer:naturescompass');
  }

  if (Platform.isLoaded('structurecompass')) {
    event.remove({ output: 'structurecompass:structure_compass' });
    event
      .custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: true,
        pattern: ['GGG', 'CLC', 'S S'],
        key: {
          G: { item: 'minecraft:glowstone_dust' },
          C: { item: 'minecraft:compass' },
          L: { item: 'dungeonsdelight:stained_scrap' },
          S: { tag: 'forge:plates/brass' },
        },
        result: { item: 'structurecompass:structure_compass' },
      })
      .id('last_engineer:structure_compass');
  }
});
