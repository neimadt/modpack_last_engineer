ItemEvents.modification((event) => {
  if (Platform.isLoaded('armoroftheages')) {
    event.modify('armoroftheages:o_yoroi_armor_legs', (item) => {
      item.maxDamage = 525;
    });

    event.modify('armoroftheages:o_yoroi_armor_head', (item) => {
      item.maxDamage = 385;
    });

    event.modify('armoroftheages:o_yoroi_armor_chest', (item) => {
      item.maxDamage = 600;
    });

    event.modify('armoroftheages:o_yoroi_armor_feet', (item) => {
      item.maxDamage = 450;
    });
  }
});
