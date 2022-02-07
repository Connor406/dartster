import { UseResponsiveCheck } from "@/hooks"
import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

const neonPink = "#ff37d4"

const addColor = {
  hidden: {
    pathLength: 0,
    stroke: "#000",
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: [0, 0.5, 0, 0.8, 0.2, 1],
    fill: ["#000", neonPink, "#000", neonPink, "#000", neonPink],
    stroke: ["#000", neonPink, "#000", neonPink, "#000", neonPink],
  },
  exit: {
    pathLength: 0,
    fillOpacity: 0.5,
    fill: "#000",
  },
}

const transition = {
  duration: 0.7,
  times: [0.05, 0.1, 0.2, 0.25, 0.5, 0.6, 0.7],
}

export function Mule() {
  const { isMobile } = UseResponsiveCheck()
  return (
    <Box
      filter={`-webkit-filter: drop-shadow( 8px 8px 10px ${neonPink});
          filter: drop-shadow( 8px 8px 10px ${neonPink});`}
    >
      <svg width="179.943" height="110.866" xmlns="http://www.w3.org/2000/svg">
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          strokeWidth="0.25mm"
          stroke={neonPink}
          fill={neonPink}
        >
          <motion.path
            d="M 49.431 92.232 L 48.731 93.732 L 48.831 91.232 A 97.037 97.037 0 0 1 49.121 87.035 C 49.497 82.736 50.238 76.267 51.585 65.851 A 2205.198 2205.198 0 0 1 52.531 58.632 A 2084.883 2084.883 0 0 0 53.705 49.726 C 55.626 34.893 56.627 25.537 57.071 18.121 A 161.747 161.747 0 0 0 57.331 11.732 A 758.316 758.316 0 0 0 57.353 10.668 C 57.423 7.167 57.41 5.925 57.197 4.684 A 13.169 13.169 0 0 0 57.131 4.332 C 56.731 1.832 56.131 0.832 55.031 0.332 A 3.076 3.076 0 0 0 54.455 0.091 C 53.262 -0.261 52.166 0.391 50.489 2.33 A 27.121 27.121 0 0 0 50.231 2.632 C 44.231 9.732 33.331 31.032 23.431 55.032 A 792.626 792.626 0 0 0 21.265 60.335 C 18.766 66.519 16.525 72.347 13.074 81.667 A 2450.789 2450.789 0 0 0 11.131 86.932 C 6.231 100.332 3.631 106.832 3.231 106.632 A 0.441 0.441 0 0 1 3.185 106.451 C 3.033 105.342 3.056 99.537 3.331 96.332 A 354.495 354.495 0 0 1 4.085 87.11 C 5.436 72.684 7.869 53.951 10.631 37.132 A 1715.423 1715.423 0 0 0 11.224 33.521 C 12.461 25.936 12.706 23.962 12.806 21.989 A 51.038 51.038 0 0 0 12.831 21.432 A 21.251 21.251 0 0 0 12.856 20.985 C 12.97 18.493 12.507 17.631 11.182 17.54 A 3.683 3.683 0 0 0 10.931 17.532 A 1.303 1.303 0 0 0 10.124 17.804 C 9.389 18.349 8.673 19.804 7.523 22.956 A 127.966 127.966 0 0 0 7.031 24.332 C 3.368 34.629 0.587 46.004 1.308 47.684 A 0.626 0.626 0 0 0 1.331 47.732 A 1.579 1.579 0 0 0 2.05 48.385 C 2.234 48.467 2.429 48.511 2.62 48.511 A 1.092 1.092 0 0 0 3.231 48.332 C 3.831 48.032 4.031 47.432 4.631 43.932 C 4.9 41.984 5.394 39.674 6.084 37.064 A 119.551 119.551 0 0 1 7.231 33.032 A 69.561 69.561 0 0 0 7.384 32.569 C 7.782 31.346 8.21 29.932 8.437 29.158 A 50.487 50.487 0 0 0 8.531 28.832 A 11.665 11.665 0 0 1 8.65 28.439 C 8.806 27.958 8.95 27.655 9.03 27.731 A 0.059 0.059 0 0 1 9.031 27.732 A 4.353 4.353 0 0 1 9.004 27.951 C 8.889 28.793 8.419 31.951 7.803 35.774 A 553.863 553.863 0 0 1 7.631 36.832 C 3.192 64.159 -0.274 94.697 0.017 104.252 A 28.307 28.307 0 0 0 0.031 104.632 A 31.233 31.233 0 0 0 0.171 106.41 C 0.388 108.379 0.78 109.574 1.397 110.249 A 2.16 2.16 0 0 0 2.031 110.732 C 3.131 111.132 4.331 110.632 5.231 109.332 A 20.882 20.882 0 0 0 6.473 107.098 C 7.875 104.238 9.881 99.157 13.631 88.732 C 18.844 74.717 21.501 67.567 24.41 60.417 A 395.504 395.504 0 0 1 25.931 56.732 C 34.101 36.98 42.594 19.565 48.876 9.699 A 72.67 72.67 0 0 1 50.931 6.632 A 28.54 28.54 0 0 1 51.26 6.149 C 52.202 4.797 53.144 3.694 53.566 3.406 A 0.342 0.342 0 0 1 53.731 3.332 C 54.331 3.332 54.631 8.932 54.331 14.332 A 303.448 303.448 0 0 1 54.279 15.274 C 53.663 26.151 52.453 37.029 49.731 57.732 A 3061.412 3061.412 0 0 0 48.734 65.139 C 45.691 87.965 45.096 95.091 46.112 97.613 A 2.392 2.392 0 0 0 46.631 98.432 C 47.006 98.87 47.577 99.073 48.147 99.041 A 2.076 2.076 0 0 0 49.131 98.732 A 4.244 4.244 0 0 0 50.098 97.616 C 51.181 95.957 52.756 92.357 56.131 84.032 C 61.631 70.532 64.731 63.532 69.431 54.032 C 74.859 42.982 80.1 33.998 83.057 30.543 A 14.676 14.676 0 0 1 83.331 30.232 C 84.179 29.384 84.228 29.246 84.398 29.652 A 5.195 5.195 0 0 1 84.431 29.732 A 8.174 8.174 0 0 1 84.728 31.101 C 85.298 34.892 85.463 43.986 85.031 52.632 A 683.837 683.837 0 0 0 84.85 56.477 C 84.345 67.938 84.522 72.527 85.694 75.834 A 13.728 13.728 0 0 0 86.231 77.132 A 9.563 9.563 0 0 0 87.054 78.553 C 88.004 79.887 89.13 80.532 90.431 80.532 A 2.815 2.815 0 0 0 91.209 80.412 C 92.053 80.167 92.999 79.564 93.831 78.732 C 96.031 76.732 98.031 73.632 102.031 65.632 C 103.948 61.799 104.476 60.743 104.714 59.688 A 8.195 8.195 0 0 0 104.831 59.032 A 38.057 38.057 0 0 0 104.864 58.613 C 104.929 57.718 104.919 57.259 104.835 56.661 A 10.411 10.411 0 0 0 104.831 56.632 A 7.159 7.159 0 0 1 104.828 56.625 C 104.638 56.245 104.539 55.956 104.443 55.933 A 0.052 0.052 0 0 0 104.431 55.932 A 0.261 0.261 0 0 0 104.291 56.01 C 103.691 56.528 101.846 59.517 100.555 61.919 A 47.22 47.22 0 0 0 100.231 62.532 A 211.649 211.649 0 0 1 98.516 65.954 C 97.369 68.189 96.387 69.986 95.544 71.433 A 59.512 59.512 0 0 1 94.331 73.432 A 22.56 22.56 0 0 1 93.762 74.264 C 92.422 76.13 91.044 77.432 90.431 77.432 C 89.644 77.432 88.856 76.283 88.269 74.119 A 18.976 18.976 0 0 1 88.031 73.132 A 9.537 9.537 0 0 1 88.015 73.058 C 87.765 71.939 87.735 70.819 87.732 66.298 A 2661.592 2661.592 0 0 1 87.731 64.232 C 87.731 60.232 87.831 55.432 87.931 53.532 C 88.518 44.924 88.435 35.645 87.776 31.127 A 23.076 23.076 0 0 0 87.731 30.832 A 15.621 15.621 0 0 0 87.657 30.496 C 87.237 28.702 86.49 26.908 85.831 26.532 A 3.399 3.399 0 0 0 85.305 26.267 C 83.705 25.637 82.156 26.705 79.631 30.132 C 76.785 34.066 73.519 39.612 69.656 47.062 A 350.302 350.302 0 0 0 67.331 51.632 A 455.854 455.854 0 0 0 65.464 55.407 C 61.275 63.982 58.081 71.332 52.131 86.032 C 51.031 88.532 49.831 91.332 49.431 92.232 Z"
            id="0"
            vectorEffect="non-scaling-stroke"
            variants={addColor}
            initial="hidden"
            animate="visible"
            transition={transition}
          />

          <motion.path
            d="M 117.931 59.832 L 118.631 58.632 L 119.031 59.732 C 120.081 62.708 122.357 63.998 124.92 63.268 A 6.42 6.42 0 0 0 126.031 62.832 A 5.383 5.383 0 0 0 126.567 62.539 C 128.1 61.595 130.286 59.489 130.731 58.332 A 4.453 4.453 0 0 0 131.051 57.469 C 131.23 56.783 131.248 56.097 131.104 55.691 A 0.877 0.877 0 0 0 131.031 55.532 A 0.145 0.145 0 0 0 130.893 55.443 C 130.723 55.443 130.407 55.657 129.831 56.232 A 238.854 238.854 0 0 1 128.918 57.02 C 126.652 58.964 125.91 59.498 124.931 60.032 A 205.06 205.06 0 0 1 124.668 60.151 C 123.795 60.547 123.588 60.615 123.131 60.432 C 122.141 59.982 121.556 58.641 121.231 55.9 A 32.187 32.187 0 0 1 121.131 54.932 A 24.274 24.274 0 0 0 121.078 54.266 C 120.984 53.274 120.853 52.573 120.765 52.246 A 2.039 2.039 0 0 0 120.731 52.132 C 120.441 51.77 119.941 51.512 119.46 51.512 A 1.174 1.174 0 0 0 118.931 51.632 C 118.387 51.813 118.09 52.159 117.146 54.455 A 87.744 87.744 0 0 0 116.831 55.232 C 113.935 62.184 110.106 65.593 107.685 63.569 A 3.174 3.174 0 0 1 107.431 63.332 A 5.192 5.192 0 0 1 106.35 61.475 C 106.033 60.569 105.846 59.438 105.771 57.985 A 31.918 31.918 0 0 1 105.731 56.332 C 105.731 53.532 105.531 52.932 104.731 52.632 A 1.694 1.694 0 0 0 104.409 52.558 C 103.818 52.483 103.301 52.761 103.017 53.299 A 1.958 1.958 0 0 0 102.831 53.832 A 2.733 2.733 0 0 0 102.766 54.17 C 102.566 55.631 102.765 59.382 103.131 61.032 C 103.731 64.032 105.431 66.232 107.631 66.932 A 1.691 1.691 0 0 0 107.804 66.978 C 108.103 67.042 108.589 67.093 109.076 67.066 A 4.09 4.09 0 0 0 109.431 67.032 A 11.652 11.652 0 0 0 109.964 67.021 C 110.702 66.988 111.234 66.862 111.978 66.507 A 9.556 9.556 0 0 0 112.131 66.432 A 10.288 10.288 0 0 0 114.232 64.864 C 115.513 63.649 116.764 61.972 117.931 59.832 Z"
            id="1"
            vectorEffect="non-scaling-stroke"
            variants={addColor}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
          <motion.path
            d="M 132.131 58.532 L 132.031 57.032 L 132.931 56.532 C 137.631 54.132 147.831 42.132 153.031 32.832 C 158.15 23.618 160.139 15.496 158.874 9.77 A 12.119 12.119 0 0 0 157.931 7.032 C 157.031 5.132 155.931 3.932 154.231 3.232 C 151.873 2.053 149.032 2.322 146.183 3.944 A 13.899 13.899 0 0 0 146.031 4.032 A 8.174 8.174 0 0 0 145.304 4.532 C 143.85 5.638 141.913 7.65 140.633 9.485 A 16.664 16.664 0 0 0 140.531 9.632 C 136.574 15.173 134.057 21.152 132.089 30.048 A 142.694 142.694 0 0 0 130.631 37.732 A 428.703 428.703 0 0 0 130.153 40.69 C 129.402 45.467 129.122 48.083 129.051 51.743 A 117.658 117.658 0 0 0 129.031 54.032 A 239.05 239.05 0 0 0 129.034 55.287 C 129.053 58.819 129.161 59.719 129.431 61.432 C 129.995 64.253 130.687 66.405 131.631 68.212 A 15.879 15.879 0 0 0 134.331 71.932 A 24.953 24.953 0 0 0 135.019 72.562 C 136.269 73.66 137.334 74.314 138.839 74.801 A 16.011 16.011 0 0 0 140.031 75.132 A 10.987 10.987 0 0 0 141.683 75.468 C 143.524 75.69 145.288 75.36 147.531 74.432 C 149.431 73.632 150.831 72.532 153.231 70.232 A 70.841 70.841 0 0 0 155.526 67.884 C 158.72 64.461 161.3 61.038 162.031 59.332 C 162.322 58.654 162.425 57.976 162.34 57.207 A 5.16 5.16 0 0 0 162.331 57.132 C 162.331 56.032 162.231 55.932 161.931 55.932 C 161.507 55.932 160.434 57.085 158.528 59.514 A 145.725 145.725 0 0 0 157.431 60.932 C 155.765 63.212 152.638 66.723 150.612 68.699 A 25.32 25.32 0 0 1 149.831 69.432 A 13.138 13.138 0 0 1 145.498 71.973 C 144.899 72.184 144.3 72.345 143.717 72.454 A 10.252 10.252 0 0 1 143.231 72.532 A 2.351 2.351 0 0 1 142.971 72.563 C 141.96 72.632 140.241 72.227 138.951 71.646 A 7.322 7.322 0 0 1 138.331 71.332 A 9.128 9.128 0 0 1 135.288 68.477 C 133.717 66.227 132.614 63.056 132.207 59.334 A 28.435 28.435 0 0 1 132.131 58.532 Z M 134.072 35.202 A 173.367 173.367 0 0 0 132.631 44.632 A 47.502 47.502 0 0 0 132.513 45.52 C 132.086 48.975 131.856 53.532 132.131 53.532 C 132.206 53.532 132.675 53.195 133.242 52.773 A 188.66 188.66 0 0 0 133.831 52.332 C 136.531 49.932 141.331 44.632 144.631 40.232 C 148.631 35.032 152.231 28.532 154.131 23.232 C 157.831 13.332 156.531 5.532 151.031 5.532 A 5.496 5.496 0 0 0 149.018 5.936 C 146.876 6.777 144.604 8.923 142.331 12.332 A 41.207 41.207 0 0 0 139.672 16.909 C 137.262 21.735 135.482 27.54 134.072 35.202 Z"
            id="2"
            vectorEffect="non-scaling-stroke"
            variants={addColor}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
          <motion.path
            d="M 162.131 62.032 L 162.031 61.332 L 163.331 61.332 A 8.324 8.324 0 0 0 163.779 61.321 C 164.381 61.289 164.82 61.175 165.417 60.888 A 8.194 8.194 0 0 0 165.531 60.832 C 166.831 60.032 168.131 58.632 168.831 57.232 C 169.472 55.951 169.526 54.335 169.071 53.457 A 1.604 1.604 0 0 0 168.931 53.232 A 3.282 3.282 0 0 0 167.593 52.165 C 166.328 51.622 164.725 51.902 163.24 52.912 A 7.859 7.859 0 0 0 162.231 53.732 A 9.252 9.252 0 0 0 160.958 55.368 C 160.03 56.854 159.341 58.708 159.172 60.368 A 7.53 7.53 0 0 0 159.131 61.132 A 7.492 7.492 0 0 0 159.486 63.513 C 160.008 65.075 161.112 66.213 162.831 66.832 A 5.13 5.13 0 0 0 163.432 66.954 C 164.402 67.097 165.715 67.064 167.029 66.78 A 10.682 10.682 0 0 0 167.631 66.632 A 14.756 14.756 0 0 0 169.144 66.157 C 171.835 65.164 175.037 63.287 176.97 61.566 A 11.304 11.304 0 0 0 177.631 60.932 C 178.831 59.532 179.831 57.532 179.931 56.432 A 5.099 5.099 0 0 0 179.94 56.275 C 179.985 55.163 179.543 55.275 177.951 56.744 A 45.012 45.012 0 0 0 177.431 57.232 A 50.79 50.79 0 0 1 175.607 58.871 C 174.321 59.967 173.133 60.84 171.945 61.551 A 19.315 19.315 0 0 1 168.631 63.132 A 16.01 16.01 0 0 1 167.372 63.585 C 164.414 64.505 162.514 63.98 162.14 62.077 A 3.238 3.238 0 0 1 162.131 62.032 Z M 163.915 56.326 A 5.574 5.574 0 0 0 163.231 57.432 A 67.922 67.922 0 0 0 163.141 57.594 C 162.734 58.332 162.776 58.332 163.431 58.332 C 163.75 58.332 164.069 58.205 164.489 57.9 A 6.508 6.508 0 0 0 164.831 57.632 A 5.895 5.895 0 0 0 165.14 57.327 C 166.145 56.259 166.669 54.932 166.031 54.932 A 1.252 1.252 0 0 0 165.712 54.977 C 165.165 55.123 164.486 55.609 163.915 56.326 Z"
            id="3"
            vectorEffect="non-scaling-stroke"
            variants={addColor}
            initial="hidden"
            animate="visible"
            transition={transition}
          />
        </g>
      </svg>
    </Box>
  )
}
