ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('easy_villagers')) return;

  // Breeder
  event.remove({ output: 'easy_villagers:breeder' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'GBG', 'IWI'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        B: {
          tag: 'minecraft:beds',
        },
        W: {
          tag: 'minecraft:planks',
        },
      },
      result: {
        item: 'easy_villagers:breeder',
      },
    })
    .id('last_engineer:easy_villagers/breeder');

  // Incubator
  event.remove({ output: 'easy_villagers:incubator' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'G G', 'IWI'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        W: {
          item: 'minecraft:white_wool',
        },
      },
      result: {
        item: 'easy_villagers:incubator',
      },
    })
    .id('last_engineer:easy_villagers/incubator');

  // Trader
  event.remove({ output: 'easy_villagers:trader' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'GRG', 'III'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        R: {
          tag: 'forge:dusts/redstone',
        },
      },
      result: {
        item: 'easy_villagers:trader',
      },
    })
    .id('last_engineer:easy_villagers/trader');

  // Auto-Trader
  event.remove({ output: 'easy_villagers:auto_trader' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'GRG', 'INI'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        R: {
          tag: 'forge:dusts/redstone',
        },
        N: {
          tag: 'forge:ingots/netherite',
        },
      },
      result: {
        item: 'easy_villagers:auto_trader',
      },
    })
    .id('last_engineer:easy_villagers/auto_trader');

  // Converter
  event.remove({ output: 'easy_villagers:converter' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'GFG', 'ICI'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        F: {
          item: 'minecraft:rotten_flesh',
        },
        C: {
          item: 'minecraft:mossy_cobblestone',
        },
      },
      result: {
        item: 'easy_villagers:converter',
      },
    })
    .id('last_engineer:easy_villagers/converter');

  // Iron Farm
  event.remove({ output: 'easy_villagers:iron_farm' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: ['GGG', 'GLG', 'ISI'],
      key: {
        G: {
          item: 'ae2:quartz_glass',
        },
        I: {
          tag: 'forge:ingots/iron',
        },
        S: {
          item: 'minecraft:stone',
        },
        L: {
          item: 'minecraft:lava_bucket',
        },
      },
      result: {
        item: 'easy_villagers:iron_farm',
      },
    })
    .id('last_engineer:easy_villagers/iron_farm');

  // // Breeder
  // event.remove({ output: 'easy_villagers:breeder' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/brass' },
  //       B: { item: 'bloodmagic:reagentvoid' },
  //       R: { item: 'minecraft:hay_block' },
  //     },
  //     result: { item: 'easy_villagers:breeder' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/breeder');

  // // Incubator
  // event.remove({ output: 'easy_villagers:incubator' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/brass' },
  //       B: { item: 'bloodmagic:reagentgrowth' },
  //       R: { tag: 'forge:wool' },
  //     },
  //     result: { item: 'easy_villagers:incubator' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/incubator');

  // // Trader
  // event.remove({ output: 'easy_villagers:trader' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/brass' },
  //       B: { item: 'bloodmagic:reagentsight' },
  //       R: { item: 'minecraft:emerald' }, // Symbolizes commerce
  //     },
  //     result: { item: 'easy_villagers:trader' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/trader');

  // // Auto-Trader
  // event.remove({ output: 'easy_villagers:auto_trader' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/brass' },
  //       B: { item: 'bloodmagic:reagentbinding' },
  //       R: { item: 'minecraft:emerald_block' }, // Represents automated commerce power
  //     },
  //     result: { item: 'easy_villagers:auto_trader' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/auto_trader');

  // // Converter
  // event.remove({ output: 'easy_villagers:converter' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/brass' },
  //       B: { item: 'bloodmagic:reagentbinding' },
  //       R: { item: 'minecraft:rotten_flesh' }, // Symbolizes healing/cure
  //     },
  //     result: { item: 'easy_villagers:converter' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/converter');

  // event.remove({ output: 'easy_villagers:iron_farm' });
  // event
  //   .custom({
  //     type: 'create:mechanical_crafting',
  //     pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
  //     key: {
  //       Q: { item: 'ae2:quartz_glass' },
  //       P: { item: 'create:precision_mechanism' },
  //       M: { tag: 'forge:plates/obsidian' },
  //       B: { item: 'bloodmagic:reagentbinding' },
  //       R: { item: 'powah:ender_core' }, // Symbolizes power
  //     },
  //     result: { item: 'easy_villagers:iron_farm' },
  //   })
  //   .id('last_engineer:easy_villagers/mechanical_crafting/iron_farm');
});
