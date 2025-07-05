ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('integrateddynamics')) return;

  event.remove({ output: 'integrateddynamics:mechanical_squeezer' });
  event
    .shaped(
      Item.of('integrateddynamics:mechanical_squeezer', 1),
      [' D ', 'BSB', ' O '],
      {
        D: 'minecraft:diamond',
        B: 'createaddition:small_light_connector',
        S: 'integrateddynamics:squeezer',
        O: '#forge:obsidian',
      }
    )
    .id('last_engineer:integrateddynamics/mechanical_squeezer');

  event.remove({ output: 'integrateddynamics:mechanical_drying_basin' });
  event
    .shaped(
      Item.of('integrateddynamics:mechanical_drying_basin', 1),
      [' O ', 'BSB', ' O '],
      {
        B: 'createaddition:small_light_connector',
        S: 'integrateddynamics:drying_basin',
        O: '#forge:obsidian',
      }
    )
    .id('last_engineer:integrateddynamics/mechanical_drying_basin');

  event.remove({ output: 'integratedtunnels:part_interface_energy' });
  event
    .shaped(
      Item.of('integratedtunnels:part_interface_energy', 4),
      ['CBC', 'CCC'],
      {
        C: 'integrateddynamics:crystalized_menril_chunk',
        B: 'createaddition:small_light_connector',
      }
    )
    .id('last_engineer:integratedtunnels/part_interface_energy');
});
