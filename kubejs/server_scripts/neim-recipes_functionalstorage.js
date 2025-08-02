ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        C: {
          tag: 'forge:chests/wooden',
        },
        P: {
          tag: 'forge:planks',
        },
      },
      pattern: ['PPP', 'PCP', 'PPP'],
      result: {
        item: 'functionalstorage:spruce_1',
      },
      show_notification: true,
    })
    .id('last_engineer:functionalstorage/spruce_1_from_any_planks');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        C: {
          tag: 'forge:chests/wooden',
        },
        P: {
          tag: 'forge:planks',
        },
      },
      pattern: ['PCP', 'PPP', 'PCP'],
      result: {
        count: 2,
        item: 'functionalstorage:spruce_2',
      },
      show_notification: true,
    })
    .id('last_engineer:functionalstorage/spruce_2_from_any_planks');

  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        C: {
          tag: 'forge:chests/wooden',
        },
        P: {
          tag: 'forge:planks',
        },
      },
      pattern: ['CPC', 'PPP', 'CPC'],
      result: {
        count: 4,
        item: 'functionalstorage:spruce_4',
      },
      show_notification: true,
    })
    .id('last_engineer:functionalstorage/spruce_4_from_any_planks');
});
