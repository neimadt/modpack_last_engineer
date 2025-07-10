ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('ecologics')) return;

  event.shapeless(Item.of('minecraft:bowl', 1), ['ecologics:coconut_husk']);
});
