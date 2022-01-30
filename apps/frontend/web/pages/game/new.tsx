import axios, { API_URL } from "@/services"
import { useState, useEffect } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Form, Input } from "@/components/styled"
import { Button } from "@chakra-ui/react"
import Wrapper from "@/components/Wrapper"
import PlayerCards from "@/components/Motion/PlayerCard"
import { useRouter } from "next/router"

export default function NewGame() {
  // me query return value
  const [user, setUser] = useAtom(userAtom)
  // value of search input
  const [value, setValue] = useState("")
  // results from searching players
  const [result, setResult] = useState([{ username: "", id: "1" }])
  // array of players
  const [players, setPlayers] = useState([{ id: "1", username: "" }])
  console.log(players)
  // form shit
  const { register, handleSubmit } = useForm()
  const onSubmit = data => createNewGame({ startingScore: Number(data.startingScore), players })

  const router = useRouter()

  async function searchUsers(value) {
    if (value && value.length > 1) {
      const { data } = await axios.get(`${API_URL}/user?username=${value}`)
      if (data) {
        setResult(data as any)
      }
    }
  }

  useEffect(() => {
    try {
      searchUsers(value)
    } catch (error) {
      console.log(error)
    }
  }, [value])
  // sets current user to first player
  useEffect(() => {
    setPlayers([{ id: user.id, username: user.username }])
  }, [user])

  function selectUser(user) {
    setPlayers([...players, user])
    setResult([{ username: "", id: "1" }])
    setValue("")
  }

  function deselectUser(id: string) {
    const playerArr = Object.values(players)
    playerArr.forEach(player => {
      if (id !== player.id) return
      const Players = players
      Players.splice(Players.indexOf(player), 1)
      setPlayers([...Players])
    })
  }

  async function createNewGame({ players, startingScore }) {
    const playerMap = {}
    players.forEach(
      (p, i) => (playerMap[i + 1] = { id: p.id, username: p.username, score: startingScore })
    )
    const { data }: any = await axios.post(`${API_URL}/game/new`, playerMap)
    if (data) {
      router.push(`/game/${data.id}`)
      return data
    } else {
      return "Unable to create game"
    }
  }

  return (
    <Wrapper size="small">
      <Title>New game</Title>
      <PlayerCards players={players} me={user.username} deselect={deselectUser} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="search players by username"
          onChange={e => {
            setValue(e.target.value)
          }}
          value={value}
        />
        <ResultWrap>
          {result.map((user, i) => {
            return (
              user.username && (
                <Result style={{ listStyleType: "none" }} key={i} onClick={() => selectUser(user)}>
                  {user.username}
                </Result>
              )
            )
          })}
        </ResultWrap>
        <Select {...register("startingScore")}>
          <option value="101">101</option>
          <option value="201">201</option>
          <option value="301">301</option>
          <option value="401">401</option>
          <option value="501">501</option>
        </Select>
        <Button type="submit" onSubmit={onSubmit}>
          Start
        </Button>
      </Form>
    </Wrapper>
  )
}

const Select = styled.select`
  margin: 1rem;
`

const ResultWrap = styled.ul`
  min-height: 2rem;
`
const Result = styled.button`
  margin: 0px 1rem;
`

const Title = styled.h1`
  margin: 0;
`
