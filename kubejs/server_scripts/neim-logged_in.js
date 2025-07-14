PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has('starting_items')) {
    event.player.stages.add('starting_items');
    if (Platform.isLoaded('eccentrictome')) {
      event.player.give(Item.of('eccentrictome:tome'));
    }
  }

  if (!event.player.stages.has('curios_slots_added')) {
    event.player.stages.add('curios_slots_added');
    const playerName = event.player.getName().getString();

    console.log('Adding curios for ' + playerName);

    event.server.runCommandSilent('curios add belt ' + playerName);
    event.server.runCommandSilent('curios add back ' + playerName);
  }
});
