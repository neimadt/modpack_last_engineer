ServerEvents.recipes((event) => {
  if (
    !Platform.isLoaded('undead_revamp2') ||
    !Platform.isLoaded('immersiveengineering')
  )
    return;

  event
    .custom({
      type: 'immersiveengineering:cloche',
      input: { item: 'undead_revamp2:arapholia' },
      render: { type: 'generic', block: 'undead_revamp2:arapholia' },
      results: [{ item: 'undead_revamp2:arapholia' }],
      soil: { item: 'minecraft:dirt' },
      time: 520,
    })
    .id('last_engineer:immersiveengineering/arapholia');
});
