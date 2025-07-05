ItemEvents.modification((event) => {
  event.modify('ef_weapon_extended:iron_knuckles', (item) => {
    item.attackSpeed = -2.1;
    item.attackDamage = 6.0;

    // item.tier = (tier) => {
    //   tier.speed = -2.1;
    // };
  });

  event.modify('ef_weapon_extended:gold_knuckles', (item) => {
    item.attackSpeed = -2.1;
    item.attackDamage = 4.0;

    // item.tier = (tier) => {
    //   tier.speed = -2.1;
    // };
  });

  event.modify('ef_weapon_extended:diamond_knuckles', (item) => {
    item.attackSpeed = -2.1;
    item.attackDamage = 6.5;

    // item.tier = (tier) => {
    //   tier.speed = -2.1;
    // };
  });

  event.modify('ef_weapon_extended:netherite_knuckles', (item) => {
    item.attackSpeed = -2.1;
    item.attackDamage = 7.0;

    // item.tier = (tier) => {
    //   tier.speed = -2.1;
    // };
  });
});
