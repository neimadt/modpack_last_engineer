if (Platform.isLoaded('jei')) {
  JEIEvents.information((event) => {
    if (Platform.isLoaded('tempad')) {
      event.addItem('tempad:tempad', [
        'Forged from mechanism, blood, spirit and flame.',
        'The Tempad bends time not by magic, but by the will of an awakened engineer.',
      ]);
    }

    if (Platform.isLoaded('easy_villagers')) {
      event.addItem('easy_villagers:breeder', [
        'Lets two villagers breed using hay and mechanical precision.',
      ]);

      event.addItem('easy_villagers:incubator', [
        'Keeps baby villagers safe until they grow up, powered by growth magic.',
      ]);

      event.addItem('easy_villagers:incubator', [
        'Allows controlled trading with a villager.',
      ]);

      event.addItem('easy_villagers:auto_trader', [
        'Automates villager trades using suppression runes.',
      ]);

      event.addItem('easy_villagers:converter', [
        'Turns villagers into zombies and vice versa, harnessing the void.',
      ]);
    }
  });
}
