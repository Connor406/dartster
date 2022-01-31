import Axios from "axios"
import https from "https"
import styled from "styled-components"
import Player from "@/components/Motion/Draggable"
import FireworkShow from "@/components/Fireworks"
import Wrapper from "@/components/Wrapper"
import GameOver from "@/components/GameOverModal"
import { axios, API_URL, useSockets } from "@/services"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { useAtomValue } from "jotai/utils"
import { userAtom } from "@/store"
import { Box, Button } from "@chakra-ui/react"
import { Form, Input } from "@/components/styled"
import { usePositionReorder } from "@/util/usePositionReorder"
import { gameAtom } from "@/store/game"
import { getUserPosition } from "@/util/parse"
import { useRouter } from "next/router"
import { gameOverAtom } from "@/store/gameOver"

interface IPlayer {
  [playerX: string]: {
    id: string
    score: number
    username: string
  }
}

interface Game {
  id: string
  winnerId: string | null
  activePlayer: string
  started: boolean
  captain: string
  players: IPlayer
}

interface Props {
  users: IPlayer[]
  query: { user: string; gameId: string }
  gameProps: Game
}

export default function Game({ users, query, gameProps }: Props) {
  useSockets()
  const me = useAtomValue(userAtom)
  const [game, setGame] = useAtom(gameAtom)
  const [order, updatePosition, updateOrder] = usePositionReorder(users)
  const [message, setMessage] = useState({ message: "", color: "black" })
  const [input, setInput] = useState(0)
  const gameOver = useAtomValue(gameOverAtom)

  const myPosition = getUserPosition(game?.players, me?.username)
  const myScore = game?.players[myPosition]?.score
  const activePlayer = game?.activePlayer
  const canReorder = !game?.started
  const router = useRouter()

  // TODO: fix jotai query so i don't have to do this
  useEffect(() => {
    setGame(gameProps as any)
  }, [])

  async function startGame() {
    if (order) {
      const players = {}
      order.map((p, i) => {
        return (players[i + 1] = { id: p.id, username: p.username, score: myScore })
      })
      const body = { id: query.gameId, players }
      const { data }: any = await axios.put(`${API_URL}/game/start`, body)
      if (!data) throw "Start failed"
      setGame(data)
    } else {
      throw new Error("unable to start game")
    }
  }

  function getNextPlayer() {
    if (game?.players[myPosition + 1]) {
      return game?.players[myPosition + 1].username
    } else {
      return game?.players[1].username
    }
  }

  async function submitScore(newScore: number) {
    try {
      const body = {
        id: query.gameId,
        players: {
          ...game.players,
          [myPosition]: { id: me.id, username: me.username, score: newScore },
        },
        nextPlayer: getNextPlayer(),
      }
      const { data }: any = await axios.put(`${API_URL}/game/score`, body)
      if (!data) {
        setMessage({ message: "Could not update score", color: "red" })
      }
      setInput(0)
    } catch (error) {
      console.log(error)
    }
  }

  async function calculateScore(e) {
    e.preventDefault()
    const newScore = myScore - Number(input)
    if (newScore < 0) {
      setMessage({ message: "Busted!", color: "black" })
      return myScore
    } else if (newScore === 0) {
      const { data }: any = await axios.put(`${API_URL}/game/win`, {
        gameId: game.id,
        winnerId: me.id,
      })
      if (!data) setMessage({ message: "Could not submit final score", color: "red" })
      return 0
    } else {
      setMessage({ message: "", color: "black" })
      await submitScore(newScore)
      return newScore
    }
  }

  return (
    <Wrapper>
      <Box minH="1.3rem" color={message.color} fontSize={".8rem"}>
        {message.message}
      </Box>
      <GameOver
        isWinner={game.winnerId === me.id}
        isOpen={gameOver.gameOver}
        onClose={() => router.push("/")}
      />
      <Players>
        {canReorder
          ? order.map((user, i) => (
              <Player
                reorder={canReorder}
                i={i}
                updateOrder={updateOrder}
                updatePosition={updatePosition}
                user={user.username}
                key={user.id}
              />
            ))
          : Object.values(game?.players).map(player => (
              <Deets key={player.username}>
                <P isActive={activePlayer === player.username}>{player.username}</P>
                <Score isActive={activePlayer === player.username}>{player.score}</Score>
              </Deets>
            ))}
      </Players>
      {canReorder && <Button onClick={startGame}>start</Button>}
      {activePlayer === me.username && !canReorder && (
        <Form onSubmit={e => calculateScore(e)}>
          <Input
            value={input}
            placeholder="enter your score"
            onChange={e => {
              e.preventDefault()
              setInput(e.target.value)
            }}
          ></Input>
          <Button type="submit" variant="sticker">
            Score
          </Button>
        </Form>
      )}
      {gameOver.winner.id === me.id && <FireworkShow />}
    </Wrapper>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const httpsAgent = new https.Agent({
    rejectUnauthorized: process.env.NEXT_PUBLIC_DART_ENV === "local" ? false : true,
  })
  const { data } = await Axios.get(`${API_URL}/game?id=${query.gameId}`, { httpsAgent })
  if (!data) throw "Bad game request"
  const users: any[] = []
  for (const p of Object.values(data?.players)) {
    // @ts-ignore
    users.push({ username: p.username, id: p.id, score: p.score })
  }
  return { props: { users, gameProps: data, query } }
}

type StyleProps = {
  isActive: boolean
}

const Players = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const P = styled.p<StyleProps>`
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--black)")};
  font-size: ${({ isActive }) => (isActive ? "2rem" : "1rem")};
`

const Score = styled.p<StyleProps>`
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--black)")};
  font-size: ${({ isActive }) => (isActive ? "2rem" : "1rem")};
  margin-left: auto;
`

const Deets = styled.div`
  display: flex;
  width: 60%;
`

const Message = styled.h1`
  margin: 0;
  margin-top: 1rem;
`
