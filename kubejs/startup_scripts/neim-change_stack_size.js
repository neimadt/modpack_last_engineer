ItemEvents.modification((event) => {
  event.modify('minecraft:ender_pearl', (item) => {
    item.maxStackSize = 64;
  });

  event.modify('minecraft:egg', (item) => {
    item.maxStackSize = 64;
  });

  if (Platform.isLoaded('deeperdarker')) {
    event.modify('deeperdarker:heart_of_the_deep', (item) => {
      item.maxStackSize = 64;
    });
  }
});
