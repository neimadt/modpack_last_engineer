StartupEvents.registry('item', (event) => {
  //Forbidden Arcanus
  event
    .create('stellarite_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('forbidden_arcanus:stellarite_piece')
    .sourceName('Stellarite Piece')
    .sulfurTier('precious')
    .sulfurType('metals');

  event
    .create('arcane_crystal_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('forbidden_arcanus:arcane_crystal')
    .sourceName('Arcane Crystal')
    .sulfurTier('rare')
    .sulfurType('gems');

  event
    .create('rune_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('forbidden_arcanus:rune')
    .sourceName('Rune')
    .sulfurTier('common')
    .sulfurType('metals');

  if (Platform.isLoaded('powah')) {
    //Powah
    event
      .create('uraninite_sulfur', 'theurgy:alchemical_sulfur')
      .sourceItem('powah:uraninite')
      .sourceName('Uraninite')
      .sulfurTier('rare')
      .sulfurType('metals');
  }

  //Miscs
  event
    .create('nautilus_shell_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('minecraft:nautilus_shell')
    .sourceName('Nautilus Shell')
    .sulfurTier('precious')
    .sulfurType('other_minerals');
  event
    .create('ender_pearl_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('minecraft:ender_pearl')
    .sourceName('Ender Pearl')
    .sulfurTier('rare')
    .sulfurType('gems');
  event
    .create('andesite_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('minecraft:andesite')
    .sourceName('Andesite')
    .sulfurTier('abundant')
    .sulfurType('other_minerals');
  event
    .create('cobblestone_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('minecraft:cobblestone')
    .sourceName('Cobblestone')
    .sulfurTier('abundant')
    .sulfurType('other_minerals');
  event
    .create('diorite_sulfur', 'theurgy:alchemical_sulfur')
    .sourceItem('minecraft:diorite')
    .sourceName('diorite')
    .sulfurTier('abundant')
    .sulfurType('other_minerals');

  if (Platform.isLoaded('immersiveengineering')) {
    //Powah
    event
      .create('aluminum_sulfur', 'theurgy:alchemical_sulfur')
      .sourceItem('immersiveengineering:ingot_aluminum')
      .sourceName('Aluminum')
      .sulfurTier('common')
      .sulfurType('metals');
  }
});
