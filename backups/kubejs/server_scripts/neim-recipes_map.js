ServerEvents.recipes((event) => {
  event.remove({ output: 'minecraft:map' });
  event.shaped(Item.of('minecraft:map', 1), ['###', '#X#', '###'], {
    '#': 'minecraft:paper',
    X: 'minecraft:ink_sac',
  });
});
