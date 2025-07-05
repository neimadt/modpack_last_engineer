ServerEvents.recipes((event) => {
  if (Platform.isLoaded('pocketgps')) {
    event.remove({ output: 'pocketgps:gps' });

    event
      .shaped('pocketgps:gps', ['LRR', ' M ', 'IEL'], {
        L: 'minecraft:lightning_rod',
        R: 'bloodmagic:blankslate',
        E: 'minecraft:ender_pearl',
        M: 'map_atlases:atlas',
        I: 'occultism:infused_lenses',
      })
      .keepIngredient('map_atlases:atlas')
      .id('heroes:kubejs/runed_map_shard');
  }
});
