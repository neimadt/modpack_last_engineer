if (Platform.isLoaded('heroes')) {
  ItemEvents.rightClicked('heroes:genetic_tester', (event) => {
    const player = event.player;
    const playerName = '' + player.name.string + '';

    let command =
      'scoreboard players get ' + playerName + ' Heroes.Stamina.Max';

    // Run the command and capture the output
    let result = event.server.runCommandSilent(command);

    // Send the result as a chat message to the player
    if (result > 0) {
      player.tell('Max stamina Max: ' + result + '');
      // player.tell(`Your Stamina Max: ${result}`);
    } else if (result !== 0) {
      player.tell('Failed to retrieve stamina value.');
    } else {
      player.tell('No powers found.');
    }

    command =
      'scoreboard players get ' + playerName + ' Heroes.Stockpile.Energy';
    // Run the command and capture the output
    result = event.server.runCommandSilent(command);

    if (result > 0) {
      player.tell('Stockpile Energy: ' + result + '');
      // player.tell(`Your Stamina Max: ${result}`);
    }

    command =
      'scoreboard players get ' +
      playerName +
      ' Heroes.Ocular_Psychogenesis_Emission.Stage';
    // Run the command and capture the output
    const ocularEmissionStage = event.server.runCommandSilent(command);

    if (ocularEmissionStage > 0) {
      command =
        'scoreboard players get ' +
        playerName +
        ' Heroes.Ocular_Psychogenesis_Emission.Used.Timer';

      player.tell('Ocular Psychogenesis Stage: ' + ocularEmissionStage + '');

      const ocularControlUsedTimer =
        event.server.runCommandSilent(command) || 0;

      switch (ocularEmissionStage) {
        case 1: {
          const untilNextStage = 6200 - ocularControlUsedTimer;
          player.tell(
            'Ocular Psychogenesis Emission Stage: 1, ' +
              untilNextStage +
              ' ticks until next stage'
          );
          break;
        }
        case 2: {
          const untilNextStage = 20200 - ocularControlUsedTimer;
          player.tell(
            'Ocular Psychogenesis Emission Stage: 2, ' +
              untilNextStage +
              ' ticks until next stage'
          );
          break;
        }
        case 3: {
          player.tell('Ocular Psychogenesis Emission Final Stage 3 reached');
          break;
        }
      }
    }

    command =
      'scoreboard players get ' +
      playerName +
      ' Heroes.Ocular_Psychogenesis_Control.Stage';

    const ocularControlStage = event.server.runCommandSilent(command);

    if (ocularControlStage > 0) {
      command =
        'scoreboard players get ' +
        playerName +
        ' Heroes.Ocular_Psychogenesis_Control.Used.Timer';

      player.tell(
        'Ocular Psychogenesis Control Stage: ' + ocularControlStage + ''
      );

      const ocularControlUsedTimer =
        event.server.runCommandSilent(command) || 0;

      switch (ocularControlStage) {
        case 1: {
          const untilNextStage = 6200 - ocularControlUsedTimer;
          player.tell(
            'Ocular Psychogenesis Control Stage: 1, ' +
              untilNextStage +
              ' ticks until next stage'
          );
          break;
        }
        case 2: {
          const untilNextStage = 20200 - ocularControlUsedTimer;
          player.tell(
            'Ocular Psychogenesis Control Stage: 2, ' +
              untilNextStage +
              ' ticks until next stage'
          );
          break;
        }
        case 3: {
          player.tell('Ocular Psychogenesis Control Final Stage 3 reached');
          break;
        }
      }
    }
  });
}
