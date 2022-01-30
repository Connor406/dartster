export function getUserPosition(players, username: string) {
  return Number(Object.keys(players).find(key => players[key].username === username))
}
