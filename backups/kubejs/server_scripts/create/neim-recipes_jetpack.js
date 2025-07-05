ServerEvents.recipes((event) => {
  event.remove({ output: 'create_jetpack:jetpack' });

  event.custom({
    type: 'create_jetpack:copy_nbt_mechanical_crafting',
    pattern: [' PSP ', 'PYXYP', 'PCRCP', ' C C '],
    key: {
      R: {
        item: 'bloodmagic:reagentair',
      },
      C: {
        item: 'create:chute',
      },
      X: {
        item: 'create:copper_backtank',
      },
      S: {
        item: 'create:shaft',
      },
      Y: {
        item: 'create:precision_mechanism',
      },
      P: {
        tag: 'forge:plates/brass',
      },
    },
    result: {
      item: 'create_jetpack:jetpack',
    },
  });
});
