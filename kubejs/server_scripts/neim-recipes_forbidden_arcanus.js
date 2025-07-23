ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('forbidden_arcanus')) return;

  event.remove({ id: 'forbidden_arcanus:enchanted_golden_apple' });

  event.remove({ id: 'forbidden_arcanus:aurum_fence_gate' });
  event
    .shaped(Item.of('forbidden_arcanus:aurum_fence_gate', 1), ['SPS', 'SPS'], {
      P: 'forbidden_arcanus:aurum_planks',
      S: '#forge:sticks/wood',
    })
    .id('last_engineer:forbidden_arcanus/aurum_fence_gate');

  event.remove({ id: 'forbidden_arcanus:aurum_fence' });
  event
    .shaped(Item.of('forbidden_arcanus:aurum_fence', 3), ['PSP', 'PSP'], {
      P: 'forbidden_arcanus:aurum_planks',
      S: '#forge:sticks/wood',
    })
    .id('last_engineer:forbidden_arcanus/aurum_fence');

  event
    .smelting('minecraft:charcoal', 'forbidden_arcanus:aurum_log')
    .id('last_engineer:forbidden_arcanus/charcoal_from_aurum_log');

  event
    .custom({
      type: 'create:item_application',
      ingredients: [
        {
          item: 'forbidden_arcanus:stripped_aurum_log',
        },
        {
          item: 'create:andesite_alloy',
        },
      ],
      results: [
        {
          item: 'create:andesite_casing',
        },
      ],
    })
    .id(
      'last_engineer:forbidden_arcanus/stripped_aurum_log_to_andesite_casing'
    );
});
