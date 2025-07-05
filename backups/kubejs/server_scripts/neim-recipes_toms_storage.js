ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('toms_storage')) return;

  event.remove({ output: 'toms_storage:ts.wireless_terminal' });
  event
    .shaped(
      Item.of('toms_storage:ts.wireless_terminal', 1),
      ['GEG', 'DPB', 'GTG'],
      {
        G: 'create:golden_sheet',
        D: 'create:display_link',
        B: 'create:display_board',
        T: 'create:redstone_link',
        P: 'create:precision_mechanism',
        E: 'create:electron_tube',
      }
    )
    .id('kubejs:toms_storage/ts.wireless_terminal');

  event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' });
  event
    .shaped(
      Item.of('toms_storage:ts.adv_wireless_terminal', 1),
      ['GEG', 'DPB', 'GTG'],
      {
        G: 'create:sturdy_sheet',
        D: 'create:display_link',
        B: 'create:display_board',
        T: 'create:redstone_link',
        P: 'toms_storage:ts.wireless_terminal',
        E: 'create:electron_tube',
      }
    )
    .id('kubejs:toms_storage/ts.adv_wireless_terminal');
});
