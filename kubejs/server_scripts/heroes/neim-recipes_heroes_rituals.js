ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('heroes')) return;

  event.remove({ output: 'heroes:formula_vial' });
  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:craft',
      activation_item: {
        item: 'occultism:book_of_binding_bound_djinni',
      },
      pentacle_id: 'occultism:possess_foliot',
      duration: 20,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/custom_ritual',
      },
      ingredients: [
        { item: 'heroes:compound_alx_vial' },
        { item: 'minecraft:enchanted_golden_apple' },
        { item: 'occultism:spirit_attuned_gem' },
        { item: 'forbidden_arcanus:dark_rune' },
        { item: 'minecraft:wither_rose' },
      ],
      result: {
        item: 'heroes:formula_vial',
      },
    })
    .id('last_engineer:heroes/ritual/formula_vial');

  event.remove({ output: 'heroes:catalyst_vial' });
  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:craft',
      activation_item: {
        item: 'occultism:book_of_binding_bound_djinni',
      },
      pentacle_id: 'occultism:possess_djinni',
      duration: 20,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/custom_ritual',
      },
      ingredients: [
        { item: 'heroes:compound_alx_vial' },
        { item: 'minecraft:diamond' },
        { item: 'minecraft:ghast_tear' },
        { item: 'minecraft:netherite_ingot' },
      ],
      result: {
        item: 'heroes:catalyst_vial',
      },
    })
    .id('last_engineer:heroes/ritual/catalyst_vial');
});
