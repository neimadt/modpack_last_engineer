const $AttributeModifier = Java.loadClass(
  'net.minecraft.world.entity.ai.attributes.AttributeModifier'
);

let itemsToAddAttribModifier = {
  'weapon_class:gauntlet': {
    attribute: 'minecraft:generic.attack_speed',
    slots: ['mainhand', 'offhand'],
    modifier: new $AttributeModifier(
      'c44604a7-af20-40d8-bbc7-7e0e25ad7515',
      'generic.attack_speed',
      -2.1,
      'ADDITION'
    ),
  },
  'cataclysm:gauntlet_of_guard': {
    attribute: 'minecraft:generic.attack_speed',
    slots: ['mainhand', 'offhand'],
    modifier: new $AttributeModifier(
      'c44604a7-af20-40d8-bbc7-7e0e25ad7515',
      'generic.attack_speed',
      -2.1,
      'ADDITION'
    ),
  },
  'cataclysm:gauntlet_of_maelstrom': {
    attribute: 'minecraft:generic.attack_speed',
    slots: ['mainhand', 'offhand'],
    modifier: new $AttributeModifier(
      'c44604a7-af20-40d8-bbc7-7e0e25ad7515',
      'generic.attack_speed',
      -2.1,
      'ADDITION'
    ),
  },
  'cataclysm:gauntlet_of_bulwark': {
    attribute: 'minecraft:generic.attack_speed',
    slots: ['mainhand', 'offhand'],
    modifier: new $AttributeModifier(
      'c44604a7-af20-40d8-bbc7-7e0e25ad7515',
      'generic.attack_speed',
      -2.1,
      'ADDITION'
    ),
  },
};

ForgeEvents.onEvent(
  'net.minecraftforge.event.ItemAttributeModifierEvent',
  (event) => {
    const item = itemsToAddAttribModifier[event.itemStack.id];
    if (!item || item.slots.indexOf(event.slotType) < 0) return;

    event.removeAttribute(item.attribute);
    event.addModifier(item.attribute, item.modifier);
  }
);

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

  // event.modify('weapon_class:gauntlet', (item) => {
  //   item.attackSpeed = -2.1;
  // });

  // event.modify('weapon_class:gauntlet', (item) => {
  //   let attribute = item.getAttributes('generic.attack_speed').get(0);
  //   //we need to overwrite the axe's attribute
  //   item.removeAttribute('generic.attack_speed', attribute.id);
  //   item.addAttribute(
  //     'generic.attack_speed',
  //     attribute.id,
  //     attribute.name,
  //     -2.1,
  //     attribute.operation
  //   );
  // });

  // event.modify('cataclysm:gauntlet_of_guard', (item) => {
  //   item.attackSpeed = -2.1;
  // });

  // event.modify('cataclysm:gauntlet_of_maelstrom', (item) => {
  //   item.attackSpeed = -2.1;
  // });

  // event.modify('cataclysm:gauntlet_of_bulwark', (item) => {
  //   item.attackSpeed = -2.1;
  // });
});
