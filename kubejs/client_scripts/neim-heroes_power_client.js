const locateAbilities = [
  'ability_absorption',
  'empathic_mimicry',
  'interplay',
  'intuitive_aptitude',
  'ability_replication',
];

ClientEvents.tick((event) => {
  const player = event.player;
  if (!player) return;

  const scoreboard = player.getScoreboard();

  let allowed = false;

  const palladiumNbt = player.getNbt().get('Palladium');

  if (palladiumNbt && palladiumNbt.Powers) {
    if (
      palladiumNbt.Powers['heroes:ocular_psychogenesis'] &&
      palladiumNbt.Powers['heroes:ocular_psychogenesis'].Ocular_Awakening &&
      palladiumNbt.Powers['heroes:ocular_psychogenesis'].Ocular_Awakening
        .bought >= 1
    ) {
      allowed = 'ocular_psychogenesis';
    } else {
      for (const ability of locateAbilities) {
        allowed = palladiumNbt.Powers[`heroes:${ability}`] ? ability : false;

        if (allowed) break;
      }
    }
  }

  if (!allowed) return;

  let searchArea = AABB.of(
    player.x - 10,
    player.y - 10,
    player.z - 10,
    player.x + 10,
    player.y + 10,
    player.z + 10
  );

  const entitiesFound = [];

  // Get all "powered" entities (Villagers and Pillagers tagged with Heroes.Enabled)
  const entitiesWithin = player.level.getEntitiesWithin(searchArea);

  //   console.log(`entitiesWithin: ${entitiesWithin.size()}`);

  entitiesWithin.forEach((entity) => {
    if (entity.type === 'minecraft:player') return;

    const customName = entity.customName ? entity.customName.string : null;

    // console.log(`entity customName: ${customName}`);

    if (!customName) return false;

    let valid = !!(
      customName && customName.toLowerCase().startsWith('powered')
    );

    // try {
    //   let nameData = JSON.parse(customName);
    //   valid = !!(nameData && nameData.heroesEnabled === true);
    // } catch (e) {
    //   valid = false;
    // }

    if (!valid) return;

    // if (entity.tags.contains('Heroes.Enabled')) {
    entitiesFound.push(entity.type);

    const height = entity.boundingBox.ysize ?? 1.8;

    player.level.spawnParticles(
      'minecraft:sculk_charge_pop',
      true,
      entity.x,
      entity.y + 0.5 + height, // Above their head
      entity.z,
      1,
      0,
      0,
      0,
      0
    );
    // }
  });
});
