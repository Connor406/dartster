import styled from "styled-components"
import { motion } from "framer-motion"
import { MountainSvg } from "@/components/Motion"

const layer1 = {
  hidden: {
    pathLength: 0,
    backgroundImage: "linear-gradient(rgb(5, 228, 244), rgb(18, 21, 31))",
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    backgroundImage: "linear-gradient(rgb(18, 21, 31), rgb(18, 21, 31))",
    opacity: 1,
  },
}

export function Index() {
  return (
    <Div
      variants={layer1}
      initial="hidden"
      animate="visible"
      transition={{
        default: { delay: 0.2, duration: 1.6, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
      }}
    >
      <MountainSvg />
      <TitleBox>
        <Title
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.6,
              type: "spring",
              delay: 1,
            },
          }}
          initial={{
            opacity: 0,
            x: 300,
            scale: 40,
          }}
        >
          app name here
        </Title>
      </TitleBox>
    </Div>
  )
}

export default Index

const Title = styled(motion.h1)`
  font-size: 7rem;
  font-family: "Comodo";
  align-self: flex-start;
  color: var(--white);
`
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Div = styled(motion.div)`
  /* background: red; */
`
