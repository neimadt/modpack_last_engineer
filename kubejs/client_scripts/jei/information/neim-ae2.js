if (Platform.isLoaded('jei')) {
  JEIEvents.information((event) => {
    if (Platform.isLoaded('ae2')) {
      event.addItem('ae2:silicon', [
        'Industrial-grade silicon requires both quartz dust and sand,',
        'smelted under intense heat in an Arc Furnace.',
      ]);
    }
  });
}
