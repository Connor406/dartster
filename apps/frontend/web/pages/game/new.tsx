import Wrapper from "@/components/Wrapper"
import PlayerCards from "@/components/Motion/PlayerCard"
import styled from "styled-components"
import { axios, API_URL } from "@/services"
import { useState, useEffect } from "react"
import { userAtom } from "@/store"
import { SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, FormControl, Input, Text, Select, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useAtomValue } from "jotai/utils"
import New from "@/components/Text/New"
import Game from "@/components/Text/Game"
import { UseResponsiveCheck } from "@/hooks"

export default function NewGame() {
  // me query return value
  const me = useAtomValue(userAtom)
  // value of search input
  const [value, setValue] = useState("")
  // results from searching players
  const [result, setResult] = useState([{ username: "", id: "1" }])
  // array of players
  const [players, setPlayers] = useState([{ id: "1", username: "" }])
  // form shit
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<{ startingScore: string | number }> = async data => {
    await createNewGame({ startingScore: Number(data.startingScore), players })
  }

  const router = useRouter()
  const { isMobile } = UseResponsiveCheck()

  async function searchUsers(value) {
    if (value && value.length > 2) {
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
    setPlayers([{ id: me.id, username: me.username }])
  }, [me])

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
    <Wrapper size="small" bgColor="black">
      <Flex justifyContent="center" flexDir={isMobile ? "column" : "row"} alignItems="center">
        <New />
        <Game />
      </Flex>
      <PlayerCards players={players} me={me.username} deselect={deselectUser} />
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          mb="1rem"
          placeholder="search players by username"
          onChange={e => {
            setValue(e.target.value)
          }}
          value={value}
          borderColor="neonBlue"
          bg="black"
          color="white"
          _hover={{
            borderColor: "pink",
          }}
          _focus={{
            borderColor: "neonPink",
          }}
          _autofill={{
            textFillColor: "#83EEFF",
            boxShadow: "0 0 0px 100px #12151f inset",
          }}
        />
        <Box display="flex" w="100%" justifyContent="center" h="3.5rem">
          {result.map((user, i) => {
            return (
              user.username && (
                <Button
                  bg="black"
                  color="blue"
                  _hover={{
                    color: "neonBlue",
                  }}
                  mx=".5rem"
                  key={i}
                  onClick={() => selectUser(user)}
                >
                  {user.username}
                </Button>
              )
            )
          })}
        </Box>
        <Box display="flex" flexWrap="wrap" w="100%" minW="300px" justifyContent="space-evenly">
          <Select
            as="select"
            w="30%"
            placeholder="Score"
            {...register("startingScore", { required: true })}
            borderColor="neonBlue"
            bg="black"
            color="white"
            _hover={{
              borderColor: "pink",
            }}
            _focus={{
              borderColor: "neonPink",
            }}
            _autofill={{
              textFillColor: "#83EEFF",
              boxShadow: "0 0 0px 100px #12151f inset",
            }}
          >
            <option value="101">101</option>
            <option value="201">201</option>
            <option value="301">301</option>
            <option value="401">401</option>
            <option value="501">501</option>
          </Select>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            bg="black"
            border="1px solid #ff37d497"
            color="pink"
            _hover={{
              border: "1px solid #ff37d4",
              color: "neonPink",
            }}
          >
            Start
          </Button>
        </Box>
      </FormControl>
    </Wrapper>
  )
}
