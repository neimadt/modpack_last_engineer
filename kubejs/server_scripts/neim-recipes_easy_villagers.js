ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('easy_villagers')) return;

  // Breeder
  event.remove({ output: 'easy_villagers:breeder' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
      key: {
        Q: { item: 'ae2:quartz_glass' },
        P: { item: 'create:precision_mechanism' },
        M: { tag: 'forge:plates/brass' },
        B: { item: 'bloodmagic:reagentbinding' },
        R: { item: 'minecraft:hay_block' },
      },
      result: { item: 'easy_villagers:breeder' },
    })
    .id('last_engineer:easy_villagers/mechanical_crafting/breeder');

  // Incubator
  event.remove({ output: 'easy_villagers:incubator' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
      key: {
        Q: { item: 'ae2:quartz_glass' },
        P: { item: 'create:precision_mechanism' },
        M: { tag: 'forge:plates/brass' },
        B: { item: 'bloodmagic:reagentgrowth' },
        R: { tag: 'forge:wool' },
      },
      result: { item: 'easy_villagers:incubator' },
    })
    .id('last_engineer:easy_villagers/mechanical_crafting/incubator');

  // Trader
  event.remove({ output: 'easy_villagers:trader' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
      key: {
        Q: { item: 'ae2:quartz_glass' },
        P: { item: 'create:precision_mechanism' },
        M: { tag: 'forge:plates/brass' },
        B: { item: 'bloodmagic:reagentsight' },
        R: { item: 'minecraft:emerald' }, // Symbolizes commerce
      },
      result: { item: 'easy_villagers:trader' },
    })
    .id('last_engineer:easy_villagers/mechanical_crafting/trader');

  // Auto-Trader
  event.remove({ output: 'easy_villagers:auto_trader' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
      key: {
        Q: { item: 'ae2:quartz_glass' },
        P: { item: 'create:precision_mechanism' },
        M: { tag: 'forge:plates/brass' },
        B: { item: 'bloodmagic:reagentsuppression' },
        R: { item: 'minecraft:emerald_block' }, // Represents automated commerce power
      },
      result: { item: 'easy_villagers:auto_trader' },
    })
    .id('last_engineer:easy_villagers/mechanical_crafting/auto_trader');

  // Converter
  event.remove({ output: 'easy_villagers:converter' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['QQQ', 'QBQ', 'MRM', ' P '],
      key: {
        Q: { item: 'ae2:quartz_glass' },
        P: { item: 'create:precision_mechanism' },
        M: { tag: 'forge:plates/brass' },
        B: { item: 'bloodmagic:reagentvoid' },
        R: { item: 'minecraft:rotten_flesh' }, // Symbolizes healing/cure
      },
      result: { item: 'easy_villagers:converter' },
    })
    .id('last_engineer:easy_villagers/mechanical_crafting/converter');
});
