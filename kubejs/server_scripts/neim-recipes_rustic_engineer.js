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
});
