export function getUserPosition(players, username: string) {
  return Number(Object.keys(players).find(key => players[key].username === username))
}

export function getUserPositionById(players, id: string) {
  const res = Number(Object.keys(players).find(key => players[key].id === id))
  return res
}
