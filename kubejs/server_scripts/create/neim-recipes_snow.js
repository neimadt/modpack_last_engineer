ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('create')) return;

  event
    .custom({
      type: 'create:mixing',
      ingredients: [
        {
          item: 'minecraft:ice',
        },
        {
          amount: 1000,
          fluid: 'minecraft:water',
          nbt: {},
        },
      ],
      results: [
        {
          item: 'minecraft:snow_block',
          count: 8,
        },
      ],
    })
    .id('last_engineer:create/mixing/ice_to_snow_block');
});
