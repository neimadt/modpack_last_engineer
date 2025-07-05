ItemEvents.rightClicked('heroes:injector', (event) => {
  const {
    player,
    player: { mainHandItem, offHandItem },
    hand,
    level,
  } = event;

  if (
    mainHandItem.id === 'heroes:injector' &&
    offHandItem.id === 'heroes:catalyst_vial'
  ) {
    const $InteractionHand = Java.loadClass(
      'net.minecraft.world.InteractionHand'
    );
    if (!hand.equals($InteractionHand.MAIN_HAND)) return;

    event.cancel();

    level.playSound(null, pos, 'block.grindstone.use', 'players', 0.5, 1);

    player.tell(
      '§cThe Catalyst Vial can only be activated through the Occult Ritual.'
    );
  }
});
