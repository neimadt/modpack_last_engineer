ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('rustic_engineer')) return;

  event.remove({ output: 'rustic_engineer:engine' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['abc', 'bdb', 'cba'],
      key: {
        a: {
          item: 'rustic_engineer:gear',
        },
        b: { tag: 'forge:plates/iron' },
        c: {
          item: 'rustic_engineer:iron_pieces',
        },
        d: {
          item: 'minecraft:blast_furnace',
        },
      },
      result: {
        item: 'rustic_engineer:engine',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/engine');

  event.remove({ output: 'rustic_engineer:iron_pieces' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['abc'],
      key: {
        a: {
          tag: 'forge:plates/iron',
        },
        b: { tag: 'forge:ingots/iron' },
        c: {
          item: 'minecraft:iron_nugget',
        },
      },
      result: {
        item: 'rustic_engineer:iron_pieces',
        count: 4,
      },
    })
    .id('last_engineer:rustic_engineer/iron_pieces');

  event.remove({ output: 'rustic_engineer:movable_parts' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['Ba ', 'abc', ' cB'],
      key: {
        a: {
          item: 'rustic_engineer:gear',
        },
        b: {
          tag: 'minecraft:logs',
        },
        c: {
          item: 'rustic_engineer:iron_pieces',
        },
        B: { tag: 'forge:plates/brass' },
      },
      result: {
        item: 'rustic_engineer:movable_parts',
        count: 2,
      },
    })
    .id('last_engineer:rustic_engineer/movable_parts');

  event.remove({ output: 'rustic_engineer:rustic_goggles_helmet' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['a a', 'bcb', 'd d'],
      key: {
        a: {
          item: 'rustic_engineer:movable_parts',
        },
        b: {
          item: 'minecraft:lime_stained_glass_pane',
        },
        c: {
          item: 'minecraft:leather',
        },
        d: {
          tag: 'forge:plates/brass',
        },
      },
      result: {
        item: 'rustic_engineer:rustic_goggles_helmet',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/rustic_goggles_helmet');

  event.remove({ output: 'rustic_engineer:rustic_glider_chestplate' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['aba', 'cdc', 'ePe'],
      key: {
        a: {
          item: 'minecraft:white_wool',
        },
        b: {
          item: 'rustic_engineer:movable_parts',
        },
        c: {
          tag: 'minecraft:planks',
        },
        d: {
          item: 'rustic_engineer:gear',
        },
        e: {
          item: 'rustic_engineer:iron_pieces',
        },
        P: {
          item: 'create:precision_mechanism',
        },
      },
      result: {
        item: 'rustic_engineer:rustic_glider_chestplate',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/rustic_glider_chestplate');

  event.remove({ output: 'rustic_engineer:speed_booster' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['aPa', 'cdc', 'aEa'],
      key: {
        a: {
          item: 'rustic_engineer:iron_pieces',
        },
        c: {
          item: 'rustic_engineer:movable_parts',
        },
        d: {
          item: 'rustic_engineer:gear',
        },
        P: {
          item: 'immersive_aircraft:propeller',
        },
        E: {
          item: 'create_sa:heat_engine',
        },
      },
      result: {
        item: 'rustic_engineer:speed_booster',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/speed_booster');

  event.remove({ output: 'rustic_engineer:rustic_glider_speed_chestplate' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: ['aBa', 'bcb', 'a a'],
      key: {
        B: {
          item: 'minecraft:blaze_powder',
        },
        a: {
          item: 'rustic_engineer:iron_pieces',
        },
        b: {
          item: 'rustic_engineer:speed_booster',
        },
        c: {
          item: 'rustic_engineer:rustic_glider_chestplate',
        },
      },
      result: {
        item: 'rustic_engineer:rustic_glider_speed_chestplate',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/rustic_glider_speed_chestplate');

  event.remove({ output: 'rustic_engineer:spider_mech_item' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: [' P ', 'bcd', 'aeE'],
      key: {
        P: {
          item: 'create:precision_mechanism',
        },
        a: {
          item: 'rustic_engineer:engine',
        },
        b: {
          item: 'rustic_engineer:gear',
        },
        c: {
          item: 'rustic_engineer:book_spidermech',
        },
        d: {
          item: 'rustic_engineer:movable_parts',
        },
        e: {
          item: 'rustic_engineer:iron_pieces',
        },
        E: {
          item: 'create_sa:hydraulic_engine',
        },
      },
      result: {
        item: 'rustic_engineer:spider_mech_item',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/spider_mech_item');

  event.remove({ output: 'rustic_engineer:air_ship_item' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: [' P ', 'bcd', 'aeE'],
      key: {
        P: {
          item: 'immersive_aircraft:propeller',
        },
        a: {
          item: 'rustic_engineer:engine',
        },
        b: {
          item: 'rustic_engineer:gear',
        },
        c: {
          item: 'rustic_engineer:book_airship',
        },
        d: {
          item: 'rustic_engineer:movable_parts',
        },
        e: {
          item: 'rustic_engineer:iron_pieces',
        },
        E: {
          item: 'create_sa:heat_engine',
        },
      },
      result: {
        item: 'rustic_engineer:air_ship_item',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/air_ship_item');

  event.remove({ output: 'rustic_engineer:dragonfly_item' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: [' P ', 'bcd', 'aeE'],
      key: {
        P: {
          item: 'immersive_aircraft:propeller',
        },
        a: {
          item: 'rustic_engineer:engine',
        },
        b: {
          item: 'rustic_engineer:gear',
        },
        c: {
          item: 'rustic_engineer:book_dragon_fly',
        },
        d: {
          item: 'rustic_engineer:movable_parts',
        },
        e: {
          item: 'rustic_engineer:iron_pieces',
        },
        E: {
          item: 'create_sa:steam_engine',
        },
      },
      result: {
        item: 'rustic_engineer:dragonfly_item',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/dragonfly_item');

  event.remove({ output: 'rustic_engineer:abyssal_submarine_item' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      pattern: [' P ', 'bcd', 'aeE'],
      key: {
        P: {
          item: 'immersive_aircraft:propeller',
        },
        a: {
          item: 'rustic_engineer:engine',
        },
        b: {
          item: 'rustic_engineer:gear',
        },
        c: {
          item: 'rustic_engineer:book_abyssal_submarine',
        },
        d: {
          item: 'rustic_engineer:movable_parts',
        },
        e: {
          item: 'rustic_engineer:iron_pieces',
        },
        E: {
          item: 'create_sa:steam_engine',
        },
      },
      result: {
        item: 'rustic_engineer:abyssal_submarine_item',
        count: 1,
      },
    })
    .id('last_engineer:rustic_engineer/abyssal_submarine_item');
});
