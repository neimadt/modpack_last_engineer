if (Platform.isLoaded('jei')) {
  JEIEvents.information((event) => {
    if (Platform.isLoaded('angelring')) {
      event.addItem('angelring:diamond_ring', [
        'Angel Ring',
        'Late-game flight accessory.',
        'Requires boss loot (Void Core, Ignitium Ingot, Elytra & Nether Star) and Blood Magic reagents.',
      ]);
    }
  });
}
