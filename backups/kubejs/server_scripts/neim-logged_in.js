PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has('starting_items')) {
    event.player.stages.add('starting_items');
    if (Platform.isLoaded('eccentrictome')) {
      event.player.give(Item.of('eccentrictome:tome'));
    }
  }
});
