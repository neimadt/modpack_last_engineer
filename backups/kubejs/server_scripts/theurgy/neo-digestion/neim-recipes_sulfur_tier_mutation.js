// ServerEvents.recipes((event) => {
//   const types = ['gems', 'metals', 'other_minerals'];
//   const tiers = [
//     { low: 'abundant', high: 'common' },
//     { low: 'common', high: 'rare' },
//     { low: 'rare', high: 'precious' },
//   ];

//   for (const type of types) {
//     for (const tier of tiers) {
//       event
//         .custom({
//           type: 'pneumaticcraft:pressure_chamber',
//           inputs: [
//             {
//               item: `theurgy:alchemical_sulfur_${type}_${tier.high}`,
//             },
//             {
//               item: 'theurgy:purified_gold',
//             },
//             { item: 'theurgy:sal_ammoniac_crystal' },
//           ],
//           pressure: 3.0,
//           results: [
//             {
//               count: 4,
//               item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
//             },
//           ],
//         })
//         .id(
//           `last_engineer:theurgy/pressure_chamber/alchemical_sulfur_${type}_${tier.low}_from_${tier.high}`
//         );

//       event
//         .custom({
//           type: 'pneumaticcraft:pressure_chamber',
//           inputs: [
//             {
//               type: 'pneumaticcraft:stacked_item',
//               count: 4,
//               item: `theurgy:alchemical_sulfur_${type}_${tier.low}`,
//             },
//             {
//               item: 'theurgy:purified_gold',
//             },
//             { item: 'theurgy:sal_ammoniac_crystal' },
//           ],
//           pressure: 3.0,
//           results: [
//             {
//               count: 1,
//               item: `theurgy:alchemical_sulfur_${type}_${tier.high}`,
//             },
//           ],
//         })
//         .id(
//           `last_engineer:theurgy/pressure_chamber/alchemical_sulfur_${type}_${tier.high}_from_${tier.low}`
//         );
//     }
//   }
// });
