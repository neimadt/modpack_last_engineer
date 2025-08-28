ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('mekanism')) return;

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

  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      key: {
        F: { item: 'minecraft:furnace' },
        I: { tag: 'forge:ingots/iron' },
        O: { tag: 'forge:ingots/osmium' },
        R: { tag: 'forge:dusts/redstone' },
        C: { item: 'bloodmagic:reagentgrowth' },
      },
      pattern: ['IFI', 'ROR', 'ICI'],
      result: { item: 'mekanism:metallurgic_infuser' },
    })
    .id('last_engineer:mekanism/metallurgic_infuser');

  event.remove({ output: 'mekanism:crusher' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      key: {
        B: { item: 'bloodmagic:reagentlava' },
        C: { tag: 'forge:circuits/basic' },
        R: { tag: 'forge:dusts/redstone' },
        X: { item: 'mekanism:steel_casing' },
      },
      pattern: ['RCR', 'BXB', 'RCR'],
      result: { item: 'mekanism:crusher' },
    })
    .id('last_engineer:mekanism/crusher');

  event.remove({ output: 'mekanism:enrichment_chamber' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      key: {
        A: { tag: 'mekanism:alloys/basic' },
        C: { tag: 'forge:circuits/basic' },
        I: { item: 'ars_nouveau:source_gem_block' },
        X: { item: 'mekanism:steel_casing' },
      },
      pattern: ['ACA', 'IXI', 'ACA'],
      result: { item: 'mekanism:enrichment_chamber' },
    })
    .id('last_engineer:mekanism/enrichment_chamber');

  event.remove({ output: 'mekanism:electrolytic_separator' });
  event
    .custom({
      type: 'minecraft:crafting_shaped',
      key: {
        C: { item: 'mekanism:electrolytic_core' },
        A: { tag: 'mekanism:alloys/infused' },
        I: { tag: 'forge:ingots/iron' },
        R: { item: 'bloodmagic:reagentvoid' },
        W: { item: 'bloodmagic:reagentwater' },
      },
      pattern: ['IRI', 'ACA', 'IWI'],
      result: { item: 'mekanism:electrolytic_separator' },
    })
    .id('last_engineer:mekanism/electrolytic_separator');

  event.remove({ output: 'mekanism:basic_energy_cube' });
  event
    .custom({
      type: 'mekanism:mek_data',
      key: {
        A: { tag: 'mekanism:alloys/basic' },
        E: { item: 'mekanism:energy_tablet' },
        I: { item: 'ae2:charged_certus_quartz_crystal' },
        P: { item: 'mekanism:steel_casing' },
      },
      pattern: ['AEA', 'IPI', 'AEA'],
      result: { item: 'mekanism:basic_energy_cube' },
    })
    .id('last_engineer:mekanism/basic_energy_cube');

  event.remove({ output: 'mekanism:advanced_energy_cube' });

  event.remove({ output: 'mekanism:digital_miner' });
  event
    .custom({
      type: 'mekanism:mek_data',
      key: {
        A: { tag: 'mekanism:alloys/atomic' },
        C: { item: 'bloodmagic:reagentmagnetism' },
        R: { item: 'mekanism:robit' },
        S: { item: 'mekanism:logistical_sorter' },
        T: { item: 'mekanism:teleportation_core' },
        X: { item: 'mekanism:steel_casing' },
      },
      pattern: ['ACA', 'SRS', 'TXT'],
      result: { item: 'mekanism:digital_miner' },
    })
    .id('last_engineer:mekanism/digital_miner');

  if (Platform.isLoaded('occultism')) {
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
      .id('last_engineer:occultism/dust_charcoal');
  }
});
