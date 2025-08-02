if (Platform.isLoaded('heroes')) {
  ItemEvents.rightClicked((event) => {
    const { item, player } = event;
    if (
      item &&
      item.id &&
      item.id.toString() === 'heroes:catalyzed_formula_vial'
    ) {
      if (
        item.nbt &&
        item.nbt.Potion === 'heroes:catalyzed_formula_vial_ready'
      ) {
        event.server.runCommandSilent(
          `execute run heroes ${player.name.string} catalyst 1`
        );

        event.cancel();
      }
    }
  });
}
