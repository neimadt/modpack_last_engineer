const handleRecipe = (event, args) => {
  const {
    id,
    material,
    resultCount,
    incubationResult,
    sulfur,
    liquefaction_time,
    solvent_amount,
    reformationSource,
    reformationSources,
  } = args;

  event
    .custom({
      type: 'theurgy:liquefaction',
      ingredient: material.tag ? { tag: material.tag } : { item: material },
      liquefaction_time: liquefaction_time,
      result: {
        count: resultCount > 0 ? resultCount : 1,
        item: sulfur,
        nbt: {
          'theurgy:sulfur.source.id': material.tag ? material.tag : material,
        },
      },
      solvent: {
        fluid: 'theurgy:sal_ammoniac',
      },
      solvent_amount: solvent_amount,
    })
    .id(`last_engineer:theurgy/liquefaction/${id}`);

  if (incubationResult !== false) {
    event
      .custom({
        type: 'theurgy:incubation',
        incubation_time: 100,
        mercury: {
          item: 'theurgy:mercury_shard',
        },
        result: {
          count: 1,
          item: incubationResult || material,
        },
        salt: {
          item: 'theurgy:alchemical_salt_mineral',
        },
        sulfur: {
          item: sulfur,
        },
      })
      .id(`last_engineer:theurgy/incubation/${id}`);
  }

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
    id: 'arcane_crystal_ore',
    material: 'forbidden_arcanus:arcane_crystal_ore',
    incubationResult: false,
    resultCount: 4,
    sulfur: 'kubejs:arcane_crystal_sulfur',
    liquefaction_time: 100,
    solvent_amount: 15,
  });

  handleRecipe(event, {
    id: 'deepslate_arcane_crystal_ore',
    material: 'forbidden_arcanus:deepslate_arcane_crystal_ore',
    incubationResult: false,
    resultCount: 4,
    sulfur: 'kubejs:arcane_crystal_sulfur',
    liquefaction_time: 100,
    solvent_amount: 15,
  });

  handleRecipe(event, {
    id: 'rune',
    material: 'forbidden_arcanus:rune',
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

  handleRecipe(event, {
    id: 'runic_stone',
    resultCount: 4,
    material: 'forbidden_arcanus:runic_stone',
    sulfur: 'kubejs:rune_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
  });

  handleRecipe(event, {
    id: 'runic_deepslate',
    resultCount: 4,
    material: 'forbidden_arcanus:runic_deepslate',
    sulfur: 'kubejs:rune_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
  });

  handleRecipe(event, {
    id: 'runic_darkstone',
    resultCount: 4,
    material: 'forbidden_arcanus:runic_darkstone',
    sulfur: 'kubejs:rune_sulfur',
    liquefaction_time: 100,
    solvent_amount: 10,
  });

  if (Platform.isLoaded('powah')) {
    handleRecipe(event, {
      id: 'uraninite',
      material: 'powah:uraninite',
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

    handleRecipe(event, {
      id: 'deepslate_uraninite_ore_poor',
      resultCount: 2,
      material: 'powah:deepslate_uraninite_ore_poor',
      sulfur: 'kubejs:uraninite_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
    });

    handleRecipe(event, {
      id: 'uraninite_raw',
      resultCount: 3,
      material: 'powah:uraninite_raw',
      sulfur: 'kubejs:uraninite_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
    });

    handleRecipe(event, {
      id: 'deepslate_uraninite_ore',
      resultCount: 4,
      material: 'powah:deepslate_uraninite_ore',
      sulfur: 'kubejs:uraninite_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
    });

    handleRecipe(event, {
      id: 'deepslate_uraninite_ore_dense',
      resultCount: 6,
      material: 'powah:deepslate_uraninite_ore_dense',
      sulfur: 'kubejs:uraninite_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
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

    handleRecipe(event, {
      id: 'raw_aluminum',
      material: 'immersiveengineering:raw_aluminum',
      resultCount: 3,
      sulfur: 'kubejs:aluminum_sulfur',
      liquefaction_time: 100,
      solvent_amount: 10,
    });

    handleRecipe(event, {
      id: 'tag/ores/aluminum',
      material: { tag: 'forge:ores/aluminum' },
      resultCount: 5,
      sulfur: 'kubejs:aluminum_sulfur',
      liquefaction_time: 100,
      solvent_amount: 10,
    });
  }

  if (Platform.isLoaded('palladium')) {
    handleRecipe(event, {
      id: 'redstone_flux_crystal',
      material: 'palladium:redstone_flux_crystal',
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

    handleRecipe(event, {
      id: 'redstone_flux_crystal_geode',
      material: 'palladium:redstone_flux_crystal_geode',
      resultCount: 4,
      sulfur: 'kubejs:redstone_flux_crystal_sulfur',
      liquefaction_time: 100,
      solvent_amount: 10,
    });

    handleRecipe(event, {
      id: 'deepslate_redstone_flux_crystal_geode',
      material: 'palladium:deepslate_redstone_flux_crystal_geode',
      resultCount: 4,
      sulfur: 'kubejs:redstone_flux_crystal_sulfur',
      liquefaction_time: 100,
      solvent_amount: 10,
    });
  }

  if (Platform.isLoaded('dungeons_and_combat')) {
    handleRecipe(event, {
      id: 'dungeons_and_combat_silver',
      material: 'dungeons_and_combat:silver_ingot',
      incubationResult: false,
      sulfur: 'theurgy:alchemical_sulfur_silver',
      liquefaction_time: 100,
      solvent_amount: 10,
    });

    handleRecipe(event, {
      id: 'dungeons_and_combat_raw_silver',
      material: 'dungeons_and_combat:raw_silver',
      incubationResult: false,
      resultCount: 3,
      sulfur: 'theurgy:alchemical_sulfur_silver',
      liquefaction_time: 100,
      solvent_amount: 10,
    });

    handleRecipe(event, {
      id: 'dungeons_and_combat_silver_ore',
      material: 'dungeons_and_combat:silver_ore',
      incubationResult: false,
      resultCount: 4,
      sulfur: 'theurgy:alchemical_sulfur_silver',
      liquefaction_time: 100,
      solvent_amount: 10,
    });

    handleRecipe(event, {
      id: 'dungeons_and_combat_silver_deepslate_ore',
      material: 'dungeons_and_combat:silver_deepslate_ore',
      incubationResult: false,
      resultCount: 4,
      sulfur: 'theurgy:alchemical_sulfur_silver',
      liquefaction_time: 100,
      solvent_amount: 10,
    });
  }

  event
    .custom({
      type: 'theurgy:liquefaction',
      ingredient: {
        item: 'minecraft:smooth_quartz',
      },
      liquefaction_time: 500,
      result: {
        count: 1,
        item: 'minecraft:quartz_block',
      },
      solvent: {
        fluid: 'theurgy:sal_ammoniac',
      },
      solvent_amount: 500,
    })
    .id('last_engineer:theurgy/liquefaction/quartz_block');

  if (Platform.isLoaded('dungeons_and_combat')) {
    handleRecipe(event, {
      id: 'dark_metal_ingot',
      material: 'born_in_chaos_v1:dark_metal_ingot',
      sulfur: 'kubejs:dark_metal_ingot_sulfur',
      liquefaction_time: 100,
      solvent_amount: 15,
      reformationSource: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            item: 'theurgy:alchemical_sulfur_metals_precious',
          },
        ],
      },
      reformationSources: {
        flux: 150,
        time: 100,
        sulfur: [
          {
            tag: 'theurgy:alchemical_sulfurs/metals/precious',
          },
        ],
      },
    });
  }
});
