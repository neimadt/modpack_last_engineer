if (Platform.isLoaded('jaopca')) {
  ServerEvents.tags('item', (event) => {
    const itemsToBeHidden = [
      'jaopca:theurgy.alchemical_sulfurs.arcane_crystal',
      'jaopca:storage_blocks.demonite',
      'jaopca:theurgy_alchemical_sulfurs.hellforged',
      'jaopca:theurgy_alchemical_sulfurs.iesnium',
      'jaopca:theurgy_alchemical_sulfurs.aluminum',
      'jaopca:theurgy_alchemical_sulfurs.certus_quartz',
    ];

    for (const itemId of itemsToBeHidden) {
      event.add('c:hidden_from_recipe_viewers', itemId);
    }
  });

  ServerEvents.recipes((event) => {
    const recipesToRemoveFromId = [
      'jaopca:storage_blocks.to_storage_block.demonite',
      'jaopca:theurgy.alchemical_sulfur_to_material.arcane_crystal',
      'jaopca:theurgy.ore_to_alchemical_sulfur.arcane_crystal',
      'jaopca:theurgy.material_to_alchemical_sulfur.arcane_crystal',
      'jaopca:theurgy.alchemical_sulfur_to_material.hellforged',
      'jaopca:theurgy.material_to_alchemical_sulfur.hellforged',
      'jaopca:theurgy.ore_to_alchemical_sulfur.hellforged',
      'jaopca:theurgy.raw_material_to_alchemical_sulfur.hellforged',
      'jaopca:theurgy.alchemical_sulfur_to_material.iesnium',
      'jaopca:theurgy.material_to_alchemical_sulfur.iesnium',
      'jaopca:theurgy.ore_to_alchemical_sulfur.iesnium',
      'jaopca:theurgy.raw_material_to_alchemical_sulfur.iesnium',
      'jaopca:theurgy.alchemical_sulfur_to_material.aluminum',
      'jaopca:theurgy.material_to_alchemical_sulfur.aluminum',
      'jaopca:theurgy.ore_to_alchemical_sulfur.aluminum',
      'jaopca:theurgy.raw_material_to_alchemical_sulfur.aluminum',
      'jaopca:theurgy.alchemical_sulfur_to_material.certus_quartz',
      'jaopca:theurgy.material_to_alchemical_sulfur.certus_quartz',
    ];

    for (const recipeId of recipesToRemoveFromId) {
      event.remove({ id: recipeId });
    }
  });
}
