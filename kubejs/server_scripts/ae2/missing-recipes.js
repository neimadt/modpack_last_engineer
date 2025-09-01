ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('ae2')) return;

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        a: {
          tag: 'forge:ingots/iron',
        },
        b: {
          item: 'minecraft:sticky_piston',
        },
        c: {
          tag: 'forge:ingots/copper',
        },
      },
      pattern: ['aba', 'c a', 'aba'],
      result: {
        item: 'ae2:inscriber',
      },
      show_notification: true,
    })
    .id('last_engineer:ae2/inscriber');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'minecraft:iron_block',
        },
        top: {
          item: 'ae2:calculation_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:calculation_processor_press',
      },
    })
    .id('last_engineer:ae2/inscriber/calculation_processor_press');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'ae2:certus_quartz_crystal',
        },
        top: {
          item: 'ae2:calculation_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:printed_calculation_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/printed_calculation_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'minecraft:redstone',
        },
        top: {
          item: 'ae2:printed_calculation_processor',
        },
      },
      mode: 'press',
      result: {
        item: 'ae2:calculation_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/calculation_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          tag: 'forge:gems/certus_quartz',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:certus_quartz_dust',
      },
    })
    .id('last_engineer:ae2/inscriber/certus_quartz_dust');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'minecraft:ender_pearl',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:ender_dust',
      },
    })
    .id('last_engineer:ae2/inscriber/ender_dust');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'minecraft:iron_block',
        },
        top: {
          item: 'ae2:engineering_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:engineering_processor_press',
      },
    })
    .id('last_engineer:ae2/inscriber/engineering_processor_press');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          tag: 'forge:gems/diamond',
        },
        top: {
          item: 'ae2:engineering_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:printed_engineering_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/printed_engineering_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'minecraft:redstone',
        },
        top: {
          item: 'ae2:printed_engineering_processor',
        },
      },
      mode: 'press',
      result: {
        item: 'ae2:engineering_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/engineering_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          tag: 'forge:gems/fluix',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:fluix_dust',
      },
    })
    .id('last_engineer:ae2/inscriber/fluix_dust');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'minecraft:iron_block',
        },
        top: {
          item: 'ae2:logic_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:logic_processor_press',
      },
    })
    .id('last_engineer:ae2/inscriber/logic_processor_press');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          tag: 'forge:ingots/gold',
        },
        top: {
          item: 'ae2:logic_processor_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:printed_logic_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/printed_logic_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'minecraft:redstone',
        },
        top: {
          item: 'ae2:printed_logic_processor',
        },
      },
      mode: 'press',
      result: {
        item: 'ae2:logic_processor',
      },
    })
    .id('last_engineer:ae2/inscriber/logic_processor');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'minecraft:iron_block',
        },
        top: {
          item: 'ae2:silicon_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:silicon_press',
      },
    })
    .id('last_engineer:ae2/inscriber/silicon_press');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          tag: 'forge:silicon',
        },
        top: {
          item: 'ae2:silicon_press',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:printed_silicon',
      },
    })
    .id('last_engineer:ae2/inscriber/printed_silicon');

  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        middle: {
          item: 'ae2:sky_stone_block',
        },
      },
      mode: 'inscribe',
      result: {
        item: 'ae2:sky_dust',
      },
    })
    .id('last_engineer:ae2/inscriber/sky_dust');
});
