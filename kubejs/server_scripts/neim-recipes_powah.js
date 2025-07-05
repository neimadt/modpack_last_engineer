ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('powah')) return;

  event.remove({ output: 'powah:dielectric_paste' });
  event
    .shapeless(Item.of('powah:dielectric_paste', 28), [
      'mekanism:dust_coal',
      'mekanism:dust_coal',
      'createmetallurgy:zinc_dust',
      'minecraft:clay_ball',
      'minecraft:clay_ball',
      'minecraft:lava_bucket',
    ])
    .id('powah:kubejs/dielectric_paste_coal');

  event
    .shapeless(Item.of('powah:dielectric_paste', 16), [
      'mekanism:dust_charcoal',
      'mekanism:dust_charcoal',
      'createmetallurgy:zinc_dust',
      'minecraft:clay_ball',
      'minecraft:clay_ball',
      'minecraft:lava_bucket',
    ])
    .id('powah:kubejs/dielectric_paste_charcoal');
});
