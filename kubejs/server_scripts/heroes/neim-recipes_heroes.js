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
            item: 'theurgy:alchemical_sulfur_metals_precious',
          },
          { item: 'hexerei:blood_bottle' },
        ],
        energy: 10000000,
        result: {
          item: 'heroes:compound_alx',
          count: 1,
        },
      })
      .replaceIngredient('minecraft:lava_bucket', 'minecraft:bucket')
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
            amount: 1000,
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

  event.remove({ output: 'heroes:compound_alx_vial' });
  event
    .custom({
      type: 'hexerei:mixingcauldron',
      liquid: {
        fluid: 'create_enchantment_industry:experience',
      },
      ingredients: [
        { item: 'heroes:compound_alx' },
        { item: 'heroes:compound_alx' },
        { item: 'forbidden_arcanus:arcane_crystal_block' },
        { item: 'minecraft:wither_rose' },
        { item: 'minecraft:golden_apple' },
        { item: 'bloodmagic:reagentbinding' },
        { item: 'minecraft:glass_bottle' },
      ],
      output: {
        item: 'heroes:compound_alx_vial',
      },
      liquidOutput: {
        fluid: 'create_enchantment_industry:experience',
      },
      fluidLevelsConsumed: 250,
      heatRequirement: 'heated',
    })
    .id('last_engineer:heroes/mixingcauldron/compound_alx_vial');

  event.remove({ output: 'heroes:injector' });
  event
    .shaped(Item.of('heroes:injector', 1), ['SPS', ' C ', ' R '], {
      R: 'immersiveengineering:stick_steel',
      S: 'pneumaticcraft:plastic',
      P: 'create:precision_mechanism',
      C: 'pneumaticcraft:capacitor',
    })
    .id('last_engineer:heroes/injector');

  event.remove({ output: 'heroes:erasure_pill' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      pattern: [' X ', 'iIT', ' P '],
      key: {
        i: {
          item: 'minecraft:fermented_spider_eye',
        },
        P: {
          item: 'minecraft:magma_cream',
        },
        I: {
          item: 'minecraft:sculk',
        },
        X: {
          item: 'minecraft:ghast_tear',
        },
        T: {
          item: 'minecraft:phantom_membrane',
        },
      },
      result: {
        item: 'heroes:erasure_pill',
        count: 1,
      },
    })
    .id('last_engineer:heroes/erasure_pill');
});
