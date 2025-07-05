ServerEvents.recipes((event) => {
  if (Platform.isLoaded('ultimine_addition')) {
    event.remove({ output: 'ultimine_addition:card_blueprint' });
    event.shaped(
      Item.of('ultimine_addition:card_blueprint', 1),
      [' I ', 'BPB', ' B '],
      {
        B: 'minecraft:blue_dye',
        I: 'minecraft:ink_sac',
        P: 'minecraft:paper',
      }
    );

    event.shaped(
      Item.of('ultimine_addition:mining_skill_card_empty', 1),
      ['GEG', 'EPE', 'GEG'],
      {
        G: 'minecraft:gold_ingot',
        E: 'minecraft:emerald',
        P: 'minecraft:paper',
      }
    );
  }
});
