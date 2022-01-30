import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { GiCutDiamond, GiImperialCrown } from "react-icons/gi"

interface Props {
  players?: { id: string; username: string }[]
  me: string
  deselect: (id: string) => void
}

export default function PlayerCards({ players, me, deselect }: Props) {
  return (
    <Wrap>
      {players.map((player, index) => {
        const isMe = me === player.username
        return (
          <div key={index} onClick={() => deselect(player.id)}>
            <Card isMe={isMe}>
              <Text>{player.username}</Text>
              {isMe ? <Crown /> : <Diamond />}
            </Card>
          </div>
        )
      })}
    </Wrap>
  )
}

type StyleProps = {
  isMe: boolean
}

const Card = styled(motion.div)<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ isMe }) => (isMe ? "var(--gold)" : "var(--green)")};
  border-radius: 50%;
  box-shadow: var(--level-3);
  width: 6rem;
  height: 6rem;
  margin: 1rem;
  transition: ease-in-out 0.1s;
  ${({ isMe }) =>
    isMe
      ? ""
      : "&:hover {background-color: var(--lightGrey); border: #ff000083 6px solid; color: #ff000083;}"}
`
const Text = styled(motion.p)`
  font-size: 0.8rem;
  margin: 0;
`

const Wrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Diamond = styled(GiCutDiamond)`
  font-size: 2rem;
`
const Crown = styled(GiImperialCrown)`
  font-size: 2rem;
  color: var(--gold);
`
