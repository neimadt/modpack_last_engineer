ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('enderio')) return;

  event.remove({ output: 'enderio:primitive_alloy_smelter' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        B: {
          item: 'minecraft:blaze_rod',
        },
        D: {
          item: 'minecraft:deepslate',
        },
        F: {
          item: 'minecraft:furnace',
        },
        G: {
          tag: 'forge:dusts/grains_of_infinity',
        },
      },
      pattern: ['FBF', 'DGD', 'DDD'],
      result: {
        item: 'enderio:primitive_alloy_smelter',
      },
      show_notification: true,
    })
    .id('last_engineer:enderio/primitive_alloy_smelter');

  event.remove({ output: 'enderio:alloy_smelter' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        B: {
          item: 'minecraft:blaze_rod',
        },
        C: {
          item: 'minecraft:cauldron',
        },
        F: {
          item: 'minecraft:furnace',
        },
        G: {
          tag: 'forge:gears/iron',
        },
        I: {
          tag: 'forge:ingots/dark_steel',
        },
        V: {
          item: 'enderio:void_chassis',
        },
      },
      pattern: ['IBI', 'FVF', 'GCG'],
      result: {
        item: 'enderio:alloy_smelter',
      },
      show_notification: true,
    })
    .id('last_engineer:enderio/alloy_smelter');

  if (Platform.isLoaded('ae2')) {
    event.remove({
      id: 'enderio:smelting/ae2/smelting/silicon_from_certus_quartz_dust',
    });

    event.custom({
      type: 'enderio:alloy_smelting',
      energy: 14000,
      experience: 0.0,
      inputs: [
        {
          count: 1,
          ingredient: {
            tag: 'forge:sand',
          },
        },
        {
          count: 1,
          ingredient: {
            item: 'ae2:certus_quartz_dust',
          },
        },
      ],
      result: {
        item: 'ae2:silicon',
      },
    });
  }

  if (Platform.isLoaded('create')) {
    event
      .custom({
        type: 'enderio:alloy_smelting',
        energy: 6400,
        experience: 0.3,
        inputs: [
          {
            count: 1,
            ingredient: {
              tag: 'forge:ingots/copper',
            },
          },
          {
            count: 1,
            ingredient: {
              tag: 'forge:ingots/zinc',
            },
          },
        ],
        result: {
          item: 'create:brass_ingot',
          count: 2,
        },
      })
      .id('last_engineer:enderio/alloy_smelting/brass');
  }
});
