import { motion } from "framer-motion"
import { useState } from "react"
import { useMeasurePosition } from "../../util/useMeasurePosition"
import { GiDart } from "react-icons/gi"
import styled from "styled-components"

export default function Player({ i, user, updatePosition, updateOrder, reorder }) {
  const [isDragging, setDragging] = useState(false)

  const ref = useMeasurePosition(pos => updatePosition(i, pos))

  return (
    <Li style={{ zIndex: isDragging ? 3 : 1 }}>
      <Div
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
          boxShadow: "var(--level-4)",
        }}
        whileTap={{
          scale: 1.12,
          boxShadow: "var(--level-4)",
        }}
      >
        {user.username}
        <GiDart />
      </Div>
    </Li>
  )
}

const Div = styled(motion.div)`
  padding: 2em;
  background: var(--lightGrey);
  box-shadow: var(--level-3);
  margin-bottom: 2rem;
  border-radius: var(--borderRadius);
`

const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`
