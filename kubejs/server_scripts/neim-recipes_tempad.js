ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('tempad')) return;

  event.remove({ output: 'tempad:tempad' });
  event
    .custom({
      type: 'create:mechanical_crafting',
      pattern: ['T E T', 'RMHMR', 'SJLJS', 'PVFVP', 'T W T'],
      acceptMirrored: true,
      key: {
        T: { item: 'create:electron_tube' },
        E: { tag: 'forge:ender_pearls' },
        R: { item: 'create:sturdy_sheet' },
        M: { item: 'create:precision_mechanism' },
        S: { item: 'pneumaticcraft:pressure_tube' },
        L: { item: 'hexerei:blood_bottle' },
        H: { item: 'heroes:formula_vial' },
        F: { item: 'forbidden_arcanus:dark_rune' },
        J: { item: 'occultism:spirit_attuned_gem' },
        P: { item: 'minecraft:blaze_rod' },
        V: { item: 'create_sa:heat_engine' },
        W: { item: 'create:redstone_link' },
      },
      result: {
        item: 'tempad:tempad',
      },
    })
    .id('last_engineer:tempad');
});
