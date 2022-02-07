import { UseResponsiveCheck } from "@/hooks"
import { Box } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

const neonBlue = "#83EEFF"
const lightOff = "#29484d"
const MotionBox = motion(Box)

const addColor = {
  hidden: {
    pathLength: 0,
    stroke: lightOff,
    fill: lightOff,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: [0, 0.5, 0, 0.8, 0.2, 1],
    fill: [lightOff, neonBlue, lightOff, neonBlue, lightOff, neonBlue],
    stroke: [lightOff, neonBlue, lightOff, neonBlue, lightOff, neonBlue],
  },
  exit: {
    pathLength: 0,
    fillOpacity: 0.5,
    fill: lightOff,
  },
}

const transition = {
  duration: 0.5,
  times: [0.05, 0.1, 0.2, 0.25, 0.4, 0.45, 0.5],
}

export function Dart() {
  const { isMobile } = UseResponsiveCheck()

  return (
    <AnimatePresence>
      <MotionBox
        filter={`-webkit-filter: drop-shadow( 8px 8px 10px ${neonBlue});
        filter: drop-shadow( 8px 8px 10px ${neonBlue});`}
        w="100vw"
        h="100vh"
      >
        <motion.svg width="179.943" height="110.866" xmlns="http://www.w3.org/2000/svg">
          <g id="svgGroup" fill={neonBlue} stroke={neonBlue} strokeWidth="0.5mm">
            <motion.path
              d="M 82.013 85.62 C 72.813 96.92 60.413 104.12 46.313 106.22 A 18.75 18.75 0 0 1 45.325 106.352 C 42.661 106.648 38.025 106.794 36.074 106.73 A 15.289 15.289 0 0 1 35.813 106.72 A 54.335 54.335 0 0 1 33.342 106.377 C 30.473 105.914 27.409 105.201 25.245 104.371 A 18.112 18.112 0 0 1 25.113 104.32 A 22.242 22.242 0 0 1 23.803 103.815 C 21.377 102.798 18.464 101.182 16.613 99.92 A 18.866 18.866 0 0 1 15.617 99.155 C 13.384 97.335 10.276 94.204 8.601 92.07 A 16.626 16.626 0 0 1 8.113 91.42 A 19.664 19.664 0 0 1 7.599 90.675 C 6.311 88.719 4.858 85.894 4.184 83.996 A 9.706 9.706 0 0 1 3.913 83.12 A 20.243 20.243 0 0 1 3.834 82.789 C 3.64 81.952 3.388 80.695 3.213 79.82 C 2.3 74.013 3.728 67.793 7.209 61.788 A 41.14 41.14 0 0 1 9.613 58.12 C 11.613 55.52 18.113 49.22 18.413 49.62 A 284.825 284.825 0 0 1 18.435 49.901 C 18.538 51.19 18.975 56.757 19.413 63.32 C 20.547 80.525 20.967 85.487 21.601 86.907 A 1.642 1.642 0 0 0 21.713 87.12 A 1.546 1.546 0 0 0 22.914 87.707 C 23.431 87.72 23.948 87.496 24.213 87.02 C 24.484 86.568 24.592 85.872 24.684 81.099 A 496.173 496.173 0 0 0 24.713 79.42 A 3663.329 3663.329 0 0 1 24.8 76.142 C 25.046 67.118 25.255 61.272 25.746 53.996 A 440.621 440.621 0 0 1 25.813 53.02 A 343.819 343.819 0 0 1 25.958 51.059 C 26.286 46.809 26.538 44.807 26.713 44.72 A 1.426 1.426 0 0 1 26.923 44.601 C 27.638 44.25 29.697 43.531 31.078 43.065 A 129.711 129.711 0 0 1 31.513 42.92 A 51.098 51.098 0 0 1 32.576 42.638 C 34.761 42.085 36.194 41.916 38.51 41.827 A 75.268 75.268 0 0 1 38.713 41.82 A 36.199 36.199 0 0 1 40.254 41.776 C 42.123 41.763 43.819 41.91 45.397 42.23 A 18.796 18.796 0 0 1 53.213 45.82 C 55.013 47.22 56.413 48.62 58.113 51.02 C 60.013 53.72 61.413 57.22 61.613 60.12 A 8.087 8.087 0 0 1 61.627 60.509 C 61.649 62.039 61.297 64.095 60.856 65.395 A 8.171 8.171 0 0 1 60.813 65.52 A 3.863 3.863 0 0 0 60.643 65.909 C 60.349 66.705 60.494 67.287 61.013 67.72 A 10.481 10.481 0 0 0 61.199 67.842 C 61.647 68.126 61.874 68.182 62.446 67.948 A 4.594 4.594 0 0 0 62.513 67.92 C 63.183 67.585 63.712 66.549 64.16 64.402 A 30.822 30.822 0 0 0 64.413 63.02 A 11.763 11.763 0 0 0 64.609 60.839 C 64.609 55.881 61.828 49.934 57.313 45.42 C 55.035 43.226 52.116 41.317 49.457 40.293 A 14.273 14.273 0 0 0 48.013 39.82 A 28.504 28.504 0 0 0 40.027 38.694 C 37.175 38.694 34.273 39.101 31.328 39.889 A 41.128 41.128 0 0 0 28.613 40.72 C 27.739 41.108 26.959 41.308 26.823 41.227 A 0.052 0.052 0 0 1 26.813 41.22 C 26.718 41.125 27.163 35.189 28.061 24.605 A 3046.931 3046.931 0 0 1 28.213 22.82 A 1434.136 1434.136 0 0 1 28.406 20.485 C 29.323 9.483 29.791 5.845 30.759 4.341 A 2.448 2.448 0 0 1 31.613 3.52 A 1.818 1.818 0 0 1 32.111 3.313 C 33.555 2.904 37.037 2.884 39.913 3.32 A 79.984 79.984 0 0 1 63.483 10.051 A 56.775 56.775 0 0 1 73.413 15.92 C 75.713 17.72 79.313 21.22 81.313 23.62 C 88.513 32.22 93.013 44.22 93.013 54.82 A 44.095 44.095 0 0 1 92.177 63.152 C 92.076 63.675 91.966 64.199 91.847 64.723 A 53.128 53.128 0 0 1 82.013 85.62 Z M 15.613 13.02 L 15.213 13.62 L 15.613 16.52 C 16.257 21.188 16.966 27.994 17.478 34.8 A 329.242 329.242 0 0 1 17.813 39.72 C 17.993 41.972 18.173 44.225 18.207 44.941 A 4.169 4.169 0 0 1 18.213 45.12 L 18.313 45.92 L 16.213 47.42 C 9.027 52.857 3.256 60.841 1.096 68.258 A 26.409 26.409 0 0 0 0.913 68.92 C 0.3 71.321 0 73.826 0 76.303 A 29.273 29.273 0 0 0 0.813 83.22 A 25.418 25.418 0 0 0 1.955 86.558 C 3.338 89.863 5.459 93.17 8.095 96.164 A 39.103 39.103 0 0 0 17.213 103.82 A 40.809 40.809 0 0 0 30.485 108.931 A 52.864 52.864 0 0 0 33.213 109.42 A 28.044 28.044 0 0 0 34.414 109.518 C 37.212 109.694 41.638 109.686 44.417 109.494 A 29.705 29.705 0 0 0 45.313 109.42 C 56.813 107.92 67.313 103.32 76.313 95.72 A 39.383 39.383 0 0 0 77.313 94.822 C 79.53 92.769 82.563 89.614 84.113 87.72 C 90.913 79.22 95.213 68.32 95.913 57.52 C 96.713 45.82 92.313 32.62 84.313 22.42 C 82.213 19.92 77.613 15.42 75.113 13.52 A 61.417 61.417 0 0 0 62.119 6.147 A 82.948 82.948 0 0 0 49.913 2.12 A 90.87 90.87 0 0 0 43.258 0.77 C 38.392 -0.021 34.24 -0.23 31.881 0.272 A 5.961 5.961 0 0 0 31.013 0.52 A 5.182 5.182 0 0 0 27.829 3.532 C 27.13 5.104 26.665 7.431 26.226 11.013 A 111.191 111.191 0 0 0 26.213 11.12 C 25.837 14.32 25.017 24.606 24.172 34.893 A 5116.667 5116.667 0 0 1 24.013 36.82 C 23.518 43.348 23.709 42.832 22.164 43.691 A 12.41 12.41 0 0 0 22.113 43.72 A 10.997 10.997 0 0 1 21.899 43.803 C 21.632 43.904 21.438 43.956 21.319 43.914 A 0.181 0.181 0 0 1 21.213 43.82 A 0.188 0.188 0 0 1 21.181 43.747 C 21.091 43.44 21.002 42.28 20.913 41.12 C 20.613 34.22 19.513 22.52 18.613 16.62 C 18.213 13.92 18.113 13.32 17.713 12.92 A 1.401 1.401 0 0 0 17.324 12.601 C 16.809 12.318 16.18 12.422 15.763 12.842 A 1.436 1.436 0 0 0 15.613 13.02 Z M 21.559 47.541 A 0.28 0.28 0 0 0 21.513 47.62 C 21.413 47.92 21.913 56.72 22.113 59.32 C 22.206 60.338 22.298 60.499 22.311 60.041 A 4.248 4.248 0 0 0 22.313 59.92 A 1.982 1.982 0 0 0 22.346 59.718 C 22.423 59.112 22.539 57.431 22.665 55.391 A 860.637 860.637 0 0 0 22.813 52.92 A 433.394 433.394 0 0 0 22.873 52.21 C 23.121 49.264 23.283 46.949 23.228 46.571 A 0.107 0.107 0 0 0 23.213 46.52 C 23.121 46.427 21.833 47.188 21.559 47.541 Z"
              id="0"
              vectorEffect="non-scaling-stroke"
              variants={addColor}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={transition}
            />

            <motion.path
              d="M 101.513 68.82 A 3.332 3.332 0 0 0 102.142 68.996 C 103.838 69.283 105.122 67.849 106.887 63.928 A 52.125 52.125 0 0 0 107.113 63.42 A 168.655 168.655 0 0 0 107.12 63.405 C 107.775 62 108.078 61.303 108.194 61.478 A 0.178 0.178 0 0 1 108.213 61.52 C 108.313 61.62 108.313 63.12 108.313 64.72 A 91.385 91.385 0 0 0 108.356 66.088 C 108.472 68.984 108.713 69.87 109.413 70.22 C 109.596 70.311 109.948 70.319 110.236 70.32 A 34.615 34.615 0 0 0 110.313 70.32 C 111.413 70.12 111.313 70.42 111.413 60.42 A 430.391 430.391 0 0 1 111.422 57.647 C 111.447 53.846 111.512 50.914 111.513 50.626 A 1.76 1.76 0 0 0 111.513 50.62 A 1.403 1.403 0 0 0 110.882 49.521 C 110.613 49.328 110.288 49.21 109.968 49.21 A 1.252 1.252 0 0 0 109.813 49.22 C 109.174 49.402 108.868 49.585 108.592 50.3 A 4.939 4.939 0 0 0 108.513 50.52 L 108.313 51.32 C 108.213 51.32 107.913 51.12 107.513 51.02 A 3.067 3.067 0 0 0 106.941 50.837 C 106.203 50.671 105.266 50.681 104.504 50.865 A 3.622 3.622 0 0 0 104.013 51.02 C 101.213 52.32 98.913 58.42 99.113 63.92 C 99.313 66.92 99.913 68.12 101.513 68.82 Z M 102.713 65.52 L 102.413 65.92 L 102.213 65.52 C 102.013 64.92 102.113 61.42 102.313 60.12 A 38.097 38.097 0 0 1 102.629 58.938 C 102.984 57.693 103.408 56.428 103.782 55.589 A 9.56 9.56 0 0 1 103.813 55.52 C 104.29 54.661 105.222 53.712 105.741 53.626 A 0.444 0.444 0 0 1 105.813 53.62 C 106.302 53.62 107.173 54.193 107.212 54.499 A 0.164 0.164 0 0 1 107.213 54.52 A 2.181 2.181 0 0 1 107.141 54.963 C 106.79 56.432 105.235 60.475 103.913 63.12 A 167.919 167.919 0 0 1 103.543 63.931 C 103.182 64.713 102.863 65.37 102.713 65.52 Z"
              id="1"
              vectorEffect="non-scaling-stroke"
              variants={addColor}
              initial="hidden"
              animate={{
                pathLength: 1,
                opacity: [1, 1],
                fill: [lightOff, neonBlue, lightOff, neonBlue, lightOff, neonBlue],
                stroke: [lightOff, neonBlue, lightOff, neonBlue, lightOff, neonBlue],
              }}
              transition={{
                duration: 0.5,
                times: [0.05, 0.1, 0.2, 0.25, 0.4, 0.45, 0.5],
                delay: 0.8,
              }}
            />
            <motion.path
              d="M 116.713 53.92 L 117.313 53.72 L 117.213 55.42 C 116.613 62.52 116.413 65.02 116.213 67.22 A 61.272 61.272 0 0 0 116.158 67.754 C 115.929 70.087 116.053 70.553 116.613 71.02 C 117.192 71.502 118.049 71.426 118.558 70.882 A 1.453 1.453 0 0 0 118.613 70.82 C 118.788 70.645 119.116 69.934 119.396 69.156 A 14.821 14.821 0 0 0 119.513 68.82 C 120.802 64.853 123.762 58.429 125.47 55.689 A 17.111 17.111 0 0 1 125.513 55.62 A 20.729 20.729 0 0 1 125.809 55.173 C 126.644 53.944 127.654 52.715 127.801 52.715 A 0.016 0.016 0 0 1 127.813 52.72 C 127.813 52.72 128.113 54.32 128.513 56.12 A 49.04 49.04 0 0 0 128.711 57.334 C 128.964 58.773 129.239 59.958 129.4 60.386 A 1.703 1.703 0 0 0 129.413 60.42 A 6.397 6.397 0 0 0 130.097 61.547 C 131.618 63.515 133.817 63.315 136.313 60.82 C 137.613 59.52 138.313 58.32 138.413 56.82 C 138.713 54.92 138.013 55.12 134.913 58.12 A 32.78 32.78 0 0 1 134 58.913 C 133.366 59.441 132.85 59.82 132.713 59.82 A 0.384 0.384 0 0 1 132.392 59.648 C 132.125 59.302 131.917 58.358 131.552 56.17 A 207.73 207.73 0 0 1 131.413 55.32 A 248.776 248.776 0 0 1 131.333 54.959 C 130.97 53.314 130.624 51.669 130.52 51.156 A 23.858 23.858 0 0 1 130.513 51.12 A 3.368 3.368 0 0 0 129.995 50.211 C 128.911 48.884 127.012 49.064 125.354 50.862 A 7.235 7.235 0 0 0 125.213 51.02 A 12.799 12.799 0 0 0 124.536 51.825 C 123.451 53.216 122.181 55.284 121.113 57.42 C 120.15 59.153 120.022 59.495 120.013 58.982 A 3.967 3.967 0 0 1 120.013 58.92 C 120.013 58.241 120.482 51.555 120.693 48.957 A 115.619 115.619 0 0 1 120.713 48.72 A 16.655 16.655 0 0 0 120.762 48.26 C 120.933 46.398 120.622 45.696 119.662 45.55 A 3.001 3.001 0 0 0 119.213 45.52 A 1.15 1.15 0 0 0 118.333 45.907 C 118.12 46.132 117.922 46.465 117.728 46.936 A 9.074 9.074 0 0 0 117.513 47.52 C 116.937 49.057 116.175 50.409 115.673 51.045 A 3.653 3.653 0 0 1 115.613 51.12 A 3.397 3.397 0 0 0 115.264 51.575 C 114.734 52.415 114.85 53.211 115.613 53.72 C 115.833 53.866 116.106 53.959 116.393 53.959 A 1.316 1.316 0 0 0 116.713 53.92 Z"
              id="2"
              vectorEffect="non-scaling-stroke"
              variants={addColor}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
            <motion.path
              d="M 141.213 29.02 L 141.413 27.72 L 142.913 27.62 C 148.413 27.42 168.913 28.42 174.413 29.12 A 104.1 104.1 0 0 1 174.429 29.121 C 176.86 29.414 177.104 29.514 177.581 29.145 A 2.674 2.674 0 0 0 177.613 29.12 C 177.964 28.856 178.084 28.67 178.108 28.222 A 3.799 3.799 0 0 0 178.113 28.02 C 178.208 26.969 177.575 26.557 175.254 26.174 A 31.328 31.328 0 0 0 174.913 26.12 A 19.903 19.903 0 0 0 173.973 26.003 C 169.274 25.507 154.539 24.823 148.257 24.722 A 127.012 127.012 0 0 0 148.113 24.72 A 242.195 242.195 0 0 0 146.324 24.673 C 143.858 24.616 141.994 24.601 141.913 24.52 C 141.713 24.32 142.712 19.026 143.312 16.923 A 16.216 16.216 0 0 1 143.313 16.92 C 143.576 16.13 143.917 14.954 144.064 14.205 A 5.68 5.68 0 0 0 144.113 13.92 C 144.113 12.895 144.026 12.651 143.691 12.299 A 4.614 4.614 0 0 0 143.613 12.22 A 2.02 2.02 0 0 0 143.289 11.894 C 142.518 11.285 141.549 11.56 141.113 12.52 C 140.913 13.12 139.813 18.22 139.213 21.52 A 44.681 44.681 0 0 0 139.208 21.546 C 138.92 22.991 138.725 24.336 138.622 24.507 A 0.065 0.065 0 0 1 138.613 24.52 C 138.519 24.52 136.564 24.697 134.249 24.718 A 48.602 48.602 0 0 1 133.813 24.72 A 496.699 496.699 0 0 0 127.27 24.94 C 118.263 25.301 109.257 25.892 106.313 26.437 A 8.967 8.967 0 0 0 105.913 26.52 A 2.301 2.301 0 0 0 105.205 26.699 C 104.637 26.952 104.313 27.432 104.313 28.02 C 104.313 28.729 104.628 29.282 105.258 29.537 A 1.917 1.917 0 0 0 105.513 29.62 A 1.668 1.668 0 0 0 105.761 29.663 C 106.932 29.801 110.896 29.686 115.113 29.32 A 3034.658 3034.658 0 0 0 116.233 29.218 C 118.011 29.055 120.141 28.858 121.67 28.699 A 106.536 106.536 0 0 0 122.413 28.62 A 271.18 271.18 0 0 1 124.618 28.432 C 128.025 28.157 130.763 28.02 133.913 28.02 A 60.516 60.516 0 0 1 135.224 27.962 C 136.475 27.92 137.488 27.92 137.713 27.92 A 28.842 28.842 0 0 1 137.793 27.933 C 138.313 28.021 138.304 28.052 138.113 28.72 A 314.017 314.017 0 0 0 137.916 30.499 C 137.463 34.719 137.266 37.48 136.913 42.42 C 136.175 57.08 136.543 76.416 138.486 84.829 A 19.266 19.266 0 0 0 139.013 86.72 C 139.613 88.62 141.313 92.22 141.913 93.02 C 142.297 93.403 143.325 93.695 143.761 93.453 A 0.452 0.452 0 0 0 143.813 93.42 C 144.113 93.22 144.613 92.52 144.613 92.12 A 0.43 0.43 0 0 0 144.588 91.998 C 144.495 91.712 144.168 91.13 143.913 90.62 C 141.874 86.855 140.696 82.967 140.041 77.22 A 92.46 92.46 0 0 1 139.613 72.02 C 139.113 64.42 139.613 44.62 140.413 36.42 A 197.449 197.449 0 0 1 140.635 34.131 C 140.841 32.127 141.05 30.358 141.159 29.461 A 136.099 136.099 0 0 1 141.213 29.02 Z"
              id="3"
              vectorEffect="non-scaling-stroke"
              variants={addColor}
              initial="hidden"
              animate="visible"
              transition={transition}
            />
          </g>
        </motion.svg>
      </MotionBox>
    </AnimatePresence>
  )
}