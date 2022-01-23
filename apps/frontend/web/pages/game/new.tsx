import axios, { API_URL } from "@/services"
import { useState, useEffect } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { Button, Form, Input } from "@/components/styled"
import Wrapper from "@/components/Wrapper"
import PlayerCards from "@/components/Motion/PlayerCard"
import { useRouter } from "next/router"

export default function NewGame() {
  // me query return value
  const [user, setUser] = useAtom(userAtom)
  // value of search input
  const [value, setValue] = useState("")
  // results from searching players
  const [result, setResult] = useState([{ username: "", id: 1 }])
  // array of players
  const [players, setPlayers] = useState([""])
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
    setPlayers([user.username])
  }, [user])

  function selectUser(username) {
    setPlayers([...players, username])
    setResult([{ username: "", id: 1 }])
    setValue("")
  }

  function deselectUser(index) {
    if (index === players.indexOf(user.username)) return
    const Players = players
    Players.splice(index, 1)
    setPlayers([...Players])
  }

  async function createNewGame({ players, startingScore }) {
    const body = { startingScore, players }
    const { data }: any = await axios.post(`${API_URL}/game/new`, body)
    if (data) {
      router.push(`/game/${data.newGame.id}?user=${user.id}`)
      return data
    } else {
      return "Unable to create game"
    }
  }

  // Search by username
  // Autocomplete should return results
  // Click name to add user to player cards
  // Drag and drop to reorder players
  // Click button to make post request to /api/game/new route
  // If worked, should dynamically route page to `/${gameId}` page
  return (
    <Wrapper size="small" color={"var(--black)"}>
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
                <Result
                  style={{ listStyleType: "none" }}
                  key={i}
                  onClick={() => selectUser(user.username)}
                >
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
        <Button type="submit" onSubmit={onSubmit} />
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
