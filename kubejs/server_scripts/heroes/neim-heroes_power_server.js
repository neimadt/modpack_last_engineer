function getPlayerLog(event) {
  const player = event.player;

  if (player && typeof player.tell === 'function') {
    return function (log) {
      player.tell(log);
    };
  }

  return function (log) {
    console.log(log);
  };
}

const standard_proximity_effect_1 =
  'particle minecraft:sculk_charge_pop ~ ~2.3 ~ 0 0 0 0 1 normal @a[scores={Powers.<POWER>=1..},distance=1..10]';
const standard_proximity_effect_2 =
  'playsound minecraft:block.conduit.ambient block @a[scores={Powers.<POWER>=1..},distance=1..10] ~ ~ ~ 0.2 0.2';

const allowedEntityDico = {
  'minecraft:villager': { chance: 15.0, tier: 'low' },
  'minecraft:pillager': { chance: 5.0, tier: 'low' },
  'minecraft:wandering_trader': { chance: 22.0, tier: 'low' },
  'minecraft:zombie_villager': { chance: 10.0, tier: 'low' },
  'minecraft:witch': { chance: 32.0, tier: 'low' },
  'minecraft:piglin': { chance: 2.5, tier: 'low' },
  'minecraft:piglin_brute': { chance: 5.0, tier: 'mid' },
  'guardvillagers:guard': { chance: 20.0, tier: 'low' },
  'guardvillagers:illusioner': { chance: 25.0, tier: 'mid' },
  'takesapillage:skirmisher': { chance: 8.0, tier: 'mid' },
  'takesapillage:legioner': { chance: 8.0, tier: 'mid' },
  'takesapillage:archer': { chance: 7.5, tier: 'low' },
  'hunters_return:hunter': { chance: 10.0, tier: 'low' },
  'born_in_chaos_v1:zombie_fisherman': { chance: 10.0, tier: 'low' },
  'born_in_chaos_v1:zombie_lumberjack': { chance: 10.0, tier: 'low' },
  'enemyexpansion:sprinter': { chance: 10.0, tier: 'low' },
  'enemyexpansion:slugger': { chance: 10.0, tier: 'mid' },
  'mutantmonsters:mutant_zombie': { chance: 85.0, tier: 'high' },
  'kenjiscombatforms:undead_sensei': { chance: 18.0, tier: 'mid' },
  'kenjiscombatforms:exiled_sensei': { chance: 12.0, tier: 'high' },
  'kenjiscombatforms:exiled_devil': { chance: 17.0, tier: 'high' },
  'kenjiscombatforms:ability_trader': { chance: 18.0, tier: 'mid' },
  'shifu_epic_fight_skill_recipe:martialbandit': { chance: 15.0, tier: 'mid' },
  'shifu_epic_fight_skill_recipe:rogue': { chance: 15.0, tier: 'mid' },
  'shifu_epic_fight_skill_recipe:martialbanditleader': {
    chance: 75.0,
    tier: 'high',
  },
  'shifu_epic_fight_skill_recipe:bandit_captain': {
    chance: 45.0,
    tier: 'high',
  },
  'shifu_epic_fight_skill_recipe:banditking': {
    chance: 90.0,
    tier: 'high',
  },
};

const f_TierPowers = [
  'NightVision',
  'WaterWalk',
  'Luminescent',
  'String_Generation',
  'Suffocation_Immunity',
  'Wall_Climbing',
  'Chromatic_Synthesis',
];

const c_TierPowers = [
  'Attraction_Of_Small_Objects',
  'Water_Breathing',
  'Bone_Protrusion',
  'Age_Shifting',
  'Gold_Mimicry',
  'Stockpile',
  'Danger_Sense',
];

const b_TierPowers = [
  'Augmented_Movement_Potential',
  'Geokinetic_Armor',
  'Muscle_Inducement',
  'Levitation',
  'Pocket_Reality',
  'Parallel_Processing',
  'Ability_Replication',
  'Spatial_Armaments',
];

const a_TierPowers = [
  'PyroKinesis',
  'CryoKinetic_Armoury',
  'Catalyst',
  'Super_Strength',
  'Clairvoyance',
];

const s_TierPowers = [
  'Ability_Absorption',
  'Rapid_Cellular_Regeneration',
  'Kitsune_Mimicry',
  'Space_Time_Manipulation',
  'Ocular_Psychogenesis',
  'Ocular_Psychogenesis_Control',
  'Ocular_Psychogenesis_Emission',
];

