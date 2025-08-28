ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('benssharks')) return;

  event
    .custom({
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'farmersdelight',
        },
        {
          type: 'forge:mod_loaded',
          modid: 'aquaculture',
        },
        {
          type: 'forge:mod_loaded',
          modid: 'aquaculturedelight',
        },
      ],
      type: 'farmersdelight:cutting',
      ingredients: [
        {
          item: 'benssharks:raw_pilot_fish',
        },
      ],
      result: [
        {
          count: 1,
          item: 'aquaculture:fish_fillet_raw',
        },
        {
          item: 'minecraft:bone_meal',
        },
        {
          chance: 0.05,
          item: 'aquaculture:fish_bones',
        },
      ],
      tool: {
        tag: 'forge:tools/knives',
      },
    })
    .id('last_engineer:raw_pilot_fish_to_fish_fillet');
});
