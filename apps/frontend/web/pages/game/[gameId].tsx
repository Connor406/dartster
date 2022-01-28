import axios, { API_URL, socket } from "@/services"
import Axios from "axios"
import https from "https"
import styled from "styled-components"
import Player from "@/components/Motion/Draggable"
import Wrapper from "@/components/Wrapper"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import { Button } from "@chakra-ui/react"
import { Form, Input } from "@/components/styled"
import { usePositionReorder } from "@/util/usePositionReorder"
import { gameAtom } from "@/store/game"

interface IPlayer {
  [playerX: string]: {
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
  users: any[]
  query: { user: string; gameId: string }
  gameProps: Game
}

export default function Game({ users, query, gameProps }: Props) {
  // me query return value
  const [me, setMe] = useAtom(userAtom)
  const [game, setGame] = useAtom(gameAtom)
  const [myScore, setMyScore] = useState(game?.players["player1"].score)
  const [message, setMessage] = useState("")
  const [input, setInput] = useState(0)
  const [playerOrder, setPlayerOrder] = useState([])
  const [activePlayer, setActivePlayer] = useState("")
  const [order, updatePosition, updateOrder] = usePositionReorder(users)

  const canReorder = !game?.started

  socket.on("score", ({ user, game }) => {
    setGame(game)
    console.log({ user, game })
  })

  // TODO: fix jotai query so i don't have to do this
  useEffect(() => {
    setGame(gameProps as any)
  }, [])

  useEffect(() => {
    tempStateSetterThatShouldBeRefactored()
    setActivePlayer(game?.activePlayer)
  }, [me, game, activePlayer])

  function tempStateSetterThatShouldBeRefactored() {
    const playerOrder = []
    if (!game) return
    for (const p of Object.values(game?.players) as any) {
      if (p.username === me.username) setMyScore(p.score)
      playerOrder.push(p.username)
    }
    setPlayerOrder(playerOrder)
  }

  async function startGame() {
    if (order) {
      const players = {}
      order.map((p, i) => {
        return (players[`player${i + 1}`] = { username: p, score: myScore })
      })
      const body = { id: query.gameId, players }
      const { data }: any = await axios.post(`${API_URL}/game/start`, body)
      if (!data) throw "Start failed"
      setGame(data)
    } else {
      throw new Error("unable to start game")
    }
  }

  function getNextPlayer() {
    const myIndex = order.findIndex(user => user?.username === me?.username)
    if (myIndex + 1 < order.length) {
      return order[myIndex + 1]?.username
    } else {
      return order[0]?.username
    }
  }

  async function submitScore(roundScore: number) {
    try {
      const body = {
        id: me.id,
        gameId: query.gameId,
        score: roundScore,
        nextPlayer: getNextPlayer(),
      }
      const { data }: any = await axios.post(`${API_URL}/game/update-score`, body)
      if (data) {
        setMyScore(data.user.score)
        setActivePlayer(data.game.activePlayer)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function calculateScore(e) {
    e.preventDefault()
    const roundScore = myScore - Number(input)
    if (roundScore < 0) {
      setMessage("Busted")
      return myScore
    } else if (roundScore === 0) {
      setMessage("You win!")
      // should probably send winnerId to the DB
      return 0
    } else {
      setMessage("")
      await submitScore(roundScore)
      return roundScore
    }
  }

  return (
    <Wrapper>
      <Message>{message}</Message>
      <Players>
        {canReorder
          ? order.map((user, i) => (
              <Player
                reorder={canReorder}
                i={i}
                updateOrder={updateOrder}
                updatePosition={updatePosition}
                user={user}
                key={user}
              />
            ))
          : playerOrder?.map((user, i) => (
              <Deets key={user}>
                <P isActive={activePlayer === user}>{user}</P>
                <Score isActive={activePlayer === user}>
                  {Object.values(game?.players).filter(p => p.username === user)[0].score}
                </Score>
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
  for (const p of Object.values(data.players)) {
    // @ts-ignore
    users.push(p.username)
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
