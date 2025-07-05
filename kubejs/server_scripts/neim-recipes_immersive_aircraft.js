ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('immersive_aircraft')) return;

  event.remove({ output: 'immersive_aircraft:airship' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['SSSSS', ' T T ', ' HAEP', ' HHH '],
      key: {
        H: [
          {
            item: 'immersive_aircraft:hull',
          },
        ],
        E: [
          {
            item: 'immersive_aircraft:engine',
          },
        ],
        P: [
          {
            item: 'create:propeller',
          },
        ],
        S: [
          {
            item: 'immersive_aircraft:sail',
          },
        ],
        T: [
          {
            item: 'minecraft:string',
          },
        ],
        A: [
          {
            tag: 'create:seats',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:airship',
      },
      acceptMirrored: true,
    })
    .id('last_engineerimmersive_aircraft/airship');

  event.remove({ output: 'immersive_aircraft:biplane' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['   S ', 'S  S ', 'HHAEP', 'S  S ', '   S '],
      key: {
        H: [
          {
            item: 'immersive_aircraft:hull',
          },
        ],
        E: [
          {
            item: 'immersive_aircraft:engine',
          },
        ],
        P: [
          {
            item: 'immersive_aircraft:propeller',
          },
        ],
        S: [
          {
            item: 'immersive_aircraft:sail',
          },
        ],
        A: [
          {
            tag: 'create:seats',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:biplane',
      },
      acceptMirrored: true,
    })
    .id('last_engineerimmersive_aircraft/biplane');

  event.remove({ output: 'immersive_aircraft:wireless_terminal' });
  event
    .shaped(Item.of('immersive_aircraft:boiler', 1), ['S', 'N', 'I'], {
      I: 'create:blaze_burner',
      S: 'create:steam_engine',
      N: 'create:fluid_tank',
    })
    .id('last_engineerimmersive_aircraft/boiler');

  event.remove({ output: 'immersive_aircraft:eco_engine' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['IWI', 'CEC'],
      key: {
        C: {
          item: 'create:copper_sheet',
        },

        W: {
          item: 'minecraft:water_bucket',
        },

        I: {
          item: 'create:iron_sheet',
        },

        E: {
          item: 'immersive_aircraft:boiler',
        },
      },
      result: {
        item: 'immersive_aircraft:eco_engine',
      },
    })
    .id('last_engineerimmersive_aircraft/eco_engine');

  event.remove({ output: 'immersive_aircraft:engine' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['BPB', 'SES'],
      key: {
        P: [
          {
            item: 'create:precision_mechanism',
          },
        ],
        E: [
          {
            item: 'immersive_aircraft:boiler',
          },
        ],
        B: [
          {
            item: 'create:brass_sheet',
          },
        ],
        S: [
          {
            item: 'create:sturdy_sheet',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:engine',
      },
    })
    .id('last_engineerimmersive_aircraft/engine');

  event.remove({ output: 'immersive_aircraft:enhanced_propeller' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' B ', 'BPB', ' B '],
      key: {
        B: [
          {
            item: 'create:brass_sheet',
          },
        ],
        P: [
          {
            item: 'create:propeller',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:enhanced_propeller',
      },
    })
    .id('last_engineerimmersive_aircraft/enhanced_propeller');

  event.remove({ output: 'immersive_aircraft:gyrodyne' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' P ', 'SES', 'H_H'],
      key: {
        S: [
          {
            item: 'immersive_aircraft:sail',
          },
        ],
        H: [
          {
            item: 'immersive_aircraft:hull',
          },
        ],
        P: [
          {
            item: 'immersive_aircraft:propeller',
          },
        ],
        E: [
          {
            item: 'create:precision_mechanism',
          },
        ],
        _: [
          {
            tag: 'create:seats',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:gyrodyne',
      },
    })
    .id('last_engineerimmersive_aircraft/gyrodyne');

  event.remove({ output: 'immersive_aircraft:gyroscope' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['E', 'C'],
      key: {
        C: [
          {
            item: 'minecraft:compass',
          },
        ],
        E: [
          {
            item: 'create:electron_tube',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:gyroscope',
      },
    })
    .id('last_engineerimmersive_aircraft/gyroscope');

  event.remove({ output: 'immersive_aircraft:hull_reinforcement' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['IHI'],
      key: {
        H: [
          {
            item: 'immersive_aircraft:hull',
          },
        ],
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:hull_reinforcement',
      },
    })
    .id('last_engineerimmersive_aircraft/hull_reinforcement');

  event.remove({ output: 'immersive_aircraft:hull' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['LIL', 'LIL'],
      key: {
        L: [
          {
            item: 'create:andesite_casing',
          },
        ],
        I: [
          {
            item: 'minecraft:iron_ingot',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:hull',
      },
    })
    .id('last_engineerimmersive_aircraft/hull');

  event.remove({ output: 'immersive_aircraft:improved_landing_gear' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['SI', 'B '],
      key: {
        B: [
          {
            item: 'create:belt_connector',
          },
        ],
        I: [
          {
            item: 'minecraft:iron_ingot',
          },
        ],
        S: [
          {
            item: 'create:iron_sheet',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:improved_landing_gear',
      },
    })
    .id('last_engineerimmersive_aircraft/improved_landing_gear');

  event.remove({ output: 'immersive_aircraft:industrial_gears' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['ICI'],
      key: {
        C: [
          {
            item: 'create:cogwheel',
          },
        ],
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:industrial_gears',
      },
    })
    .id('last_engineerimmersive_aircraft/industrial_gears');

  event.remove({ output: 'immersive_aircraft:nether_engine' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['ILI', 'SES'],
      key: {
        S: [
          {
            item: 'create:sturdy_sheet',
          },
        ],
        L: [
          {
            item: 'minecraft:lava_bucket',
          },
        ],
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
        E: [
          {
            item: 'immersive_aircraft:boiler',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:nether_engine',
      },
    })
    .id('last_engineerimmersive_aircraft/nether_engine');

  event.remove({ output: 'immersive_aircraft:propeller' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' I ', 'IPI', ' I '],
      key: {
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
        P: [
          {
            item: 'create:propeller',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:propeller',
      },
    })
    .id('last_engineerimmersive_aircraft/propeller');

  event.remove({ output: 'immersive_aircraft:quadrocopter' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['PAP', ' S ', 'PEP'],
      key: {
        E: [
          {
            item: 'immersive_aircraft:boiler',
          },
        ],
        A: [
          {
            item: 'create:andesite_casing',
          },
        ],
        S: [
          {
            item: 'minecraft:string',
          },
        ],
        P: [
          {
            item: 'create:propeller',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:quadrocopter',
      },
    })
    .id('last_engineerimmersive_aircraft/quadrocopter');

  event.remove({ output: 'immersive_aircraft:sail' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['SSS', 'SSS'],
      key: {
        S: [
          {
            item: 'create:white_sail',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:sail',
      },
    })
    .id('last_engineerimmersive_aircraft/sail');

  event.remove({ output: 'immersive_aircraft:steel_boiler' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['IFI'],
      key: {
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
        F: [
          {
            item: 'create:fluid_tank',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:steel_boiler',
      },
    })
    .id('last_engineerimmersive_aircraft/steel_boiler');

  event.remove({ output: 'immersive_aircraft:sturdy_pipes' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['IPI'],
      key: {
        P: [
          {
            item: 'create:fluid_pipe',
          },
        ],
        I: [
          {
            item: 'create:iron_sheet',
          },
        ],
      },
      result: {
        item: 'immersive_aircraft:sturdy_pipes',
      },
    })
    .id('last_engineerimmersive_aircraft/sturdy_pipes');
});
