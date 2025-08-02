ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('pipez')) return;

  event.remove({ output: 'pipez:energy_pipe' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['ISI', 'BRB', 'ISI'],
      key: {
        B: {
          tag: 'forge:storage_blocks/redstone',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        R: {
          tag: 'forge:dusts/redstone',
        },
        S: {
          item: 'ae2:silicon',
        },
      },
      result: {
        item: 'pipez:energy_pipe',
        count: 16,
      },
    })
    .id('last_engineer:pipez/energy_pipe');

  event.remove({ output: 'pipez:fluid_pipe' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['ISI', 'BRB', 'ISI'],
      key: {
        B: {
          item: 'minecraft:bucket',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        R: {
          tag: 'forge:dusts/redstone',
        },
        S: {
          item: 'ae2:silicon',
        },
      },
      result: {
        item: 'pipez:fluid_pipe',
        count: 16,
      },
    })
    .id('last_engineer:pipez/fluid_pipe');

  event.remove({ output: 'pipez:item_pipe' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['ISI', 'DRD', 'ISI'],
      key: {
        D: {
          item: 'minecraft:dropper',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        R: {
          tag: 'forge:dusts/redstone',
        },
        S: {
          item: 'ae2:silicon',
        },
      },
      result: {
        item: 'pipez:item_pipe',
        count: 16,
      },
    })
    .id('last_engineer:pipez/item_pipe');
});
