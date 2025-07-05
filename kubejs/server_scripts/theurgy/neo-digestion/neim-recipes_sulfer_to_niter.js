// ServerEvents.recipes((event) => {
//   const types = ['gems', 'metals', 'other_minerals'];
//   const tiersList = ['abundant', 'common', 'rare', 'precious'];

//   for (const type of types) {
//     for (const tier of tiersList) {
//       event
//         .custom({
//           type: 'create:mixing',
//           heatRequirement: 'superheated',
//           ingredients: [
//             { fluid: 'minecraft:water', amount: 300 },
//             { item: 'minecraft:sugar' },
//             { tag: `theurgy:alchemical_sulfurs/${type}/${tier}` },
//           ],
//           results: [{ item: `theurgy:alchemical_sulfur_${type}_${tier}` }],
//         })
//         .id(
//           `last_engineer:theurgy/mixing/alchemical_sulfur_${type}_${tier}_from_${tier}_and_sugar_superheated`
//         );

//       event
//         .custom({
//           type: 'create:mixing',
//           heatRequirement: 'superheated',
//           ingredients: [
//             { fluid: 'minecraft:water', amount: 300 },
//             {
//               tag: 'forge:crops',
//             },
//             { tag: `theurgy:alchemical_sulfurs/${type}/${tier}` },
//           ],
//           results: [{ item: `theurgy:alchemical_sulfur_${type}_${tier}` }],
//         })
//         .id(
//           `last_engineer:theurgy/mixing/alchemical_sulfur_${type}_${tier}_from_${tier}_and_crops_superheated`
//         );

//       event
//         .custom({
//           type: 'create:mixing',
//           heatRequirement: 'heated',
//           ingredients: [
//             { fluid: 'minecraft:water', amount: 300 },
//             { tag: `theurgy:alchemical_sulfurs/${type}/${tier}` },
//             { item: 'ae2:certus_quartz_dust' },
//           ],
//           results: [{ item: `theurgy:alchemical_sulfur_${type}_${tier}` }],
//         })
//         .id(
//           `last_engineer:theurgy/mixing/alchemical_sulfur_${type}_${tier}_from_${tier}_heated`
//         );
//     }
//   }
// });
