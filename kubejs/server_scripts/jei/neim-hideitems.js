const itemsToBeHidden = [
  {
    id: 'integrateddynamics:coal_generator',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integrateddynamics'),
  },
  {
    id: 'integrateddynamics:energy_battery',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integrateddynamics'),
  },
  {
    id: 'heroes:injector',
    removeRecipe: true,
    verify: () => Platform.isLoaded('heroes'),
  },
  {
    id: 'create_sa:brass_jetpack_chestplate',
    removeRecipe: true,
    verify: () => Platform.isLoaded('create_sa'),
  },
  {
    id: 'create_sa:andesite_jetpack_chestplate',
    removeRecipe: true,
    verify: () => Platform.isLoaded('create_sa'),
  },
  {
    id: 'create_sa:copper_jetpack_chestplate',
    removeRecipe: true,
    verify: () => Platform.isLoaded('create_sa'),
  },
  {
    id: 'create_sa:netherite_jetpack_chestplate',
    removeRecipe: true,
    verify: () => Platform.isLoaded('create_sa'),
  },
  {
    id: 'easy_villagers:iron_farm',
    removeRecipe: true,
    verify: () => Platform.isLoaded('easy_villagers'),
  },
  {
    id: 'easy_villagers:farmer',
    removeRecipe: true,
    verify: () => Platform.isLoaded('easy_villagers'),
  },
  {
    id: 'integrateddynamics:part_fluid_reader',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integrateddynamics'),
  },
  {
    id: 'integratedtunnels:part_interface_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
  {
    id: 'integratedtunnels:part_interface_filter_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
  {
    id: 'integratedtunnels:part_importer_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
  {
    id: 'integratedtunnels:part_exporter_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
  {
    id: 'integratedtunnels:part_importer_world_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
  {
    id: 'integratedtunnels:part_exporter_world_fluid',
    removeRecipe: true,
    verify: () => Platform.isLoaded('integratedtunnels'),
  },
];

ServerEvents.tags('item', (event) => {
  for (const item of itemsToBeHidden) {
    if (item && item.id && (!item.verify || item.verify())) {
      event.add('c:hidden_from_recipe_viewers', item.id);
    }
  }
});

ServerEvents.recipes((event) => {
  for (const item of itemsToBeHidden) {
    if (
      item &&
      item.id &&
      item.removeRecipe &&
      (!item.verify || item.verify())
    ) {
      if (item.removeRecipe.output) {
        event.remove({ output: item.removeRecipe.output });
      } else if (item.removeRecipe.id) {
        const ids = Array.isArray(item.removeRecipe.id)
          ? item.removeRecipe.id
          : [item.removeRecipe.id];

        for (const recipeId of ids) {
          event.remove({ id: recipeId });
        }
      } else {
        event.remove({ output: item.id });
      }
    }
  }
});
