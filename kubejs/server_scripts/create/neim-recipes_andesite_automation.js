ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('create')) return;

  event.remove({ id: 'create:compacting/andesite_from_flint' });

  event
    .custom({
      type: 'create:mixing',
      ingredients: [
        {
          item: 'minecraft:dirt',
        },
        {
          item: 'minecraft:gravel',
        },
        {
          item: 'minecraft:clay_ball',
        },
        {
          amount: 250,
          fluid: 'minecraft:water',
        },
      ],
      results: [
        {
          item: 'minecraft:andesite',
          chance: 0.75,
        },
        {
          item: 'minecraft:andesite',
          chance: 0.05,
        },
      ],
    })
    .id('last_engineer:create/mixing/andesite_from_dirt_gravel_and_clay_ball');

  event
    .custom({
      type: 'create:mixing',
      heatRequirement: 'heated',
      ingredients: [
        {
          item: 'minecraft:dirt',
        },
        {
          item: 'minecraft:gravel',
        },
        {
          item: 'minecraft:clay_ball',
        },
        {
          amount: 500,
          fluid: 'minecraft:water',
        },
      ],
      results: [
        {
          item: 'minecraft:andesite',
          count: 2,
        },
        {
          item: 'minecraft:andesite',
          chance: 0.75,
        },
      ],
    })
    .id(
      'last_engineer:create/mixing/andesite_from_dirt_gravel_and_clay_ball_heated'
    );

  event
    .custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
        {
          item: 'minecraft:dirt',
        },
        {
          item: 'minecraft:gravel',
        },
        {
          item: 'minecraft:clay_ball',
        },
        {
          amount: 750,
          fluid: 'minecraft:water',
        },
      ],
      results: [
        {
          item: 'minecraft:andesite',
          count: 3,
        },
        {
          item: 'minecraft:andesite',
          chance: 0.75,
        },
        {
          item: 'minecraft:andesite',
          chance: 0.25,
        },
      ],
    })
    .id(
      'last_engineer:create/mixing/andesite_from_dirt_gravel_and_clay_ball_superheated'
    );

  event
    .custom({
      type: 'create:mixing',
      ingredients: [
        {
          item: 'minecraft:cobblestone',
        },
        {
          item: 'minecraft:cobblestone',
        },
        {
          item: 'minecraft:cobblestone',
        },
        {
          item: 'minecraft:cobblestone',
        },
        {
          item: 'minecraft:cobblestone',
        },
        {
          amount: 200,
          fluid: 'minecraft:water',
        },
      ],
      results: [
        {
          item: 'minecraft:dirt',
          chance: 0.75,
        },
        {
          chance: 0.5,
          item: 'minecraft:sand',
        },
      ],
    })
    .id('last_engineer:create/mixing/dirt_and_sand_from_cobblestone');

  event.remove({ id: 'create:splashing/sand' });
  event
    .custom({
      type: 'create:splashing',
      ingredients: [
        {
          item: 'minecraft:sand',
        },
      ],
      results: [
        {
          chance: 0.75,
          item: 'minecraft:clay_ball',
        },
        {
          chance: 0.1,
          item: 'minecraft:clay_ball',
        },
      ],
    })
    .id('last_engineer:create/splashing/clay_ball_from_sand');
});
