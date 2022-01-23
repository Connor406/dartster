import axios, { API_URL } from "@/services"
import Axios from "axios"
import https from "https"
import styled from "styled-components"
import Player from "@/components/Motion/Draggable"
import Wrapper from "@/components/Wrapper"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import { Button, Form, Input } from "@/components/styled"
import { usePositionReorder } from "@/util/usePositionReorder"

interface Props {
  users: any[]
  query: { user: string; gameId: string }
}

export default function Game({ users, query }: Props) {
  // me query return value
  const [me, setMe] = useAtom(userAtom)
  const [myScore, setMyScore] = useState(me.score)
  const [scores, setScores] = useState({})
  const [message, setMessage] = useState("")
  const [input, setInput] = useState(0)
  const [playerOrder, setPlayerOrder] = useState([])
  const [activePlayer, setActivePlayer] = useState("")
  const [canReorder, setCanReorder] = useState(false)
  const [order, updatePosition, updateOrder] = usePositionReorder(users)

  useEffect(() => {
    getGameInfo().then(res => {
      const game = res.users[0].game
      console.log(res)
      setActivePlayer(game?.activePlayer)
      setMyScore(me.score)
      setCanReorder(!game?.started)
      setPlayerOrder(game.playerOrder)
      setScores(mapPlayerScores(res.users))
      if (res?.activePlayer === me.username) {
        setMessage("You're up!")
      }
    })
  }, [me, myScore])

  function mapPlayerScores(players) {
    let playerMap = {}
    for (const player of players) {
      playerMap = {
        ...playerMap,
        [player.username]: player.score,
      }
    }
    if (Object.keys(playerMap).length === players.length) {
      return playerMap
    }
  }

  async function getGameInfo() {
    const res: any = await axios.get(`${API_URL}/game?id=${query.gameId}`)
    if (res.data) {
      return res.data
    }
  }

  async function startGame() {
    if (order) {
      const players = order.map(p => {
        return p.username
      })
      const body = { id: query.gameId, players }
      const res: any = await axios.post(`${API_URL}/game/start`, body)
      if (res.data) {
        setCanReorder(false)
        setPlayerOrder(res.data.game.playerOrder)
        setActivePlayer(res.data.game.activePlayer)
      }
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
                key={user.username}
              />
            ))
          : playerOrder.map((user, i) => (
              <Deets key={user}>
                <P isActive={activePlayer === user}>{user}</P>
                <Score isActive={activePlayer === user}>{scores[user]}</Score>
              </Deets>
            ))}
      </Players>
      {canReorder && <button onClick={startGame}>start</button>}
      {activePlayer === me.username && (
        <Form onSubmit={e => calculateScore(e)}>
          <Input
            value={input}
            placeholder="enter your score, fatty."
            onChange={e => {
              e.preventDefault()
              setInput(e.target.value)
            }}
          ></Input>
          <Button type="submit" />
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
  const res: any = await Axios.get(`${API_URL}/game?id=${query.gameId}`, { httpsAgent })
  return { props: { users: res.data.users, query } }
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
