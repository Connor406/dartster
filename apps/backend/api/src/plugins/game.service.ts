import fp from "fastify-plugin"

declare module "fastify" {
  export interface FastifyInstance {
    game: {
      updatePlayers: (players: string[]) => Players
    }
  }
}

export interface Players {
  player1?: string
  player2?: string | null
  player3?: string | null
  player4?: string | null
  player5?: string | null
  player6?: string | null
}

export default fp(async fastify => {
  const game = {
    updatePlayers: (players: string[]): Players => {
      const playerUpdate: any = {}
      players.forEach((p, i) => {
        playerUpdate[`player${i + 1}`] = p
      })
      return playerUpdate
    },
  }
  fastify.decorate("game", game)
})
