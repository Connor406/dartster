import { Box } from "@chakra-ui/react"
import { easeInOut } from "@popmotion/popcorn"
import { motion } from "framer-motion"

// Colors from theme
const pink = "#ff37d497"
const blue = "#83eeffb5"

const variants = {
  "0": {
    scale: [1, 1.5, 1],
    rotate: [0, 1, 0],
    stroke: [pink, blue, pink],
    strokeWidth: [1, 0.6, 1],
    pathLength: [1, 0.8, 1, 1, 0.4, 1, 1],
  },
  "1": {
    scale: [1, 1.3, 1],
    rotate: [0, -1, 0],
    stroke: [blue, pink, blue],
    strokeWidth: [1, 0.6, 1],
    pathLength: [1, 0.2, 1, 0.8, 1, 1],
  },
}

const transition = [
  {
    duration: 16,
    repeat: Infinity,
    ease: easeInOut,
  },
  {
    duration: 10,
    repeat: Infinity,
    ease: easeInOut,
  },
  {
    duration: 14,
    repeat: Infinity,
    ease: easeInOut,
  },
  {
    duration: 15,
    repeat: Infinity,
    ease: easeInOut,
  },
  {
    duration: 27,
    repeat: Infinity,
    ease: easeInOut,
  },
]

function randVariant() {
  return Math.floor(Math.random() * 2).toString()
}

function randTransition() {
  return Math.floor(Math.random() * 5)
}

