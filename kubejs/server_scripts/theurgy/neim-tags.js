const values = [
  { sulfur: 'stellarite_sulfur', tier: 'precious', type: 'metals' },
  { sulfur: 'arcane_crystal_sulfur', tier: 'rare', type: 'gems' },
  { sulfur: 'rune_sulfur', tier: 'common', type: 'metals' },
  { sulfur: 'uraninite_sulfur', tier: 'rare', type: 'metals' },
  { sulfur: 'nautilus_shell_sulfur', tier: 'precious', type: 'other_minerals' },
  { sulfur: 'ender_pearl_sulfur', tier: 'rare', type: 'gems' },
  { sulfur: 'andesite_sulfur', tier: 'abundant', type: 'other_minerals' },
  { sulfur: 'diorite_sulfur', tier: 'abundant', type: 'other_minerals' },
  { sulfur: 'cobblestone_sulfur', tier: 'abundant', type: 'other_minerals' },
  { sulfur: 'aluminum_sulfur', tier: 'common', type: 'metals' },
  { sulfur: 'redstone_flux_crystal_sulfur', tier: 'rare', type: 'gems' },
];

const handleSulfurTags = (event, args) => {
  const { sulfur, type, tier } = args;

  event.add('theurgy:alchemical_sulfurs', `kubejs:${sulfur}`);
  event.add(`theurgy:alchemical_sulfurs/${type}`, `kubejs:${sulfur}`);
  event.add('theurgy:alchemical_sulfurs_and_niters', `kubejs:${sulfur}`);
  event.add(`theurgy:alchemical_sulfurs/${type}/${tier}`, `kubejs:${sulfur}`);
};

ServerEvents.tags('item', (event) => {
  for (const value of values) {
    handleSulfurTags(event, value);
  }
});
