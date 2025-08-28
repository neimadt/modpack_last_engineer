ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('benssharks')) return;

  event.remove({ output: 'bamboodelight:bamboo_stew' });
  event
    .custom({
      type: 'farmersdelight:cooking',
      container: {
        item: 'minecraft:bowl',
      },
      cookingtime: 200,
      experience: 1.0,
      ingredients: [
        {
          item: 'minecraft:bamboo',
        },
        {
          item: 'minecraft:bamboo',
        },
        {
          item: 'minecraft:bamboo',
        },
        {
          item: 'minecraft:bamboo',
        },
        {
          item: 'minecraft:carrot',
        },
        {
          item: 'farmersdelight:onion',
        },
      ],
      recipe_book_tab: 'meals',
      result: {
        item: 'bamboodelight:bamboo_stew',
      },
    })
    .id('last_engineer:bamboo_stew');
});
