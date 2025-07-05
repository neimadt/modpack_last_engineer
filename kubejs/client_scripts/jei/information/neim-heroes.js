if (Platform.isLoaded('jei')) {
  JEIEvents.information((event) => {
    if (Platform.isLoaded('heroes')) {
      event.addItem('heroes:compound_alx', [
        'Base Catalyst to aquire powers',
        'Forged through blood and lava',
        'Used in Theurgy fermentation to unlock formula',
      ]);
      event.addItem('heroes:formula_vial', [
        'Power Formula',
        'Fermented from precious sulfur and ALX compound.',
        'Consume to obtain random powers (with side effects).',
      ]);
      event.addItem('heroes:catalyst_vial', [
        'Catalyst Vial',
        'Removes side effects from powers.',
        'Crafted via Blood Magic Alchemy Table.',
        'Used in Occultism ritual to aquire the powers.',
      ]);
    }
  });
}
