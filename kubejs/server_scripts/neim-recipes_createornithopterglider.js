const createornithoptergliderColorsToRemove = [
  'black',
  'blue',
  'brown',
  'cyan',
  'gray',
  'green',
  'light_blue',
  'light_gray',
  'lime',
  'magenta',
  'orange',
  'pink',
  'purple',
  'red',
  'yellow',
];

ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('createornithopterglider')) return;

  event.remove({ output: 'createornithopterglider:ornithopterglider' });
  event.remove({ output: 'createornithopterglider:wing_mesh' });

  for (const color of createornithoptergliderColorsToRemove) {
    event.remove({
      output: `createornithopterglider:ornithopterglider_${color}`,
    });

    event.remove({
      output: `createornithopterglider:wing_mesh_${color}`,
    });

    event
      .shapeless(`createornithopterglider:ornithopterglider_${color}`, [
        `createornithopterglider:ornithopterglider`,
        `minecraft:${color}_dye`,
      ])
      .id(
        `last_engineer:crafting/createornithopterglider/ornithopterglider_${color}`
      );
  }

  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['  PSP  ', 'WWLCLWW', ' WECEW ', '  SRS  ', '   W   '],
      key: {
        S: {
          tag: 'minecraft:wooden_slabs',
        },
        P: {
          item: 'create:brass_nugget',
        },
        W: {
          item: 'enderio:glider_wing',
        },
        L: {
          tag: 'createornithopterglider:ropes',
        },
        C: {
          item: 'create:cogwheel',
        },
        E: {
          item: 'create:shaft',
        },
        R: {
          item: 'create:andesite_casing',
        },
      },
      result: {
        item: 'createornithopterglider:ornithopterglider',
        count: 1,
      },
      acceptMirrored: false,
    })
    .id('last_engineer:crafting/createornithopterglider/ornithopterglider');
});

ServerEvents.tags('item', (event) => {
  event.add(
    'c:hidden_from_recipe_viewers',
    'createornithopterglider:elytra_piece'
  );
  event.add(
    'c:hidden_from_recipe_viewers',
    'createornithopterglider:wing_mesh'
  );

  for (const color of createornithoptergliderColorsToRemove) {
    event.add(
      'c:hidden_from_recipe_viewers',
      `createornithopterglider:wing_mesh_${color}`
    );
  }
});
