ServerEvents.recipes((event) => {
  if (!Platform.isLoaded('hexerei')) return;

  event.remove({ output: 'hexerei:mixing_cauldron' });
  event
    .shaped(Item.of('hexerei:mixing_cauldron', 1), ['R R', 'SCS', 'SSS'], {
      R: 'bloodmagic:reagentlava',
      C: 'minecraft:cauldron',
      S: 'create:brass_sheet',
    })
    .id('last_engineer:hexerei/mixing_cauldron');

  event.remove({ output: 'hexerei:mahogany_broom' });
  event
    .custom({
      type: 'hexerei:mixingcauldron',
      liquid: {
        fluid: 'minecraft:water',
      },
      ingredients: [
        {
          item: 'minecraft:netherite_ingot',
        },
        {
          item: 'hexerei:mahogany_log',
        },
        {
          item: 'hexerei:blood_bottle',
        },
        {
          item: 'minecraft:wheat',
        },
        {
          item: 'hexerei:mandrake_root',
        },
        {
          item: 'bloodmagic:reagentair',
        },
        {
          item: 'hexerei:blood_bottle',
        },
        {
          item: 'hexerei:mahogany_log',
        },
      ],
      output: {
        item: 'hexerei:mahogany_broom',
      },

      liquidOutput: {
        fluid: 'hexerei:blood_fluid',
      },
      fluidLevelsConsumed: 1000,
    })
    .id('last_engineer:hexerei/mahogany_broom');

  event.remove({ output: 'hexerei:willow_broom' });
  event
    .custom({
      type: 'hexerei:mixingcauldron',
      liquid: {
        fluid: 'minecraft:water',
      },
      ingredients: [
        {
          item: 'hexerei:blood_bottle',
        },
        {
          item: 'hexerei:willow_log',
        },
        {
          item: 'minecraft:gold_block',
        },
        {
          item: 'minecraft:wheat',
        },
        {
          item: 'hexerei:mandrake_root',
        },
        {
          item: 'bloodmagic:reagentair',
        },
        {
          item: 'minecraft:gold_block',
        },
        {
          item: 'hexerei:willow_log',
        },
      ],
      output: {
        item: 'hexerei:willow_broom',
      },

      liquidOutput: {
        fluid: 'hexerei:blood_fluid',
      },
      fluidLevelsConsumed: 1000,
    })
    .id('last_engineer:hexerei/willow_broom');

  event.remove({ output: 'hexerei:witch_hazel_broom' });
  event
    .custom({
      type: 'hexerei:mixingcauldron',
      liquid: {
        fluid: 'minecraft:water',
      },
      ingredients: [
        {
          item: 'minecraft:diamond',
        },
        {
          item: 'hexerei:witch_hazel_log',
        },
        {
          item: 'hexerei:blood_bottle',
        },
        {
          item: 'minecraft:wheat',
        },
        {
          item: 'hexerei:mandrake_root',
        },
        {
          item: 'bloodmagic:reagentair',
        },
        {
          item: 'hexerei:blood_bottle',
        },
        {
          item: 'hexerei:witch_hazel_log',
        },
      ],
      output: {
        item: 'hexerei:witch_hazel_broom',
      },

      liquidOutput: {
        fluid: 'hexerei:blood_fluid',
      },
      fluidLevelsConsumed: 1000,
    })
    .id('last_engineer:hexerei/witch_hazel_broom');
});
