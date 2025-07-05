const handleRecipe = (event, args) => {
  const {
    id,
    material,
    materialOre,
    sulfur,
    liquefaction_time,
    solvent_amount,
    reformationSource,
    reformationSources,
  } = args;

  event
    .custom({
      type: 'theurgy:liquefaction',
      ingredient: {
        item: material,
      },
      liquefaction_time: liquefaction_time,
      result: {
        count: 1,
        item: sulfur,
        nbt: {
          'theurgy:sulfur.source.id': material,
        },
      },
      solvent: {
        fluid: 'theurgy:sal_ammoniac',
      },
      solvent_amount: solvent_amount,
    })
    .id(`last_engineer:theurgy/liquefaction/${id}`);

  if (materialOre) {
    materialOre = Array.isArray(materialOre) ? materialOre : [materialOre];

    let index = 0;

    for (const m of materialOre) {
      index += 1;

      const ingredient = m.id ? { item: m.id } : m.tag ? { tag: m.tag } : null;

      if (!ingredient) continue;

      event
        .custom({
          type: 'theurgy:liquefaction',
          ingredient: ingredient,
          liquefaction_time: liquefaction_time,
          result: {
            count: m.count,
            item: sulfur,
            nbt: {
              'theurgy:sulfur.source.id': m.tag || m.id,
            },
          },
          solvent: {
            fluid: 'theurgy:sal_ammoniac',
          },
          solvent_amount: solvent_amount,
        })
        .id(`last_engineer:theurgy/liquefaction/ore-${index}-${id}`);
    }
  }

  event
    .custom({
      type: 'theurgy:incubation',
      incubation_time: 100,
      mercury: {
        item: 'theurgy:mercury_shard',
      },
      result: {
        count: 1,
        item: material,
      },
      salt: {
        item: 'theurgy:alchemical_salt_mineral',
      },
      sulfur: {
        item: sulfur,
      },
    })
    .id(`last_engineer:theurgy/incubation/${id}`);

  if (reformationSource) {
    event
      .custom({
        type: 'theurgy:reformation',
        mercury_flux: reformationSource.flux,
        reformation_time: reformationSource.time,
        result: {
          Count: 1,
          id: sulfur,
        },
        sources: reformationSource.sulfur,
        target: {
          item: sulfur,
        },
      })
      .id(`last_engineer:theurgy/reformation-sulfur/${id}`);
  }

  if (reformationSources) {
    event
      .custom({
        type: 'theurgy:reformation',
        mercury_flux: reformationSources.flux,
        reformation_time: reformationSources.time,
        result: {
          Count: 1,
          id: sulfur,
        },
        sources: reformationSources.sulfur,
        target: {
          item: sulfur,
        },
      })
      .id(`last_engineer:theurgy/reformation-sulfurs/${id}`);
  }
};

ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('theurgy')) return;

  handleRecipe(event, {
    id: 'stellarite_piece',
    material: 'forbidden_arcanus:stellarite_piece',
    sulfur: 'kubejs:stellarite_sulfur',
    liquefaction_time: 100,
    solvent_amount: 100,
    reformationSource: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_metals_precious',
        },
      ],
    },
    reformationSources: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/metals/precious',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'arcane_crystal',
    material: 'forbidden_arcanus:arcane_crystal',
    materialOre: [
      { id: 'forbidden_arcanus:arcane_crystal_ore', count: 4 },
      { id: 'forbidden_arcanus:deepslate_arcane_crystal_ore', count: 4 },
    ],
    sulfur: 'kubejs:arcane_crystal_sulfur',
    liquefaction_time: 100,
    solvent_amount: 15,
    reformationSource: {
      flux: 150,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_gems_rare',
        },
      ],
    },
    reformationSources: {
      flux: 150,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/gems/rare',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'rune',
    material: 'forbidden_arcanus:rune',
    materialOre: [
      { id: 'forbidden_arcanus:runic_stone', count: 4 },
      { id: 'forbidden_arcanus:runic_deepslate', count: 4 },
      { id: 'forbidden_arcanus:runic_darkstone', count: 4 },
    ],
    sulfur: 'kubejs:rune_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
    reformationSource: {
      flux: 100,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_metals_common',
        },
      ],
    },
    reformationSources: {
      flux: 100,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/metals/common',
        },
      ],
    },
  });

  if (Platform.isLoaded('powah')) {
    handleRecipe(event, {
      id: 'uraninite',
      material: 'powah:uraninite',
      materialOre: [
        { id: 'powah:deepslate_uraninite_ore_poor', count: 2 },
        { id: 'powah:uraninite_raw', count: 3 },
        { id: 'powah:deepslate_uraninite_ore', count: 4 },
        { id: 'powah:deepslate_uraninite_ore_dense', count: 6 },
      ],
      sulfur: 'kubejs:uraninite_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
      reformationSource: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            item: 'theurgy:alchemical_sulfur_metals_rare',
          },
        ],
      },
      reformationSources: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            tag: 'theurgy:alchemical_sulfurs/metals/rare',
          },
        ],
      },
    });
  }

  handleRecipe(event, {
    id: 'nautilus_shell',
    material: 'minecraft:nautilus_shell',
    sulfur: 'kubejs:nautilus_shell_sulfur',
    liquefaction_time: 100,
    solvent_amount: 100,
    reformationSource: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_precious',
        },
      ],
    },
    reformationSources: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/other_minerals/precious',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'ender_pearl',
    material: 'minecraft:ender_pearl',
    sulfur: 'kubejs:ender_pearl_sulfur',
    liquefaction_time: 100,
    solvent_amount: 15,
    reformationSource: {
      flux: 150,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_gems_rare',
        },
      ],
    },
    reformationSources: {
      flux: 150,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/gems/rare',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'andesite',
    material: 'minecraft:andesite',
    sulfur: 'kubejs:andesite_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
    reformationSource: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_abundant',
        },
      ],
    },
    reformationSources: {
      flux: 50,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/other_minerals/abundant',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'cobblestone',
    material: 'minecraft:cobblestone',
    sulfur: 'kubejs:cobblestone_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
    reformationSource: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_abundant',
        },
      ],
    },
    reformationSources: {
      flux: 50,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/other_minerals/abundant',
        },
      ],
    },
  });

  handleRecipe(event, {
    id: 'diorite',
    material: 'minecraft:diorite',
    sulfur: 'kubejs:diorite_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
    reformationSource: {
      flux: 200,
      time: 100,
      sulfur: [
        {
          item: 'theurgy:alchemical_sulfur_other_minerals_abundant',
        },
      ],
    },
    reformationSources: {
      flux: 50,
      time: 100,
      sulfur: [
        {
          tag: 'theurgy:alchemical_sulfurs/other_minerals/abundant',
        },
      ],
    },
  });

  if (Platform.isLoaded('immersiveengineering')) {
    handleRecipe(event, {
      id: 'aluminum',
      material: 'immersiveengineering:ingot_aluminum',
      materialOre: [
        { id: 'immersiveengineering:raw_aluminum', count: 3 },
        { tag: 'forge:ores/aluminum', count: 5 },
      ],
      sulfur: 'kubejs:aluminum_sulfur',
      liquefaction_time: 100,
      solvent_amount: 10,
      reformationSource: {
        flux: 100,
        time: 100,
        sulfur: [
          {
            item: 'theurgy:alchemical_sulfur_metals_common',
          },
        ],
      },
      reformationSources: {
        flux: 100,
        time: 100,
        sulfur: [
          {
            tag: 'theurgy:alchemical_sulfurs/metals/common',
          },
        ],
      },
    });
  }

  if (Platform.isLoaded('palladium')) {
    handleRecipe(event, {
      id: 'redstone_flux_crystal',
      material: 'palladium:redstone_flux_crystal',
      materialOre: [
        { id: 'palladium:redstone_flux_crystal_geode', count: 4 },
        { id: 'palladium:deepslate_redstone_flux_crystal_geode', count: 4 },
      ],
      sulfur: 'kubejs:redstone_flux_crystal_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
      reformationSource: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            item: 'theurgy:alchemical_sulfur_gems_rare',
          },
        ],
      },
      reformationSources: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            tag: 'theurgy:alchemical_sulfurs/gems/rare',
          },
        ],
      },
    });
  }
});
