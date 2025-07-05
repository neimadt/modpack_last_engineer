ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('hostilenetworks')) return;

  // --- Deep Learner ---
  event.remove({ output: 'hostilenetworks:deep_learner' });
  event
    .shaped('hostilenetworks:deep_learner', ['OGE', 'SRS', 'EGO'], {
      E: 'forbidden_arcanus:arcane_crystal',
      G: 'ae2:calculation_processor',
      S: 'occultism:spirit_attuned_gem',
      R: 'bloodmagic:reagentvoid',
      O: '#forge:obsidian',
    })
    .id('last_engineer:hostilenetworks/deep_learner');

  // --- Blank Data Model ---
  event.remove({ output: 'hostilenetworks:blank_data_model' });
  event
    .shaped('hostilenetworks:blank_data_model', ['SDS', 'AQA', 'SDS'], {
      A: 'forbidden_arcanus:arcane_crystal_dust',
      D: 'ae2:logic_processor',
      Q: 'ae2:charged_certus_quartz_crystal',
      S: 'ae2:silicon',
    })
    .id('last_engineer:hostilenetworks/blank_data_model');

  // --- Simulation Chamber ---
  event.remove({ output: 'hostilenetworks:sim_chamber' });
  event
    .shaped('hostilenetworks:sim_chamber', ['PFP', 'DCD', 'GPG'], {
      P: 'integrateddynamics:crystalized_menril_block',
      F: 'forbidden_arcanus:xpetrified_orb',
      D: 'hostilenetworks:blank_data_model',
      C: 'create:brass_casing',
      G: 'occultism:spirit_attuned_gem',
    })
    .id('last_engineer:hostilenetworks/sim_chamber');

  // --- Loot Fabricator ---
  event.remove({ output: 'hostilenetworks:loot_fabricator' });
  event
    .shaped('hostilenetworks:loot_fabricator', ['LRL', 'BCB', 'NDN'], {
      L: 'bloodmagic:reagentbinding',
      R: 'bloodmagic:reagentsuppression',
      B: 'ae2:engineering_processor',
      C: 'integrateddynamics:variable_transformer_input',
      N: 'minecraft:netherite_scrap',
      D: 'forbidden_arcanus:dark_matter',
    })
    .id('last_engineer:hostilenetworks/loot_fabricator');

  // Future expansion: add custom alchemy table recipes or occultism spirit fire transformations
});
