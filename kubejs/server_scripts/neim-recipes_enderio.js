ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('enderio')) return;

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
