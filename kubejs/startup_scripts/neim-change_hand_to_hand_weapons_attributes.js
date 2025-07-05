ItemEvents.modification((event) => {
  event.modify('ef_weapon_extended:iron_knuckles', (item) => {
    item.attackSpeed = -1.9;
    item.attackDamage = 6.0;
  });

  event.modify('ef_weapon_extended:gold_knuckles', (item) => {
    item.attackSpeed = -1.9;
    item.attackDamage = 6.1;
  });

  event.modify('ef_weapon_extended:diamond_knuckles', (item) => {
    item.attackSpeed = -1.9;
    item.attackDamage = 6.5;
  });

  event.modify('ef_weapon_extended:netherite_knuckles', (item) => {
    item.attackSpeed = -1.9;
    item.attackDamage = 7.0;
  });

  // event.modify('cataclysm:gauntlet_of_guard', (item) => {
  //   item.attackSpeed = -2.2;
  // });

  // event.modify('cataclysm:gauntlet_of_maelstrom', (item) => {
  //   item.attackSpeed = -2.2;
  // });

  // event.modify('cataclysm:gauntlet_of_bulwark', (item) => {
  //   item.attackSpeed = -2.2;
  // });
});
