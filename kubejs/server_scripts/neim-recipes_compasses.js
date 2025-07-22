ServerEvents.recipes((event) => {
  if (Platform.isLoaded('naturescompass')) {
    event.remove({ output: 'naturescompass:naturescompass' });
    event
      .custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: true,
        pattern: [' B ', 'WEW', 'GLG', 'S S'],
        key: {
          B: { item: 'hexerei:blood_bottle' },
          W: { tag: 'minecraft:logs' },
          E: { tag: 'saplings' },
          L: { item: 'minecraft:compass' },
          G: { item: 'minecraft:lime_dye' },
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
        pattern: [' B ', 'GGG', 'LCL', 'S S'],
        key: {
          B: { item: 'hexerei:blood_bottle' },
          G: { item: 'minecraft:glowstone_dust' },
          C: { item: 'minecraft:compass' },
          L: { item: 'minecraft:ender_eye' },
          S: { tag: 'forge:plates/brass' },
        },
        result: { item: 'structurecompass:structure_compass' },
      })
      .id('last_engineer:structure_compass');
  }
});
