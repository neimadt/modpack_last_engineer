ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('mekanism')) return;

  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event
    .shaped('mekanism:metallurgic_infuser', ['BFP', 'COC', 'PFB'], {
      B: 'create:brass_sheet',
      P: 'pneumaticcraft:ingot_iron_compressed',
      C: 'bloodmagic:reagentbinding',
      O: 'mekanism:ingot_osmium',
      F: 'minecraft:furnace',
    })
    .id('kubejs:mekanism/metallurgic_infuser');

  event.remove({ output: 'mekanism:crusher' });
  event
    .shaped('mekanism:crusher', ['IBS', 'LCL', 'SBI'], {
      I: 'occultism:spirit_attuned_gem',
      B: 'mekanism:basic_control_circuit',
      C: 'mekanism:steel_casing',
      S: 'create:brass_sheet',
      L: 'bloodmagic:reagentlava',
    })
    .id('kubejs:mekanism/crusher');

  event
    .custom({
      type: 'mekanism:metallurgic_infusing',
      chemicalInput: {
        amount: 10,
        tag: 'mekanism:redstone',
      },
      itemInput: {
        ingredient: {
          tag: 'forge:ingots/copper',
        },
      },
      output: {
        item: 'mekanism:alloy_infused',
      },
    })
    .id('mekanism:metallurgic_infusing/alloy/infused');

  event.remove({ output: 'mekanism:enrichment_chamber' });
  event
    .shaped('mekanism:enrichment_chamber', ['TGP', 'CBC', 'PAT'], {
      C: 'mekanism:basic_control_circuit',
      G: 'occultism:otherworld_sapling',
      A: 'create:andesite_alloy',
      P: 'pneumaticcraft:capacitor',
      T: 'theurgy:alchemical_sulfur_iron',
      B: 'mekanism:steel_casing',
    })
    .id('kubejs:mekanism/enrichment_chamber');

  event.remove({ output: 'mekanism:electrolytic_separator' });
  event
    .shaped('mekanism:electrolytic_separator', ['CWC', 'ESE', 'PRP'], {
      W: 'bloodmagic:reagentwater',
      R: 'bloodmagic:reagentbinding',
      C: 'mekanism:basic_control_circuit',
      E: 'create:electron_tube',
      S: 'mekanism:steel_casing',
      P: 'powah:dielectric_paste',
    })
    .id('kubejs:mekanism/electrolytic_separator');

  event.remove({ output: 'mekanism:basic_energy_cube' });
  event
    .shaped('mekanism:basic_energy_cube', ['QCQ', 'BSB', 'QGQ'], {
      Q: 'ae2:charged_certus_quartz_crystal',
      C: 'mekanism:basic_control_circuit',
      B: 'bloodmagic:reagentmagnetism',
      G: 'occultism:spirit_attuned_gem',
      S: 'mekanism:steel_casing',
    })
    .id('kubejs:mekanism/basic_energy_cube');

  event.remove({ output: 'mekanism:digital_miner' });
  event
    .shaped('mekanism:digital_miner', ['ESE', 'ICD', 'GUG'], {
      E: 'mekanism:teleportation_core',
      S: 'occultism:dimensional_matrix',
      I: 'bloodmagic:reagentsight',
      C: 'mekanism:robit',
      D: 'bloodmagic:reagentteleposition',
      U: 'mekanism:ultimate_control_circuit',
      G: 'ae2:charged_certus_quartz_crystal',
    })
    .id('kubejs:mekanism/digital_miner');

  event
    .custom({
      type: 'occultism:crushing',
      crushing_time: 200,
      ignore_crushing_multiplier: false,
      ingredient: {
        item: 'minecraft:charcoal',
      },
      result: {
        count: 4,
        item: 'mekanism:dust_charcoal',
      },
    })
    .id('occultism:kubejs/dust_charcoal');
});
