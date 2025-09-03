const itemsToBeHidden = [
  // {
  //   id: 'integrateddynamics:coal_generator',
  //   removeRecipe: true,
  //   verify: () => Platform.isLoaded('integrateddynamics'),
  // },
  // {
  //   id: 'integrateddynamics:energy_battery',
  //   removeRecipe: true,
  //   verify: () => Platform.isLoaded('integrateddynamics'),
  // },
  {
    id: 'mob_grinding_utils:nutricious_chicken_feed',
    removeRecipe: true,
    verify: () => Platform.isLoaded('mob_grinding_utils'),
  },
  {
    id: 'mob_grinding_utils:gm_chicken_feed_cursed',
    removeRecipe: true,
    verify: () => Platform.isLoaded('mob_grinding_utils'),
  },
  {
    id: 'pylons:potion_filter',
    removeRecipe: true,
    verify: () => Platform.isLoaded('pylons'),
  },
  {
    id: 'pylons:infusion_pylon',
    removeRecipe: true,
    verify: () => Platform.isLoaded('pylons'),
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
  {
    id: 'rustic_engineer:iron_plate',
    removeRecipe: true,
    verify: () => Platform.isLoaded('rustic_engineer'),
  },
  {
    id: 'rustic_engineer:rustic_hammer',
    removeRecipe: true,
    verify: () => Platform.isLoaded('rustic_engineer'),
  },
  {
    id: 'rustic_engineer:iron_placed',
    removeRecipe: true,
    verify: () => Platform.isLoaded('rustic_engineer'),
  },
  {
    id: 'rustic_engineer:iron_plate_placed',
    removeRecipe: true,
    verify: () => Platform.isLoaded('rustic_engineer'),
  },
  {
    id: 'ironfurnaces:augment_generator',
    removeRecipe: true,
    verify: () => Platform.isLoaded('ironfurnaces'),
  },
  {
    id: 'aeinfinitybooster:dimension_card',
    removeRecipe: true,
    verify: () => Platform.isLoaded('aeinfinitybooster'),
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
