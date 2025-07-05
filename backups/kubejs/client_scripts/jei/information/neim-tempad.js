if (Platform.isLoaded('jei')) {
  JEIEvents.information((event) => {
    if (Platform.isLoaded('tempad')) {
      event.addItem('tempad:tempad', [
        'Forged from mechanism, blood, spirit and flame.',
        'The Tempad bends time not by magic, but by the will of an awakened engineer.',
      ]);
    }
  });
}
