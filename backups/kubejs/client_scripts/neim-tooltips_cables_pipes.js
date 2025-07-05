ItemEvents.tooltip((event) => {
  // Mekanism Pipes
  if (Platform.isLoaded('mekanism')) {
    event.add(
      'mekanism:basic_universal_cable',
      Text.of('§5Infused with Binding Reagent (Power)')
    );
    event.add(
      'mekanism:basic_mechanical_pipe',
      Text.of('§5Infused with Water Reagent (Fluids)')
    );
    event.add(
      'mekanism:basic_pressurized_tube',
      Text.of('§5Infused with Void Reagent (Gases)')
    );
    event.add(
      'mekanism:basic_logistical_transporter',
      Text.of('§5Infused with Holding Reagent (Items)')
    );
    event.add(
      'mekanism:basic_thermodynamic_conductor',
      Text.of('§5Infused with Lava Reagent (Heat)')
    );
    event.add(
      'mekanism:restrictive_transporter',
      Text.of('§5Bound with Magnetism Reagent')
    );
    event.add(
      'mekanism:diversion_transporter',
      Text.of('§5Forged with Magnetism & Binding Reagents')
    );
  }

  if (Platform.isLoaded('pipez')) {
    // Pipez Pipes
    event.add(
      'pipez:item_pipe',
      Text.of('§5Infused with Holding Reagent (Item Flow)')
    );
    event.add(
      'pipez:fluid_pipe',
      Text.of('§5Infused with Water Reagent (Fluid Flow)')
    );
    event.add(
      'pipez:energy_pipe',
      Text.of('§5Infused with Binding Reagent (Energy Flow)')
    );
    event.add(
      'pipez:gas_pipe',
      Text.of('§5Infused with Void Reagent (Gas Flow)')
    );
    event.add(
      'pipez:universal_pipe',
      Text.of('§6Fused with Spirit-Attuned Core')
    );

    // Optional: Add styling or line breaks
    event.addAdvanced('pipez:universal_pipe', (item, advanced, text) => {
      text.add(1, Text.of('§8Combines all flow types').italic());
    });
  }
});
