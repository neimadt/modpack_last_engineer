const enchantToRemove = 'minecraft:sweeping_edge';

EntityEvents.spawned((event) => {
  if (!event.entity) return;

  const { entity } = event;

  if (
    !entity.living ||
    !entity.allSlots ||
    !entity.server ||
    !entity.server.scheduleInTicks
  )
    return;

  entity.server.scheduleInTicks(1, (_) => {
    entity.allSlots.forEach((item) => {
      if (!item) return;

      if (item.getEnchantmentLevel(enchant) != 0) return;

      let enchantmentTypes = item.enchantments
        .keySet()
        .toArray()
        .map((c) => c.registeredName);

      let enchantmentLevels = enchantmentTypes.map((eType) =>
        item.getEnchantmentLevel(eType)
      );

      item.resetComponents();

      enchantmentTypes.forEach((eType, i) => {
        if (eType == enchant) return;
        item.enchant(eType, enchantmentLevels[i]);
      });
    });
  });
});
