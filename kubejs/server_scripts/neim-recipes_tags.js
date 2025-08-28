ServerEvents.recipes((event) => {});

ServerEvents.tags('item', (event) => {
  event.add('forge:planks', 'forbidden_arcanus:aurum_planks');
});
