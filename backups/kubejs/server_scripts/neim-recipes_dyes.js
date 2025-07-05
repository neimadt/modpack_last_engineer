ServerEvents.recipes((event) => {
  event
    .shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:coal'])
    .id('last_engineer:black_dye_coal');

  event
    .shapeless(Item.of('minecraft:black_dye', 1), ['minecraft:charcoal'])
    .id('last_engineer:black_dye_charcoal');

  if (Platform.isLoaded('utilitarian')) {
    event.remove({ id: 'utilitarian:utility/green_dye' });
  }

  event
    .shapeless(Item.of('minecraft:green_dye', 2), [
      'minecraft:blue_dye',
      'minecraft:yellow_dye',
    ])
    .id('last_engineer:green_dye');

  event
    .shapeless(Item.of('minecraft:lime_dye', 2), [
      'minecraft:green_dye',
      'minecraft:white_dye',
    ])
    .id('last_engineer:lime_dye');
});