export function LandingTriangle() {
  return (
    <Box pos="fixed" h="100vh" w="100vw" overflow="hidden" zIndex="-1" bg="black">
      <svg
        width="inherit"
        height="inherit"
        preserveAspectRatio="xMinYMid slice"
        viewBox="2797.502 689.839 500 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="matrix(1, 0, 0, 1, 2797.501709, 689.839417)">
          <motion.path
            d="M 262 137 L 208 132 L 226 193 Z"
            fill="rgb(83,35,85)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 208 132 L 181 157 L 226 193 Z"
            fill=" rgb(80,39,86)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 226 193 L 261 217 L 262 137 Z"
            fill=" rgb(82,29,81)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 328 162 L 272 82 L 262 137 Z"
            fill=" rgb(79,37,84)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 262 137 L 232 69 L 208 132 Z"
            fill=" rgb(77,45,88)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 272 82 L 232 69 L 262 137 Z"
            fill=" rgb(75,47,89)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 208 132 L 142 93 L 181 157 Z"
            fill=" rgb(73,50,90)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 100 158 L 147 193 L 181 157 Z"
            fill=" rgb(72,47,87)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 181 157 L 147 193 L 226 193 Z"
            fill=" rgb(76,40,84)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 226 193 L 204 273 L 261 217 Z"
            fill=" rgb(76,28,76)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 261 217 L 328 162 L 262 137 Z"
            fill=" rgb(82,27,80)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 261 217 L 326 215 L 328 162 Z"
            fill=" rgb(79,23,76)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 232 69 L 142 93 L 208 132 Z"
            fill=" rgb(68,54,91)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 272 82 L 233 45 L 232 69 Z"
            fill=" rgb(67,48,84)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 232 69 L 179 33 L 142 93 Z"
            fill=" rgb(58,56,87)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 204 273 L 292 259 L 261 217 Z"
            fill=" rgb(69,23,68)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 261 217 L 292 259 L 326 215 Z"
            fill=" rgb(75,21,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 147 193 L 204 273 L 226 193 Z"
            fill=" rgb(74,35,79)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 147 193 L 178 277 L 204 273 Z"
            fill=" rgb(63,35,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 142 93 L 100 158 L 181 157 Z"
            fill=" rgb(70,53,91)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 147 193 L 77 268 L 178 277 Z"
            fill=" rgb(58,41,74)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 233 45 L 179 33 L 232 69 Z"
            fill=" rgb(57,45,75)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 142 93 L 90 69 L 100 158 Z"
            fill=" rgb(57,57,88)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 100 158 L 95 194 L 147 193 Z"
            fill=" rgb(66,46,83)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 415 164 L 354 73 L 328 162 Z"
            fill=" rgb(77,30,78)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 328 162 L 354 73 L 272 82 Z"
            fill="rgb(74,41,84)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 272 82 L 293 14 L 233 45 Z"
            fill=" rgb(60,39,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 343 37 L 293 14 L 272 82 Z"
            fill=" rgb(58,36,67)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 233 45 L 229.35135135135135 0 L 204.5483870967742 0 L 179 33 Z"
            fill=" rgb(46,33,55)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 178 277 L 203.48648648648648 300 L 213.8780487804878 300 L 204 273 Z"
            fill=" rgb(50,28,57)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 204 273 L 213.8780487804878 300 L 237.5818181818182 300 L 292 259 Z"
            fill=" rgb(56,23,57)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 292 259 L 345 269 L 326 215 Z"
            fill=" rgb(67,18,64)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 326 215 L 392 212 L 328 162 Z"
            fill=" rgb(77,20,73)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 282.94805194805195 300 L 312.6119402985075 300 L 345 269 L 292 259 Z"
            fill=" rgb(53,17,51)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 354 73 L 343 37 L 272 82 Z"
            fill=" rgb(64,43,78)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 345 269 L 392 212 L 326 215 Z"
            fill=" rgb(71,16,67)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 108 36 L 90 69 L 142 93 Z"
            fill=" rgb(46,60,86)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 100 158 L 53 159 L 95 194 Z"
            fill="rgb(61,39,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 146.7674418604651 0 L 130.69565217391303 0 L 108 36 L 179 33 Z"
            fill=" rgb(37,42,60)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 179 33 L 108 36 L 142 93 Z"
            fill=" rgb(48,56,82)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 90 69 L 53 159 L 100 158 Z"
            fill=" rgb(57,45,75)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 77 268 L 123.36734693877551 300 L 160.75 300 L 178 277 Z"
            fill=" rgb(42,36,60)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 77 268 L 147 193 L 95 194 Z"
            fill=" rgb(62,41,75)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 203.48648648648648 300 L 178 277 L 160.75 300 Z"
            fill=" rgb(44,29,54)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 392 212 L 415 164 L 328 162 Z"
            fill=" rgb(76,20,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 354 73 L 405 67 L 343 37 Z"
            fill=" rgb(60,38,72)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 237.58181818181816 300 L 282.94805194805195 300 L 292 259 Z"
            fill=" rgb(50,19,50)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 290.82758620689657 0 L 271.51162790697674 0 L 293 14 Z"
            fill=" rgb(44,20,43)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 293 14 L 271.51162790697674 0 L 229.35135135135135 0 L 233 45 Z"
            fill=" rgb(48,25,50)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 377.7230769230769 0 L 328.5217391304348 0 L 343 37 Z"
            fill=" rgb(40,16,38)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 343 37 L 328.5217391304348 0 L 312.4782608695652 0 L 293 14 Z"
            fill=" rgb(47,23,48)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 32 221 L 77 268 L 95 194 Z"
            fill=" rgb(53,30,60)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 204.5483870967742 0 L 146.7674418604651 0 L 179 33 Z"
            fill=" rgb(37,30,47)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 415 164 L 405 67 L 354 73 Z"
            fill=" rgb(67,37,76)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 345 269 L 413 258 L 392 212 Z"
            fill=" rgb(63,14,59)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 446 216 L 450 159 L 415 164 Z"
            fill=" rgb(63,19,60)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 395.7872340425532 300 L 419.51724137931035 300 L 413 258 L 345 269 Z"
            fill=" rgb(48,13,46)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 312.47826086956525 0 L 290.82758620689657 0 L 293 14 Z"
            fill=" rgb(43,19,41)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 53 159 L 32 221 L 95 194 Z"
            fill=" rgb(54,32,61)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 312.6119402985075 300 L 351.1060606060606 300 L 345 269 Z"
            fill=" rgb(48,15,46)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 472 90 L 418 49 L 405 67 Z"
            fill=" rgb(50,38,66)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 405 67 L 418 49 L 343 37 Z"
            fill=" rgb(54,34,64)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 450 159 L 405 67 L 415 164 Z"
            fill=" rgb(65,28,68)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 130.69565217391303 0 L 103.59183673469387 0 L 108 36 Z"
            fill=" rgb(29,35,48)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 39 20 L 29 85 L 90 69 Z"
            fill=" rgb(33,42,58)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 90 69 L 29 85 L 53 159 Z"
            fill=" rgb(47,44,68)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 53 159 L 0 185.9206349206349 L 0 198.14285714285714 L 32 221 Z"
            fill="rgb(47,24,49)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 39 20 L 90 69 L 108 36 Z"
            fill=" rgb(33,42,58)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 123.36734693877551 300 L 77 268 L 91.54545454545455 300 Z"
            fill=" rgb(34,33,51)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 51.309859154929576 300 L 91.54545454545455 300 L 77 268 Z"
            fill=" rgb(26,23,36)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 446 216 L 415 164 L 392 212 Z"
            fill=" rgb(66,18,62)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 451 277 L 446 216 L 413 258 Z"
            fill="rgb(50,13,47)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 413 258 L 446 216 L 392 212 Z"
            fill=" rgb(62,14,58)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 103.59183673469389 0 L 77.18181818181819 0 L 39 20 L 108 36 Z"
            fill=" rgb(26,32,43)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 244.5 L 0 273.3333333333333 L 22 277 L 32 221 Z"
            fill=" rgb(31,13,30)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 32 221 L 22 277 L 77 268 Z"
            fill="rgb(38,22,42)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 77.18181818181819 0 L 35.2962962962963 0 L 39 20 Z"
            fill=" rgb(18,20,26)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 144.91139240506328 L 0 185.9206349206349 L 53 159 Z"
            fill=" rgb(45,22,45)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 112.94545454545454 L 0 144.91139240506328 L 53 159 L 29 85 Z"
            fill=" rgb(45,31,52)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 351.1060606060606 300 L 395.78723404255317 300 L 345 269 Z"
            fill=" rgb(45,13,43)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 419.51724137931035 300 L 433.8974358974359 300 L 451 277 L 413 258 Z"
            fill=" rgb(40,12,38)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 160.5151515151515 L 500 135.1818181818182 L 472 90 L 450 159 Z"
            fill=" rgb(53,24,56)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 450 159 L 472 90 L 405 67 Z"
            fill=" rgb(56,34,66)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 497 230 L 450 159 L 446 216 Z"
            fill=" rgb(55,16,52)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 460 45 L 425.47945205479454 0 L 409.09090909090907 0 L 418 49 Z"
            fill=" rgb(36,20,39)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 418 49 L 409.09090909090907 0 L 377.7230769230769 0 L 343 37 Z"
            fill=" rgb(43,22,45)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 472 90 L 460 45 L 418 49 Z"
            fill=" rgb(44,34,58)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 87 L 0 112.94545454545454 L 29 85 Z"
            fill=" rgb(36,31,47)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 39 20 L 0 39.5 L 0 56 L 29 85 Z"
            fill=" rgb(25,31,41)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 14.555555555555557 0 L 0 0 L 0 39.5 L 39 20 Z"
            fill=" rgb(9,11,15)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 56 L 0 87 L 29 85 Z"
            fill=" rgb(29,35,48)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 433.8974358974359 300 L 446.4 300 L 451 277 Z"
            fill=" rgb(33,9,31)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 283.23636363636365 L 500 248 L 497 230 L 451 277 Z"
            fill=" rgb(35,10,34)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 451 277 L 497 230 L 446 216 Z"
            fill=" rgb(47,13,45)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 244.5 L 32 221 L 0 198.14285714285714 Z"
            fill=" rgb(39,15,36)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 296.55555555555554 L 0 300 L 21.258064516129032 300 L 22 277 Z"
            fill=" rgb(12,0,12)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 22 277 L 21.258064516129032 300 L 51.309859154929576 300 L 77 268 Z"
            fill=" rgb(24,16,28)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 497 230 L 500 219.10526315789474 L 500 160.5151515151515 L 450 159 Z"
            fill=" rgb(51,17,50)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 472 90 L 500 78.21052631578948 L 500 68.2 L 460 45 Z"
            fill=" rgb(39,35,57)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 135.1818181818182 L 500 78.21052631578948 L 472 90 Z"
            fill=" rgb(44,29,54)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 425.47945205479454 0 L 460 45 L 463.2530120481928 0 Z"
            fill=" rgb(27,8,24)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 446.4 300 L 485.7735849056604 300 L 500 288.74626865671644 L 500 283.23636363636365 L 451 277 Z"
            fill=" rgb(28,5,27)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 219.10526315789474 L 497 230 L 500 226.80327868852459 Z"
            fill=" rgb(48,16,47)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 300 L 500 288.74626865671644 L 485.7735849056604 300 Z"
            fill=" rgb(24,2,23)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 18.023255813953487 L 500 11.621621621621621 L 492.037037037037 0 L 463.2530120481928 0 L 460 45 Z"
            fill=" rgb(22,9,22)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 68.2 L 500 18.02325581395349 L 460 45 Z"
            fill=" rgb(29,25,40)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 35.2962962962963 0 L 14.555555555555557 0 L 39 20 Z"
            fill=" rgb(6,7,10)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 0 273.3333333333333 L 0 296.55555555555554 L 22 277 Z"
            fill=" rgb(16,2,15)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 229.2962962962963 L 500 226.80327868852459 L 497 230 Z"
            fill=" rgb(47,15,45)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 248 L 500 229.2962962962963 L 497 230 Z"
            fill=" rgb(40,12,38)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
          <motion.path
            d="M 500 0 L 492.03703703703707 0 L 500 11.621621621621621 Z"
            fill=" rgb(14,1,13)"
            variants={variants}
            animate={randVariant()}
            transition={transition[randTransition()]}
          />
        </g>
      </svg>
    </Box>
  )
}
