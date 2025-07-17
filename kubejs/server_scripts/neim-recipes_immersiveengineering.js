ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('immersiveengineering')) return;

  event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' });
  event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' });
  event.remove({
    id: 'immersiveengineering:crafting/plate_aluminum_hammering',
  });
  event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' });
  event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' });
  event.remove({
    id: 'immersiveengineering:crafting/plate_electrum_hammering',
  });
  event.remove({
    id: 'immersiveengineering:crafting/plate_uranium_hammering',
  });
  event.remove({
    id: 'immersiveengineering:crafting/plate_copper_hammering',
  });
  event.remove({
    id: 'immersiveengineering:crafting/plate_nickel_hammering',
  });
  event.remove({
    id: 'immersiveengineering:crafting/plate_lead_hammering',
  });
  event.remove({
    id: 'immersiveengineering:crafting/plate_constantan_hammering',
  });

  event.remove({
    id: 'jaopca:immersiveengineering.material_to_plate_hammer.zinc',
  });
  event.remove({
    id: 'jaopca:immersiveengineering.material_to_plate_hammer.obsidian',
  });
  event.remove({
    id: 'jaopca:immersiveengineering.material_to_plate_hammer.brass',
  });
  event.remove({
    id: 'jaopca:immersiveengineering.material_to_plate_hammer.tungsten',
  });
  event.remove({
    id: 'jaopca:immersiveengineering.material_to_plate_hammer.obdurium',
  });
});
