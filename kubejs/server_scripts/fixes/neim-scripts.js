let tickCounter = 0;

ServerEvents.tick((event) => {
  tickCounter++;
  if (tickCounter === 34800) {
    event.server.tell(
      '[ClearLag] Warning: Dropped items will be cleared in 1 minute!'
    );
  }

  if (tickCounter >= 36000) {
    tickCounter = 0;

    event.server.runCommandSilent('kill @e[type=minecraft:item]');
    event.server.tell('[ClearLag] Removed all dropped items.');
  }
});
