StartupEvents.registry('item', (event) => {
  event
    .create(`kubejs:iron_staff`, 'sword')
    .parentModel('kubejs:item/iron_staff')
    .texture('kubejs:item/iron_staff')
    .speedBaseline(-2.3)
    .attackDamageBaseline(4.5)
    .maxDamage(244);

  event
    .create(`kubejs:golden_staff`, 'sword')
    .parentModel('kubejs:item/golden_staff')
    .texture('kubejs:item/golden_staff')
    .speedBaseline(-2.3)
    .attackDamageBaseline(4.6)
    .maxDamage(61);

  event
    .create(`kubejs:osmium_staff`, 'sword')
    .parentModel('kubejs:item/osmium_staff')
    .texture('kubejs:item/osmium_staff')
    .speedBaseline(-2.3)
    .attackDamageBaseline(5.3)
    .maxDamage(1022);

  event
    .create(`kubejs:diamond_staff`, 'sword')
    .parentModel('kubejs:item/diamond_staff')
    .texture('kubejs:item/diamond_staff')
    .speedBaseline(-2.3)
    .attackDamageBaseline(5.5)
    .maxDamage(1555);

  event
    .create(`kubejs:netherite_staff`, 'sword')
    .parentModel('kubejs:item/netherite_staff')
    .texture('kubejs:item/netherite_staff')
    .speedBaseline(-2.3)
    .attackDamageBaseline(6.5)
    .maxDamage(2025);
});

ItemEvents.modification((event) => {
  event.modify('kubejs:iron_staff', (item) => {
    item.attackDamage = 4.5;
    item.maxDamage = 244;
  });
  event.modify('kubejs:golden_staff', (item) => {
    item.attackDamage = 4.6;
  });
  event.modify('kubejs:osmium_staff', (item) => {
    item.attackDamage = 5.3;
  });
  event.modify('kubejs:diamond_staff', (item) => {
    item.attackDamage = 5.5;
  });
  event.modify('kubejs:netherite_staff', (item) => {
    item.attackDamage = 6.5;
  });

  if (Platform.isLoaded('dungeons_and_combat')) {
    event.modify('dungeons_and_combat:wooden_battle_staff', (item) => {
      item.attackDamage = 3.5;
    });
  }
});
