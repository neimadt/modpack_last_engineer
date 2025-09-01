ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('ars_nouveau')) return;

  if (Platform.isLoaded('create')) {
    event.remove({ output: 'ars_nouveau:novice_spell_book' });
    if (Platform.isLoaded('mekanismtools')) {
      event
        .custom({
          type: 'minecraft:crafting_shapeless',
          ingredients: [
            {
              item: 'minecraft:book',
            },
            {
              item: 'mekanismtools:iron_paxel',
            },
            {
              item: 'minecraft:iron_sword',
            },
            {
              item: 'create:iron_sheet',
            },
          ],
          result: {
            item: 'ars_nouveau:novice_spell_book',
          },
        })
        .id('last_engineer:ars_nouveau/novice_spell_book');
    } else {
      event
        .custom({
          type: 'minecraft:crafting_shapeless',
          ingredients: [
            {
              item: 'minecraft:book',
            },
            {
              item: 'minecraft:iron_shovel',
            },
            {
              item: 'minecraft:iron_pickaxe',
            },
            {
              item: 'minecraft:iron_axe',
            },
            {
              item: 'minecraft:iron_sword',
            },
            {
              item: 'create:iron_sheet',
            },
          ],
          result: {
            item: 'ars_nouveau:novice_spell_book',
          },
        })
        .id('last_engineer:ars_nouveau/novice_spell_book');
    }

    event.remove({ output: 'ars_nouveau:imbuement_chamber' });
    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          x: {
            item: 'ars_nouveau:archwood_planks',
          },
          y: {
            item: 'create:golden_sheet',
          },
        },
        pattern: ['xyx', 'x x', 'xyx'],
        result: {
          item: 'ars_nouveau:imbuement_chamber',
        },
        show_notification: true,
      })
      .id('last_engineer:ars_nouveau/imbuement_chamber');

    event.remove({ output: 'ars_nouveau:arcane_pedestal' });
    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          x: {
            item: 'ars_nouveau:sourcestone',
          },
          y: {
            tag: 'forge:nuggets/gold',
          },
          z: {
            tag: 'forge:gems/source',
          },
          Q: {
            item: 'create:polished_rose_quartz',
          },
        },
        pattern: ['xzx', 'yQy', 'yxy'],
        result: {
          item: 'ars_nouveau:arcane_pedestal',
        },
        show_notification: true,
      })
      .id('last_engineer:ars_nouveau/arcane_pedestal');

    event.remove({ output: 'ars_nouveau:enchanting_apparatus' });
    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          d: {
            tag: 'forge:gems/diamond',
          },
          g: {
            tag: 'forge:ingots/gold',
          },
          n: {
            tag: 'forge:nuggets/gold',
          },
          s: {
            item: 'ars_nouveau:sourcestone',
          },
          P: {
            item: 'create:precision_mechanism',
          },
        },
        pattern: ['nsn', 'gdg', 'sPs'],
        result: {
          item: 'ars_nouveau:enchanting_apparatus',
        },
        show_notification: true,
      })
      .id('last_engineer:ars_nouveau/enchanting_apparatus');

    event.remove({ output: 'ars_nouveau:arcane_core' });
    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          x: {
            item: 'ars_nouveau:sourcestone',
          },
          y: {
            tag: 'forge:ingots/gold',
          },
          z: {
            tag: 'forge:gems/source',
          },
          T: {
            item: 'create:transmitter',
          },
          E: {
            item: 'create:electron_tube',
          },
        },
        pattern: ['xTx', 'yEy', 'xzx'],
        result: {
          item: 'ars_nouveau:arcane_core',
        },
        show_notification: true,
      })
      .id('last_engineer:ars_nouveau/arcane_core');

    event.remove({ output: 'ars_nouveau:relay' });
    event
      .custom({
        type: 'minecraft:crafting_shaped',
        category: 'misc',
        key: {
          M: {
            tag: 'forge:storage_blocks/source',
          },
          g: {
            tag: 'forge:ingots/gold',
          },
          S: {
            item: 'create:golden_sheet',
          },
        },
        pattern: ['g g', 'SMS', 'g g'],
        result: {
          item: 'ars_nouveau:relay',
        },
        show_notification: true,
      })
      .id('last_engineer:ars_nouveau/relay');
  }
});
