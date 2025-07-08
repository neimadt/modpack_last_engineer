if (Platform.isLoaded('easy_villagers')) {
  ItemEvents.tooltip((event) => {
    event.add('easy_villagers:breeder', [
      Text.of('A device to help villagers multiply').gold(),
    ]);

    event.add('easy_villagers:incubator', [
      Text.of('Keep baby villagers safe until they grow').gold(),
    ]);

    event.add('easy_villagers:trader', [
      Text.of('House your trader for easy deals').gold(),
    ]);

    event.add('easy_villagers:auto_trader', [
      Text.of('Automate trades at scale').gold(),
    ]);

    event.add('easy_villagers:converter', [
      Text.of('Convert villagers to zombies and back').gold(),
      Text.of("They'll love you for it"),
    ]);
  });
}
