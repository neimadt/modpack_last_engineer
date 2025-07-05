ServerEvents.recipes((event) => {
  event
    .shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:coal'])
    .id('last_engineer:black_dye_from_coal');

  event
    .shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:charcoal'])
    .id('last_engineer:black_dye_from_charcoal');

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
