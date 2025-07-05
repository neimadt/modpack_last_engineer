ServerEvents.recipes((event) => {
  if (Platform.isLoaded('mininggadgets')) {
    event.remove({ output: 'mininggadgets:upgrade_empty' });
    event
      .shaped(
        Item.of('mininggadgets:upgrade_empty', 1),
        ['BLB', 'PGP', 'BLB'],
        {
          B: 'bloodmagic:reagentbinding',
          L: 'minecraft:lapis_lazuli',
          P: 'occultism:spirit_attuned_gem',
          G: '#forge:glass_panes',
        }
      )
      .id('last_engineer:mininggadgets/upgrade_empty');

    event.remove({ output: 'mininggadgets:mininggadget_simple' });
    event
      .shaped(
        Item.of('mininggadgets:mininggadget_simple', 1),
        ['PSS', 'PBR', 'PSC'],
        {
          P: 'occultism:spirit_attuned_gem',
          S: 'create:iron_sheet',
          B: 'mininggadgets:upgrade_empty',
          R: 'bloodmagic:reagentfastminer',
          C: 'ae2:logic_processor',
        }
      )
      .id('last_engineer:mininggadgets/mininggadget_simple');

    event.remove({ output: 'mininggadgets:mininggadget_fancy' });
    event
      .shaped(
        Item.of('mininggadgets:mininggadget_fancy', 1),
        ['PSC', 'PBR', 'PSS'],
        {
          P: 'occultism:spirit_attuned_gem',
          S: 'create:iron_sheet',
          B: 'mininggadgets:upgrade_empty',
          R: 'bloodmagic:reagentfastminer',
          C: 'ae2:logic_processor',
        }
      )
      .id('last_engineer:mininggadgets/mininggadget_fancy');

    event.remove({ output: 'mininggadgets:mininggadget' });
    event
      .shaped(Item.of('mininggadgets:mininggadget', 1), ['PSC', 'PBR', 'PSC'], {
        P: 'occultism:spirit_attuned_gem',
        S: 'create:iron_sheet',
        B: 'mininggadgets:upgrade_empty',
        R: 'bloodmagic:reagentfastminer',
        C: 'ae2:logic_processor',
      })
      .id('last_engineer:mininggadgets/mininggadget');
  }

  if (Platform.isLoaded('buildinggadgets2')) {
    event.remove({ output: 'buildinggadgets2:gadget_building' });
    event
      .shaped(
        Item.of('buildinggadgets2:gadget_building', 1),
        ['SVS', 'PVP', 'SES'],
        {
          S: 'create:iron_sheet',
          V: 'bloodmagic:reagentvoid',
          P: 'occultism:spirit_attuned_gem',
          E: 'integrateddynamics:logic_programmer',
        }
      )
      .id('last_engineer:buildinggadgets/gadget_building');

    event.remove({ output: 'buildinggadgets2:gadget_exchanging' });
    event
      .shaped(
        Item.of('buildinggadgets2:gadget_exchanging', 1),
        ['SVS', 'PEP', 'SES'],
        {
          S: 'create:iron_sheet',
          V: 'bloodmagic:reagentvoid',
          P: 'occultism:spirit_attuned_gem',
          E: 'createaddition:small_light_connector',
        }
      )
      .id('last_engineer:buildinggadgets/gadget_exchanging');

    event.remove({ output: 'buildinggadgets2:gadget_copy_paste' });
    event
      .shaped(
        Item.of('buildinggadgets2:gadget_copy_paste', 1),
        ['SVS', 'PBP', 'SES'],
        {
          S: 'create:iron_sheet',
          V: 'bloodmagic:reagentvoid',
          P: 'occultism:demons_dream_essence',
          E: 'ae2:calculation_processor',
          B: 'integrateddynamics:variable_transformer_input',
        }
      )
      .id('last_engineer:buildinggadgets/gadget_copy_paste');

    event.remove({ output: 'buildinggadgets2:gadget_cut_paste' });
    event
      .shaped(
        Item.of('buildinggadgets2:gadget_cut_paste', 1),
        ['SVS', 'PBP', 'RER'],
        {
          S: 'create:iron_sheet',
          V: 'bloodmagic:reagentvoid',
          P: 'occultism:demons_dream_essence',
          E: 'ae2:calculation_processor',
          B: 'integrateddynamics:variable_transformer_input',
          R: 'minecraft:shears',
        }
      )
      .id('last_engineer:buildinggadgets/gadget_cut_paste');

    event.remove({ output: 'buildinggadgets2:gadget_destruction' });
    event
      .shaped(
        Item.of('buildinggadgets2:gadget_destruction', 1),
        ['SVS', 'PBP', 'RER'],
        {
          S: 'create:iron_sheet',
          V: 'bloodmagic:reagentvoid',
          P: 'occultism:demons_dream_essence',
          E: 'ae2:calculation_processor',
          B: 'integrateddynamics:variable',
          R: '#forge:ender_pearls',
        }
      )
      .id('last_engineer:buildinggadgets/gadget_destruction');
  }
});
