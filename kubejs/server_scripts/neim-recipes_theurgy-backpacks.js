ServerEvents.recipes((event) => {
  if (
    Platform.isLoaded('sophisticatedbackpacks') &&
    Platform.isLoaded('theurgy')
  ) {
    event
      .custom({
        type: 'sophisticatedbackpacks:backpack_upgrade',
        conditions: [
          {
            type: 'sophisticatedcore:item_enabled',
            itemRegistryName: 'sophisticatedbackpacks:copper_backpack',
          },
        ],
        pattern: ['CMC', 'CBC', 'SES'],
        key: {
          C: {
            tag: 'forge:ingots/copper',
          },
          M: {
            tag: 'forge:plates/copper',
          },
          S: { item: 'theurgy:alchemical_sulfur_copper' },
          B: { item: 'sophisticatedbackpacks:backpack' },
          E: { item: 'minecraft:ender_pearl' },
        },
        result: { item: 'sophisticatedbackpacks:copper_backpack' },
      })
      .id('sophisticatedbackpacks:copper_backpack');

    event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' });

    event
      .custom({
        type: 'sophisticatedbackpacks:backpack_upgrade',
        conditions: [
          {
            type: 'sophisticatedcore:item_enabled',
            itemRegistryName: 'sophisticatedbackpacks:iron_backpack',
          },
        ],
        pattern: ['CMC', 'CBC', 'SES'],
        key: {
          C: {
            tag: 'forge:ingots/iron',
          },
          M: {
            tag: 'forge:plates/iron',
          },
          S: { item: 'theurgy:alchemical_sulfur_iron' },
          B: { item: 'sophisticatedbackpacks:copper_backpack' },
          E: { item: 'minecraft:ender_pearl' },
        },
        result: { item: 'sophisticatedbackpacks:iron_backpack' },
      })
      .id('sophisticatedbackpacks:iron_backpack');

    event
      .custom({
        type: 'sophisticatedbackpacks:backpack_upgrade',
        conditions: [
          {
            type: 'sophisticatedcore:item_enabled',
            itemRegistryName: 'sophisticatedbackpacks:gold_backpack',
          },
        ],
        pattern: ['CMC', 'CBC', 'SES'],
        key: {
          C: {
            tag: 'forge:ingots/gold',
          },
          M: {
            tag: 'forge:plates/gold',
          },
          S: { item: 'theurgy:alchemical_sulfur_gold' },
          B: { item: 'sophisticatedbackpacks:iron_backpack' },
          E: { item: 'minecraft:ender_pearl' },
        },
        result: { item: 'sophisticatedbackpacks:gold_backpack' },
      })
      .id('sophisticatedbackpacks:gold_backpack');

    event
      .custom({
        type: 'sophisticatedbackpacks:backpack_upgrade',
        conditions: [
          {
            type: 'sophisticatedcore:item_enabled',
            itemRegistryName: 'sophisticatedbackpacks:diamond_backpack',
          },
        ],
        pattern: ['CMC', 'CBC', 'SES'],
        key: {
          C: {
            tag: 'forge:gems/diamond',
          },
          M: {
            tag: 'forge:plates/brass',
          },
          S: { item: 'theurgy:alchemical_sulfur_diamond' },
          B: { item: 'sophisticatedbackpacks:gold_backpack' },
          E: { item: 'minecraft:ender_pearl' },
        },
        result: { item: 'sophisticatedbackpacks:diamond_backpack' },
      })
      .id('sophisticatedbackpacks:diamond_backpack');

    event
      .custom({
        type: 'sophisticatedbackpacks:backpack_upgrade',
        conditions: [
          {
            type: 'sophisticatedcore:item_enabled',
            itemRegistryName: 'sophisticatedbackpacks:netherite_backpack',
          },
        ],
        pattern: ['CMC', 'CBC', 'SES'],
        key: {
          C: {
            tag: 'forge:ingots/netherite',
          },
          M: {
            tag: 'forge:plates/obsidian',
          },
          S: { item: 'theurgy:alchemical_sulfur_netherite' },
          B: { item: 'sophisticatedbackpacks:diamond_backpack' },
          E: { item: 'minecraft:ender_pearl' },
        },
        result: { item: 'sophisticatedbackpacks:netherite_backpack' },
      })
      .id('sophisticatedbackpacks:netherite_backpack');
  }
});
