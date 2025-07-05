ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('prettypipes')) return;

  event.remove({ output: 'prettypipes:pipe' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' R ', 'IGI', ' C '],
      key: {
        R: {
          item: 'minecraft:redstone',
        },
        I: {
          item: 'minecraft:iron_bars',
        },
        G: {
          tag: 'forge:glass',
        },
        C: {
          tag: 'forge:plates/brass',
        },
      },
      result: {
        item: 'prettypipes:pipe',
        count: 8,
      },
    })
    .id('last_engineer:prettypipes/pipe');

  event.remove({ output: 'prettypipes:item_terminal' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['DZI', 'RCE', 'IPD'],
      key: {
        E: {
          item: 'prettypipes:high_extraction_module',
        },
        R: {
          item: 'prettypipes:high_retrieval_module',
        },
        P: {
          item: 'minecraft:ender_pearl',
        },
        I: {
          item: 'minecraft:iron_block',
        },
        C: {
          tag: 'forge:chests',
        },
        Z: {
          item: 'create:precision_mechanism',
        },
        D: {
          item: 'minecraft:diamond',
        },
      },
      result: {
        item: 'prettypipes:item_terminal',
      },
    })
    .id('last_engineer:prettypipes/item_terminal');

  event.remove({ output: 'prettypipes:crafting_terminal' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' C ', 'STS', ' R '],
      key: {
        T: {
          item: 'prettypipes:item_terminal',
        },
        C: {
          item: 'minecraft:crafting_table',
        },
        R: {
          item: 'minecraft:redstone',
        },
        S: {
          tag: 'forge:plates/brass',
        },
      },
      result: {
        item: 'prettypipes:crafting_terminal',
      },
    })
    .id('last_engineer:prettypipes/crafting_terminal');

  event.remove({ output: 'prettypipes:pressurizer' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['TST', 'SRS', 'TPT'],
      key: {
        S: {
          item: 'prettypipes:high_speed_module',
        },
        R: {
          item: 'minecraft:redstone_block',
        },
        T: {
          tag: 'forge:plates/brass',
        },
        P: {
          item: 'create:propeller',
        },
      },
      result: {
        item: 'prettypipes:pressurizer',
      },
    })
    .id('last_engineer:prettypipes/pressurizer');
});
