ItemEvents.rightClicked('heroes:genetic_tester', (event) => {
  const player = event.player;
  const playerName = '' + player.name.string + '';

  let command = 'scoreboard players get ' + playerName + ' Heroes.Stamina.Max';

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

  command = 'scoreboard players get ' + playerName + ' Heroes.Stockpile.Energy';
  // Run the command and capture the output
  result = event.server.runCommandSilent(command);

  if (result > 0) {
    player.tell('Stockpile Energy: ' + result + '');
    // player.tell(`Your Stamina Max: ${result}`);
  } else if (result !== 0) {
    player.tell('Failed to retrieve Stockpile value.');
  } else {
    player.tell('No powers found.');
  }
});
