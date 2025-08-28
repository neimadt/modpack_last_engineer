ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('ae2')) return;

  event.remove({ output: 'ae2:silicon' });
  if (Platform.isLoaded('immersiveengineering')) {
    event
      .custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [{ tag: 'forge:sand' }],
        energy: 32000,
        input: { item: 'ae2:certus_quartz_dust' },
        results: [{ item: 'ae2:silicon', count: 2 }],
        time: 100,
      })
      .id('last_engineer:immersiveengineering/arc_furnace/silicon');
  }

  event
    .custom({
      type: 'create:mixing',
      conditions: [
        {
          type: 'forge:mod_loaded',
          modid: 'create',
        },
      ],
      ingredients: [
        {
          item: 'ae2:charged_certus_quartz_crystal',
        },
        {
          tag: 'forge:dusts/certus_quartz',
        },
        {
          amount: 250,
          fluid: 'minecraft:water',
          nbt: {},
        },
      ],
      results: [
        {
          count: 2,
          item: 'ae2:certus_quartz_crystal',
        },
      ],
    })
    .id('last_engineer:create/mixing/certus_quartz_crystal');

  event.remove({ output: 'ae2:quartz_fiber' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      category: 'misc',
      key: {
        a: {
          tag: 'forge:glass',
        },
        b: {
          tag: 'ae2:all_quartz_dust',
        },
        s: {
          item: 'ae2:silicon',
        },
      },
      pattern: ['aaa', 'bsb', 'aaa'],
      result: {
        count: 3,
        item: 'ae2:quartz_fiber',
      },
      show_notification: true,
    })
    .id('last_engineer:ae2/quartz_fiber');

  event
    .custom({
      type: 'minecraft:crafting_shapeless',
      category: 'misc',
      ingredients: [
        {
          item: 'immersiveengineering:hemp_fabric',
        },
        {
          item: 'ae2:fluix_glass_cable',
        },
      ],
      result: {
        item: 'ae2:fluix_covered_cable',
      },
    })
    .id('last_engineer:ae2/fluix_covered_cable');
});
