ServerEvents.tags('item', (event) => {
  const trimMaterials = [
    'cataclysm:witherite_ingot',
    'cataclysm:ancient_metal_ingot',
    'cataclysm:cursium_ingot',
    'cataclysm:ignitium_ingot',
    'upgrade_aquatic:thrasher_tooth',
  ];

  for (const element of trimMaterials) {
    event.remove('minecraft:trim_materials', element);
  }
});
