ServerEvents.recipes((event) => {
  event.remove({ output: 'ae2:silicon' });
  event
    .custom({
      type: 'immersiveengineering:arc_furnace',
      additives: [{ tag: 'forge:sand' }],
      energy: 32000,
      input: { item: 'ae2:certus_quartz_dust' },
      results: [{ item: 'ae2:silicon' }],
      time: 100,
    })
    .id('last_engineer:immersiveengineering/arc_furnace/silicon');

  event.remove({ output: 'ae2:inscriber' });
  event
    .shaped(Item.of('ae2:inscriber', 1), ['CPS', 'R S', 'CPS'], {
      S: 'create:iron_sheet',
      R: 'create:copper_sheet',
      C: 'pneumaticcraft:ingot_iron_compressed',
      P: 'minecraft:sticky_piston',
    })
    .id('kubejs:ae2/inscriber');

  event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' });
  event
    .shaped(Item.of('ae2:energy_acceptor', 1), ['IGI', 'GCG', 'IGI'], {
      I: 'create:iron_sheet',
      C: 'theurgy:alchemical_sulfur_copper',
      G: 'ae2:quartz_glass',
    })
    .id('kubejs:ae2/energy_acceptor');

  event.remove({ output: 'ae2:smooth_sky_stone_block' });
  event
    .custom({
      type: 'occultism:spirit_fire',
      ingredient: {
        item: 'ae2:sky_stone_block',
      },
      result: {
        item: 'ae2:smooth_sky_stone_block',
      },
    })
    .id('occultism:kubejs/smooth_sky_stone_block');

  event.remove({ output: 'ae2:calculation_processor' });
  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'bloodmagic:reagentbinding',
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
    .id('kubejs:ae2/calculation_processor');

  event.remove({ output: 'ae2:engineering_processor' });
  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'bloodmagic:reagentbinding',
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
    .id('kubejs:ae2/engineering_processor');

  event.remove({ output: 'ae2:logic_processor' });
  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'bloodmagic:reagentbinding',
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
    .id('kubejs:ae2/logic_processor');

  event.remove({ output: 'advanced_ae:quantum_processor' });
  event
    .custom({
      type: 'ae2:inscriber',
      ingredients: {
        bottom: {
          item: 'ae2:printed_silicon',
        },
        middle: {
          item: 'bloodmagic:reagentbinding',
        },
        top: {
          item: 'advanced_ae:printed_quantum_processor',
        },
      },
      mode: 'press',
      result: {
        item: 'advanced_ae:quantum_processor',
      },
    })
    .id('kubejs:advanced_ae/quantum_processor');

  event
    .custom({
      type: 'bloodmagic:alchemytable',
      input: [
        { item: 'ae2:certus_quartz_crystal' },
        { item: 'bloodmagic:reagentair' },
        { item: 'bloodmagic:reagentwater' },
      ],
      output: {
        item: 'ae2:charged_certus_quartz_crystal',
      },
      syphon: 500,
      ticks: 100,
      upgradeLevel: 1,
    })
    .id('bloodmagic:kubejs/charged_certus_quartz_crystal');

  event.remove({ output: 'ae2:drive' });
  event
    .shaped('ae2:drive', ['PIS', 'GAG', 'SCP'], {
      P: 'pneumaticcraft:plastic',
      I: 'create:electron_tube',
      S: 'create:iron_sheet',
      G: 'ae2:engineering_processor',
      C: 'ae2:fluix_glass_cable',
      A: 'forbidden_arcanus:arcane_crystal_dust',
    })
    .id('kubejs:ae2/me_drive');

  event.remove({ output: 'ae2:cell_component_1k' });
  event
    .shaped('ae2:cell_component_1k', ['CHC', 'ALA', 'CHC'], {
      C: '#forge:gems/certus_quartz',
      L: 'ae2:logic_processor',
      H: 'bloodmagic:reagentholding',
      A: 'forbidden_arcanus:xpetrified_orb',
    })
    .id('kubejs:ae2/cell_component_1k');

  event.remove({ output: 'ae2:crafting_terminal' });
  event
    .shaped('ae2:crafting_terminal', [' P ', 'CTC', ' S '], {
      P: 'ae2:calculation_processor',
      C: 'create:precision_mechanism',
      T: 'ae2:terminal',
      S: 'bloodmagic:reagentvoid',
    })
    .id('kubejs:ae2/crafting_terminal');

  event.remove({ output: 'ae2:terminal' });
  event
    .shaped('ae2:terminal', [' G ', 'FLA', ' V '], {
      G: 'forbidden_arcanus:arcane_crystal',
      F: 'ae2:formation_core',
      L: 'ae2:logic_processor',
      A: 'ae2:annihilation_core',
      V: 'bloodmagic:reagentsight',
    })
    .id('kubejs:ae2/terminal');

  event
    .custom({
      type: 'create:mixing',
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'create',
        },
      ],
      ingredients: [
        {
          item: 'ae2:charged_certus_quartz_crystal',
        },
        {
          tag: 'forge:dusts/certus_quartz',
        },
        {
          amount: 250,
          fluid: 'minecraft:water',
          nbt: {},
        },
      ],
      results: [
        {
          count: 2,
          item: 'ae2:certus_quartz_crystal',
        },
      ],
    })
    .id('last_engineer:create/mixing/certus_quartz_crystal');
});
