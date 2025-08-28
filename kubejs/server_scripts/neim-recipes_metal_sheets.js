ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('ore_hammer') || !Platform.isLoaded('create')) return;

  event.remove({ output: 'create:iron_sheet' });
  event
    .shapeless(Item.of('create:iron_sheet', 1), [
      'ore_hammer:crushing_hammer',
      'minecraft:iron_ingot',
      'minecraft:iron_ingot',
    ])
    .id('last_engineer:iron_sheet_from_hammering')
    .keepIngredient('ore_hammer:crushing_hammer');

  event
    .shapeless(Item.of('create:copper_sheet', 1), [
      'ore_hammer:crushing_hammer',
      'minecraft:copper_ingot',
      'minecraft:copper_ingot',
    ])
    .id('last_engineer:copper_sheet_from_hammering')
    .keepIngredient('ore_hammer:crushing_hammer');

  event
    .shapeless(Item.of('create:brass_sheet', 1), [
      'ore_hammer:crushing_hammer',
      'create:brass_ingot',
      'create:brass_ingot',
    ])
    .id('last_engineer:brass_sheet_from_hammering')
    .keepIngredient('ore_hammer:crushing_hammer');

  event
    .shapeless(Item.of('create:golden_sheet', 1), [
      'ore_hammer:crushing_hammer',
      'minecraft:gold_ingot',
      'minecraft:gold_ingot',
    ])
    .id('last_engineer:golden_sheet_from_hammering')
    .keepIngredient('ore_hammer:crushing_hammer');

  if (Platform.isLoaded('forbidden_arcanus')) {
    event
      .shapeless(Item.of('create:sturdy_sheet', 1), [
        'ore_hammer:crushing_hammer',
        'forbidden_arcanus:obsidian_ingot',
        'forbidden_arcanus:obsidian_ingot',
      ])
      .id('last_engineer:sturdy_sheet_from_hammering')
      .keepIngredient('ore_hammer:crushing_hammer');
  }

  if (Platform.isLoaded('createaddition')) {
    event
      .shapeless(Item.of('createaddition:electrum_sheet', 1), [
        'ore_hammer:crushing_hammer',
        '#forge:ingots/electrum',
        '#forge:ingots/electrum',
      ])
      .id('last_engineer:electrum_sheet_from_hammering')
      .keepIngredient('ore_hammer:crushing_hammer');

    event
      .shapeless(Item.of('createaddition:zinc_sheet', 1), [
        'ore_hammer:crushing_hammer',
        'create:zinc_ingot',
        'create:zinc_ingot',
      ])
      .id('last_engineer:zinc_sheet_from_hammering')
      .keepIngredient('ore_hammer:crushing_hammer');

    if (Platform.isLoaded('createmetallurgy')) {
      event
        .shapeless(Item.of('createmetallurgy:tungsten_sheet', 1), [
          'ore_hammer:crushing_hammer',
          'createmetallurgy:tungsten_ingot',
          'createmetallurgy:tungsten_ingot',
        ])
        .id('last_engineer:tungsten_sheet_from_hammering')
        .keepIngredient('ore_hammer:crushing_hammer');

      event
        .shapeless(Item.of('createmetallurgy:obdurium_sheet', 1), [
          'ore_hammer:crushing_hammer',
          'createmetallurgy:obdurium_ingot',
          'createmetallurgy:obdurium_ingot',
        ])
        .id('last_engineer:obdurium_sheet_from_hammering')
        .keepIngredient('ore_hammer:crushing_hammer');
    }
  }
});
