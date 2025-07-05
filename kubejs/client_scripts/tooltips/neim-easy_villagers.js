ItemEvents.modifyTooltips((event) => {
  event.modify('easy_villagers:breeder', (tooltip) => {
    tooltip.insert(0, Text.of('A device to help villagers multiply').gold());
  });

  event.modify('easy_villagers:incubator', (tooltip) => {
    tooltip.insert(
      0,
      Text.of('Keep baby villagers safe until they grow').gold()
    );
  });

  event.modify('easy_villagers:trader', (tooltip) => {
    tooltip.insert(0, Text.of('House your trader for easy deals').gold());
  });

  event.modify('easy_villagers:auto_trader', (tooltip) => {
    tooltip.insert(0, Text.of('Automate trades at scale').gold());
  });

  event.modify('easy_villagers:converter', (tooltip) => {
    tooltip.insert(0, Text.of('Convert villagers to zombies and back').gold());
    tooltip.insert(1, Text.of("They'll love you for it"));
  });
});
