ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('heroes')) return;

  event.remove({ output: 'heroes:compound_alx' });

  if (Platform.isLoaded('powah')) {
    event
      .custom({
        type: 'powah:energizing',
        ingredients: [
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:nautilus_shell',
          },
          {
            item: 'minecraft:honeycomb',
          },
          {
            item: 'theurgy:alchemical_sulfur_copper',
          },
          { item: 'hexerei:blood_bottle' },
        ],
        energy: 50000,
        result: {
          item: 'heroes:compound_alx',
          count: 1,
        },
      })
      .id('last_engineer:heroes/energizing/compound_alx');
  } else {
    event
      .custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
          {
            item: 'minecraft:nautilus_shell',
          },
          {
            item: 'minecraft:honeycomb',
          },
          {
            item: 'theurgy:alchemical_sulfur_metals_precious',
          },
          { item: 'hexerei:blood_bottle' },
          {
            amount: 5000,
            fluid: 'minecraft:lava',
            nbt: {},
          },
        ],
        results: [
          {
            item: 'heroes:compound_alx',
          },
        ],
      })
      .id('last_engineer:heroes/mixing/compound_alx');
  }

  event.remove({ output: 'heroes:formula_vial' });
  if (Platform.isLoaded('hexerei')) {
    const fluid = Platform.isLoaded('create_enchantment_industry')
      ? 'create_enchantment_industry:experience'
      : 'minecraft:water';

    event
      .custom({
        type: 'hexerei:mixingcauldron',
        liquid: {
          fluid: fluid,
        },
        ingredients: [
          {
            item: 'theurgy:alchemical_sulfur_metals_rare',
          },
          {
            item: 'palladium:redstone_flux_crystal',
          },
          {
            item: 'palladium:redstone_flux_crystal',
          },
          {
            item: 'heroes:compound_alx_vial',
          },
        ],
        output: {
          item: 'heroes:formula_vial',
        },

        liquidOutput: {
          fluid: fluid,
        },
        fluidLevelsConsumed: 1500,
      })
      .id('last_engineer:heroes/formula_vial');
  } else {
    event
      .custom({
        type: 'theurgy:fermentation',
        fluid: {
          tag: 'minecraft:water',
        },
        fluidAmount: 1000,
        ingredients: [
          {
            item: 'theurgy:alchemical_sulfur_metals_rare',
          },
          {
            item: 'palladium:redstone_flux_crystal',
          },
          {
            item: 'palladium:redstone_flux_crystal',
          },
          {
            item: 'heroes:compound_alx_vial',
          },
        ],
        result: {
          count: 1,
          id: 'heroes:formula_vial',
        },
        time: 6000,
      })
      .id('last_engineer:heroes/formula_vial');
  }

  event.remove({ output: 'heroes:catalyst_vial' });
  event
    .custom({
      type: 'bloodmagic:alchemytable',
      input: [
        { item: 'heroes:compound_alx' },
        { item: 'heroes:compound_alx' },
        { item: 'forbidden_arcanus:arcane_crystal_block' },
        { item: 'minecraft:wither_rose' },
        { item: 'minecraft:golden_apple' },
        { item: 'bloodmagic:reagentbinding' },
      ],
      output: { item: 'heroes:catalyst_vial' },
      syphon: 5000,
      ticks: 400,
      upgradeLevel: 2,
    })
    .id('last_engineer:heroes/catalyst_vial_blood_magic');

  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:execute_command',
      activation_item: {
        item: 'occultism:book_of_binding_bound_djinni',
      },
      pentacle_id: 'occultism:possess_foliot',
      duration: 400,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/custom_ritual',
      },
      entity_to_sacrifice: {
        tag: 'forge:cows',
        display_name: 'ritual.occultism.sacrifice.cows',
      },
      ingredients: [
        { item: 'heroes:catalyst_vial' },
        {
          item: 'minecraft:enchanted_golden_apple',
        },
        { item: 'occultism:spirit_attuned_gem' },
        { item: 'forbidden_arcanus:dark_rune' },
        { item: 'minecraft:wither_rose' },
      ],
      result: {
        item: 'occultism:jei_dummy/none',
      },
      command: 'execute run heroes @p catalyst 1',
    })
    .id('last_engineer:heroes/catalyst_ritual');

  event
    .custom({
      type: 'occultism:ritual',
      ritual_type: 'occultism:execute_command',
      activation_item: {
        item: 'occultism:book_of_binding_bound_djinni',
      },
      pentacle_id: 'occultism:possess_djinni',
      duration: 300,
      ritual_dummy: {
        item: 'occultism:ritual_dummy/custom_ritual',
      },
      entity_to_sacrifice: {
        tag: 'forge:cows',
        display_name: 'ritual.occultism.sacrifice.cows',
      },
      ingredients: [
        { item: 'heroes:catalyzed_formula_vial' },
        { item: 'minecraft:diamond' },
        { item: 'minecraft:ghast_tear' },
        { item: 'minecraft:netherite_ingot' },
      ],
      result: {
        item: 'occultism:jei_dummy/none',
      },
      command: 'execute run tag @p add Heroes.Power.Randomize',
    })
    .id('last_engineer:heroes/catalyzed_formula_vial_ritual');
});
