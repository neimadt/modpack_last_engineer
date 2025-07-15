ServerEvents.recipes((event) => {
  if (Platform.isLoaded('quark')) {
    event.remove({
      id: 'quark:tweaks/crafting/utility/misc/coal_to_black_dye',
    });

    event.remove({
      id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye',
    });
  }

  event
    .shapeless(Item.of('minecraft:black_dye', 1), [
      'minecraft:coal',
      'minecraft:water_bucket',
    ])
    .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('last_engineer:black_dye_from_water_bucket_and_coal');

  event
    .custom({
      type: 'minecraft:crafting_shapeless',
      ingredients: [
        {
          item: 'minecraft:coal',
        },
        {
          type: 'forge:partial_nbt',
          item: 'minecraft:potion',
          nbt: '{Potion:"minecraft:water"}',
        },
      ],
      result: {
        item: 'minecraft:black_dye',
        count: 1,
      },
    })
    .replaceIngredient('minecraft:potion', 'minecraft:glass_bottle')
    .id('last_engineer:black_dye_from_potion_and_coal');

  event
    .shapeless(Item.of('minecraft:black_dye', 1), [
      'minecraft:charcoal',
      'minecraft:water_bucket',
    ])
    .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('last_engineer:black_dye_from_water_bucket_and_charcoal');

  event
    .custom({
      type: 'minecraft:crafting_shapeless',
      ingredients: [
        {
          item: 'minecraft:charcoal',
        },
        {
          type: 'forge:partial_nbt',
          item: 'minecraft:potion',
          nbt: '{Potion:"minecraft:water"}',
        },
      ],
      result: {
        item: 'minecraft:black_dye',
        count: 1,
      },
    })
    .replaceIngredient('minecraft:potion', 'minecraft:glass_bottle')
    .id('last_engineer:black_dye_from_potion_and_charcoal');

  if (Platform.isLoaded('utilitarian')) {
    event.remove({ id: 'utilitarian:utility/green_dye' });
  }

  event
    .shapeless(Item.of('minecraft:green_dye', 2), [
      'minecraft:blue_dye',
      'minecraft:yellow_dye',
    ])
    .id('last_engineer:green_dye_from_blue_dye_and_yellow_dye');

  event
    .shapeless(Item.of('minecraft:lime_dye', 2), [
      'minecraft:green_dye',
      'minecraft:white_dye',
    ])
    .id('last_engineer:lime_dye_from_green_dye_and_white_dye');

  event
    .shapeless(Item.of('minecraft:blue_dye', 2), [
      'minecraft:light_blue_dye',
      'minecraft:gray_dye',
    ])
    .id('last_engineer:blue_dye_from_light_blue_dye_and_gray_dye');

  event
    .shapeless(Item.of('minecraft:light_blue_dye', 2), [
      'minecraft:blue_dye',
      'minecraft:white_dye',
    ])
    .id('last_engineer:light_blue_dye_from_blue_dye_and_white_dye');
});
