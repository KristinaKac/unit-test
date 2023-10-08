export function playerHealth(player) {
  if (player.health >= 50) {
    return 'healthy';
  } if (player.health < 50 && player.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortHealthPlayer(players) {
  const result = players.sort((a, b) => (a.health < b.health ? 1 : -1));
  return result;
}
