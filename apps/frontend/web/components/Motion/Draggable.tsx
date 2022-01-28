import { motion } from "framer-motion"
import { useState } from "react"
import { useMeasurePosition } from "../../util/useMeasurePosition"
import { GiDart } from "react-icons/gi"
import styled from "styled-components"
import { Box } from "@chakra-ui/react"

export default function Player({ i, user, updatePosition, updateOrder, reorder }) {
  const [isDragging, setDragging] = useState(false)
  const ref = useMeasurePosition(pos => updatePosition(i, pos))
  const MotionBox = motion(Box)

  return (
    <Li style={{ zIndex: isDragging ? 3 : 1 }}>
      <MotionBox
        padding="2em"
        bg="white"
        color="green"
        boxShadow="xl"
        mb="2rem"
        borderRadius="10px"
        drag={reorder ? "y" : false}
        layout
        ref={ref}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        key={user.username}
        animate={{
          scale: isDragging ? 1.05 : 1,
        }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onViewportBoxUpdate={(_, delta) => {
          if (isDragging) {
            updateOrder(i, delta.y.translate)
          }
        }}
        whileHover={{
          scale: 1.03,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 20px 30px -5px",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 20px 30px -5px",
        }}
      >
        {user}
        <GiDart />
      </MotionBox>
    </Li>
  )
}

const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`
