ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('create')) return;

  event
    .custom({
      type: 'create:mixing',
      ingredients: [
        {
          item: 'minecraft:netherite_ingot',
        },
        {
          amount: 1000,
          fluid: 'theurgy:sal_ammoniac',
        },
      ],
      results: [
        {
          item: 'minecraft:netherite_scrap',
        },
        {
          item: 'minecraft:gold_nugget',
          count: 9,
        },
        {
          item: 'minecraft:netherite_scrap',
          chance: 0.8,
        },
        {
          item: 'minecraft:netherite_scrap',
          chance: 0.2,
        },
      ],
    })
    .id(
      'last_engineer:create/mixing/netherite_ingot_to_netherite_scrap_and_gold_nuggets'
    );
});
