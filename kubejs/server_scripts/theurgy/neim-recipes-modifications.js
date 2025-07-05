ServerEvents.recipes((event) => {
  event.remove({
    id: 'theurgy:calcination/mineral',
  });
  event
    .custom({
      type: 'theurgy:calcination',
      calcination_time: 100,
      ingredient: {
        item: 'theurgy:alchemical_salt_strata',
      },
      ingredient_count: 5,
      result: {
        count: 1,
        item: 'theurgy:alchemical_salt_mineral',
      },
    })
    .id('last_engineer:theurgy/calcination/mineral');

  event.remove({
    id: 'theurgy:incubation/ingots_copper_from_alchemical_sulfur_copper',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:copper_ingot',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_copper',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/ingots_copper_from_alchemical_sulfur_copper'
    );

  event.remove({
    id: 'theurgy:incubation/gems_diamond_from_alchemical_sulfur_diamond',
  });

  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:diamond',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_diamond',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/gems_diamond_from_alchemical_sulfur_diamond'
    );

  event
    .custom({
      type: 'theurgy:distillation',
      distillation_time: 100,
      ingredient: {
        item: 'minecraft:sugar_cane',
      },
      ingredient_count: 3,
      result: {
        count: 1,
        item: 'theurgy:mercury_shard',
      },
    })
    .id('last_engineer:theurgy/distillation/mercury_shard_sugar_cane');

  event
    .custom({
      type: 'theurgy:distillation',
      distillation_time: 100,
      ingredient: {
        item: 'minecraft:bamboo',
      },
      ingredient_count: 3,
      result: {
        count: 1,
        item: 'theurgy:mercury_shard',
      },
    })
    .id('last_engineer:theurgy/distillation/mercury_shard_bamboo');

  event
    .custom({
      type: 'theurgy:distillation',
      distillation_time: 100,
      ingredient: {
        item: 'minecraft:cactus',
      },
      ingredient_count: 3,
      result: {
        count: 1,
        item: 'theurgy:mercury_shard',
      },
    })
    .id('last_engineer:theurgy/distillation/mercury_shard_cactus');

  event.remove({
    id: 'theurgy:reformation/alchemical_sulfur_gems_common_from_alchemical_sulfur_other_minerals_common',
  });

  event
    .custom({
      type: 'theurgy:reformation',
      mercury_flux: 100,
      reformation_time: 100,
      result: {
        Count: 1,
        id: 'theurgy:alchemical_sulfur_gems_common',
      },
      sources: [
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_common',
        },
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_common',
        },
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_common',
        },
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_common',
        },
      ],
      target: {
        item: 'theurgy:alchemical_sulfur_gems_common',
      },
    })
    .id(
      'last_engineer:theurgy/reformation/alchemical_sulfur_gems_common_from_alchemical_sulfur_other_minerals_common'
    );

  event.remove({
    id: 'theurgy:incubation/ingots_zinc_from_alchemical_sulfur_zinc',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'create:zinc_ingot',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_zinc',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/ingots_zinc_from_alchemical_sulfur_zinc'
    );

  event.remove({
    id: 'theurgy:incubation/ingots_iron_from_alchemical_sulfur_iron',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:iron_ingot',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_iron',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/ingots_iron_from_alchemical_sulfur_iron'
    );

  event.remove({
    id: 'theurgy:incubation/ingots_gold_from_alchemical_sulfur_gold',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:gold_ingot',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_gold',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/ingots_gold_from_alchemical_sulfur_gold'
    );

  event.remove({
    id: 'theurgy:incubation/coals_from_alchemical_sulfur_coal',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:coal',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_coal',
      },
    })
    .id('last_engineer:theurgy/incubation/coals_from_alchemical_sulfur_coal');

  event.remove({
    id: 'theurgy:incubation/dusts_redstone_from_alchemical_sulfur_redstone',
  });
  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: 'minecraft:redstone',
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: 'theurgy:alchemical_sulfur_redstone',
      },
    })
    .id(
      'last_engineer:theurgy/incubation/dusts_redstone_from_alchemical_sulfur_redstone'
    );
});