const ss_TierPowers = [
  'Ability_Transferal',
  'Empathic_Mimicry',
  'Intuitive_Aptitude',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomPower(tier) {
  const chance_1 = getRandomInt(1, 100);
  const chance_2 = getRandomInt(1, 100);
  const chance = Math.round((chance_1 + chance_2) / 2);

  let powers = null;

  switch (tier) {
    case 'high': {
      if (chance <= 15) {
        powers = b_TierPowers;
      } else if (chance <= 60) {
        powers = a_TierPowers;
      } else if (chance <= 85) {
        powers = s_TierPowers;
      } else {
        powers = ss_TierPowers;
      }
      break;
    }

    case 'mid': {
      if (chance <= 15) {
        powers = c_TierPowers;
      } else if (chance <= 25) {
        powers = b_TierPowers;
      } else if (chance <= 35) {
        powers = a_TierPowers;
      } else if (chance <= 90) {
        powers = s_TierPowers;
      } else {
        powers = ss_TierPowers;
      }
      break;
    }

    case 'low': {
      // F Tier
      if (chance <= 15) {
        powers = f_TierPowers;
      }
      // C Tier
      else if (chance <= 35) {
        powers = c_TierPowers;
      }
      // B Tier
      else if (chance <= 70) {
        powers = b_TierPowers;
      }
      // A Tier
      else if (chance <= 90) {
        powers = a_TierPowers;
      }
      // S Tier
      else if (chance <= 96) {
        powers = s_TierPowers;
      }
      // SS Tier
      else {
        powers = ss_TierPowers;
      }
      break;
    }
  }

  // Return a random power from the selected tier (if available)
  if (powers && powers.length > 0) {
    const abilityIndex = Math.floor(Math.random() * powers.length);
    return powers[abilityIndex];
  }

  return null; // Fallback if no powers were assigned
}

ServerEvents.loaded((event) => {
  const allPowers = [
    f_TierPowers,
    c_TierPowers,
    b_TierPowers,
    a_TierPowers,
    s_TierPowers,
    ss_TierPowers,
  ];

  for (const powers of allPowers) {
    for (const power of powers) {
      event.server.runCommandSilent(
        `execute run scoreboard objectives add Powers.${power} dummy`
      );
      event.server.runCommandSilent(
        `execute run scoreboard objectives add Powers.Intuitive.${power} dummy`
      );
    }
  }

  console.log('NBC Heroes: Scoreboard objectives initialized.');
});

// When a mob spawns, apply the NBC Heroes power
EntityEvents.spawned((event) => {
  const entity = event.entity;

  if (
    entity.persistentData['HeroesPowerGiven'] ||
    entity.persistentData['NoHeroesPower']
  ) {
    return;
  }

  const entityFound = allowedEntityDico[entity.type];

  if (!entityFound) return;

  const { chance: applyPowerChance, tier } = entityFound;

  if (!(applyPowerChance > 0)) {
    return;
  }

  const chance = Math.random() * 100;

  const applyPower = chance < applyPowerChance;

  if (!applyPower) {
    entity.persistentData.put('NoHeroesPower', true);
    return;
  }

  let ability = getRandomPower(tier);

  if (!ability) {
    entity.persistentData.put('NoHeroesPower', true);
    return;
  }

  event.server.scheduleInTicks(8, () => {
    entity.persistentData.put('HeroesPowerGiven', ability);

    let command = '',
      commandResult;

    const powers =
      ability === 'Ocular_Psychogenesis'
        ? ['Ocular_Psychogenesis_Control', 'Ocular_Psychogenesis_Emission']
        : [ability];

    const username = entity.uuid.toString();
    const scoreboard = entity.server.getScoreboard();

    for (const power of powers) {
      const scoreboardObjective = scoreboard.getObjective('Powers.' + power);

      if (!scoreboardObjective) continue;

      command = `execute run scoreboard players set ${username} Powers.${power} 1`;
      commandResult = entity.server.runCommandSilent(command);
    }

    entity.addTag('Heroes.Enabled');

    entity.customName =
      'Powered' +
      (entity.name && entity.name.string ? ` ${entity.name.string}` : '');
    entity.setCustomNameVisible(false); // Hide name from players
  });
});

EntityEvents.death((event) => {
  const entity = event.entity;

  const ability = entity.persistentData['HeroesPowerGiven'];

  if (!ability) return;

  const brainBlock = entity.block.createEntity('minecraft:item');

  const entityName =
    (entity?.name?.string ? entity.name.string : entity?.name ?? null) ??
    'Someone';

  const brain = Item.of('heroes:brain', `{Ability_User: 1b}`).withName(
    Text.yellow(entityName + "'s Brain").italic(false)
  );

  brain.orCreateTag.merge(`{Powers.${ability}: 1b}`);

  brainBlock.item = brain;

  brainBlock.spawn();
});
