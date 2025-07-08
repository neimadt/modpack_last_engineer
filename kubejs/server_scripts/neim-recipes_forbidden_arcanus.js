ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('forbidden_arcanus')) return;

  event.remove({ id: 'forbidden_arcanus:aurum_fence_gate' });
  event
    .shaped(Item.of('forbidden_arcanus:aurum_fence_gate', 1), ['SPS', 'SPS'], {
      P: 'forbidden_arcanus:aurum_planks',
      S: '#forge:sticks/wood',
    })
    .id('last_engineer:forbidden_arcanus/aurum_fence_gate');

  event.remove({ id: 'forbidden_arcanus:aurum_fence' });
  event
    .shaped(Item.of('forbidden_arcanus:aurum_fence', 1), ['PSP', 'PSP'], {
      P: 'forbidden_arcanus:aurum_planks',
      S: '#forge:sticks/wood',
    })
    .id('last_engineer:forbidden_arcanus/aurum_fence');
});
