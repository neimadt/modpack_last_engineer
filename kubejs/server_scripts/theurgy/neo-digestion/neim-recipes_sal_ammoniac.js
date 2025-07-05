ServerEvents.recipes((event) => {
  event
    .custom({
      type: 'create:mixing',
      heatRequirement: 'heated',
      ingredients: [{ fluid: 'theurgy:sal_ammoniac', amount: 1000 }],
      results: [{ item: 'theurgy:sal_ammoniac_crystal' }],
    })
    .id('last_engineer:create/mixing/sal_ammoniac_crystal_heated');

  event
    .custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [{ fluid: 'theurgy:sal_ammoniac', amount: 1000 }],
      results: [{ item: 'theurgy:sal_ammoniac_crystal', count: 2 }],
    })
    .id('last_engineer:create/mixing/sal_ammoniac_crystal_superheated');
});
