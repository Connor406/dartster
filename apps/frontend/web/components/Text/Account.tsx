import { UseResponsiveCheck } from "@/hooks"
import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

function Account() {
  const lightOff = "#29484d"
  const pink = "#ff37d497"
  const { isMobile } = UseResponsiveCheck()
  return (
    <Flex
      filter={`-webkit-filter: drop-shadow( 8px 8px 10px #ff37d4);
        filter: drop-shadow( 8px 8px 10px #ff37d4);`}
      w={isMobile ? "11rem" : "12rem"}
      h="7rem"
    >
      <svg
        width="inherit"
        height="inherit"
        viewBox="0 0 223.41 116.634"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke={pink}
          strokeWidth="0.25mm"
          fill={pink}
        >
          <motion.path
            d="M 59.199 59.159 L 58.299 58.959 L 58.299 43.259 C 58.299 17.962 57.811 3.601 56.738 1.142 A 1.761 1.761 0 0 0 56.699 1.059 A 2.337 2.337 0 0 0 56.212 0.466 C 55.536 -0.119 54.624 -0.16 53.981 0.382 A 1.771 1.771 0 0 0 53.799 0.559 A 5.806 5.806 0 0 0 53.069 1.542 C 51.945 3.333 50.107 7.186 46.999 13.959 C 43.094 22.552 35.756 41.06 31.13 53.937 A 414.744 414.744 0 0 0 30.799 54.859 C 29.999 57.059 29.399 58.759 29.399 58.859 A 1.376 1.376 0 0 0 29.321 58.864 C 29.113 58.879 28.546 58.934 27.826 58.997 A 153.952 153.952 0 0 1 27.099 59.059 C 23.656 59.453 16.149 60.524 12.859 61.13 A 50.795 50.795 0 0 0 12.699 61.159 A 130.201 130.201 0 0 0 11.634 61.382 C 8.863 61.975 6.646 62.554 3.539 63.458 A 341.438 341.438 0 0 0 1.499 64.059 A 0.364 0.364 0 0 0 1.385 64.082 C 1.184 64.151 0.891 64.362 0.649 64.526 A 8.893 8.893 0 0 1 0.599 64.559 A 1.836 1.836 0 0 0 0.3 64.867 C -0.368 65.744 0.127 66.908 1.319 66.958 A 1.914 1.914 0 0 0 1.399 66.959 C 1.676 66.959 2.976 66.704 4.275 66.35 A 27.245 27.245 0 0 0 4.599 66.259 C 8.199 65.159 12.599 64.159 16.499 63.559 C 20.032 62.971 27.511 61.901 28.075 61.955 A 0.119 0.119 0 0 1 28.099 61.959 A 0.039 0.039 0 0 1 28.108 61.982 C 28.132 62.165 27.766 63.277 27.263 64.778 A 932.099 932.099 0 0 0 26.699 66.459 A 73.578 73.578 0 0 1 26.312 67.632 C 25.481 70.084 24.236 73.473 23.379 76.021 A 101.054 101.054 0 0 0 23.299 76.259 A 260.972 260.972 0 0 1 22.859 77.522 C 21.611 81.08 18.923 88.609 16.235 96.108 A 9868.203 9868.203 0 0 1 15.499 98.159 C 12.492 106.21 10.032 113.164 9.504 114.869 A 2.647 2.647 0 0 0 9.399 115.259 C 9.399 115.558 9.598 115.956 9.797 116.256 A 3.667 3.667 0 0 0 9.799 116.259 A 1.628 1.628 0 0 0 10.358 116.567 C 10.844 116.718 11.372 116.615 11.799 116.259 A 1.707 1.707 0 0 0 11.996 115.899 C 12.557 114.687 14.123 110.527 16.695 103.505 A 2702.651 2702.651 0 0 0 18.099 99.659 C 23.499 84.759 25.399 79.459 29.799 66.659 L 31.499 61.659 L 32.699 61.559 A 6.425 6.425 0 0 1 33.041 61.523 C 34.04 61.438 36.387 61.345 38.734 61.185 A 117.158 117.158 0 0 0 39.099 61.159 C 43.648 60.974 49.144 61.133 53.028 61.476 A 62.768 62.768 0 0 1 53.899 61.559 L 55.099 61.659 L 54.999 66.659 A 273.153 273.153 0 0 0 54.959 67.895 C 54.876 70.538 54.785 74.158 54.633 76.809 A 79.225 79.225 0 0 1 54.599 77.359 L 54.399 83.059 L 52.299 87.359 A 91.251 91.251 0 0 0 51.897 88.175 C 50.985 90.045 50.073 92.061 49.545 93.282 A 48.643 48.643 0 0 0 49.299 93.859 C 45.957 102.352 45.144 108.477 47.01 111.424 A 4.17 4.17 0 0 0 47.699 112.259 C 48.799 113.259 49.799 113.459 51.299 112.759 A 5.778 5.778 0 0 0 53.289 111.133 C 54.215 109.989 54.958 108.399 55.452 106.449 A 18.662 18.662 0 0 0 55.499 106.259 A 37.905 37.905 0 0 0 56.441 101.379 C 56.802 98.605 57.019 95.133 57.199 89.959 L 57.399 84.059 L 58.299 82.459 C 60.174 79.178 65.213 71.678 69.462 65.81 A 230.427 230.427 0 0 1 70.299 64.659 C 72.031 62.254 72.467 61.237 72.32 59.649 A 7.839 7.839 0 0 0 72.299 59.459 C 72.204 58.32 72.019 57.992 71.573 58.219 A 1.19 1.19 0 0 0 71.499 58.259 A 2.216 2.216 0 0 0 71.216 58.555 C 69.736 60.282 63.622 68.791 60.174 73.931 A 119.934 119.934 0 0 0 59.099 75.559 A 76.972 76.972 0 0 1 58.599 76.336 C 58.131 77.053 57.774 77.559 57.699 77.559 A 0.055 0.055 0 0 1 57.652 77.526 C 57.615 77.461 57.615 77.306 57.653 77.129 A 1.593 1.593 0 0 1 57.699 76.959 C 57.699 76.559 57.799 73.059 57.899 69.159 C 58.099 65.259 58.199 62.059 58.199 62.059 A 0.023 0.023 0 0 1 58.219 62.04 C 58.355 61.994 59.185 62.177 60.099 62.359 A 198.411 198.411 0 0 1 60.119 62.363 C 62.946 62.949 63.192 63.054 63.672 62.587 A 3.085 3.085 0 0 0 63.699 62.559 C 63.943 62.397 64.055 62.102 64.088 61.729 A 3.043 3.043 0 0 0 64.099 61.459 A 1.36 1.36 0 0 0 63.404 60.251 C 62.818 59.866 61.822 59.574 60.264 59.318 A 37.76 37.76 0 0 0 59.199 59.159 Z M 35.499 58.359 L 32.699 58.559 L 32.799 58.059 A 25.097 25.097 0 0 1 33.094 57.137 C 34.54 52.825 39.694 39.303 42.903 31.344 A 277.144 277.144 0 0 1 43.999 28.659 A 468.614 468.614 0 0 1 45.78 24.361 C 49.168 16.293 52.971 7.795 54.064 5.987 A 1.594 1.594 0 0 1 54.299 5.659 C 54.393 5.566 54.487 5.647 54.498 5.986 A 2.14 2.14 0 0 1 54.499 6.059 A 3.27 3.27 0 0 0 54.503 6.193 C 54.522 6.628 54.611 7.683 54.699 8.659 A 73.867 73.867 0 0 1 54.922 12.293 C 55.143 17.61 55.221 26.566 55.299 40.159 A 1417.045 1417.045 0 0 1 55.282 47.223 C 55.249 53.753 55.174 58.384 55.099 58.459 A 0.21 0.21 0 0 1 55.009 58.621 A 0.189 0.189 0 0 1 54.899 58.659 A 12.033 12.033 0 0 0 53.873 58.537 C 50.501 58.245 41.758 58.112 36.655 58.306 A 66.532 66.532 0 0 0 35.499 58.359 Z M 53.299 92.159 L 54.099 90.359 L 54.099 91.959 C 54.099 94.088 53.842 98.186 53.487 100.767 A 27.56 27.56 0 0 1 53.399 101.359 A 48.657 48.657 0 0 1 52.977 103.93 C 52.432 106.725 51.738 108.521 50.799 109.459 A 5.274 5.274 0 0 1 50.555 109.689 C 50.309 109.906 50.111 110.027 49.96 110.054 A 0.35 0.35 0 0 1 49.899 110.059 C 49.599 110.059 49.199 109.159 48.999 108.059 C 48.67 105.753 49.9 100.599 51.909 95.445 A 60.943 60.943 0 0 1 53.299 92.159 Z M 15.928 101.383 A 7.332 7.332 0 0 0 15.999 101.359 A 0.483 0.483 0 0 0 16.199 101.164 C 16.382 100.849 16.315 100.317 15.999 100.159 A 0.638 0.638 0 0 0 15.926 100.14 C 15.368 100.025 15.016 100.776 15.399 101.159 A 20.606 20.606 0 0 0 15.463 101.222 C 15.679 101.437 15.716 101.451 15.928 101.383 Z"
            id="0"
            animate={{
              fill: [lightOff, pink, lightOff, pink, lightOff, pink, lightOff, pink],
              stroke: [lightOff, pink, lightOff, pink, lightOff, pink, lightOff, pink],
            }}
            transition={{
              duration: 0.5,
              times: [0.05, 0.1, 0.2, 0.25, 0.32, 0.38, 0.4, 0.45, 0.5],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <motion.path
            d="M 85.293 72.357 A 21.789 21.789 0 0 0 85.499 72.159 C 88.099 69.659 91.399 65.159 91.999 63.059 C 92.699 60.759 92.699 58.059 91.899 58.059 A 0.244 0.244 0 0 0 91.76 58.125 C 91.6 58.253 91.378 58.56 91.114 58.964 A 31.763 31.763 0 0 0 90.799 59.459 C 90.399 60.259 89.599 61.659 88.999 62.659 A 33.234 33.234 0 0 1 85.091 68.214 C 83.451 70.092 81.746 71.563 80.299 72.259 A 16.473 16.473 0 0 1 79.889 72.474 C 78.923 72.959 78.596 72.959 77.799 72.959 A 4.27 4.27 0 0 1 77.119 72.853 C 76.413 72.677 75.917 72.295 75.303 71.524 A 11.631 11.631 0 0 1 75.099 71.259 A 6.826 6.826 0 0 1 74.068 69.27 C 72.49 64.693 73.522 56.607 76.599 52.759 A 5.553 5.553 0 0 1 77.013 52.294 C 78.016 51.294 78.868 51.431 79.569 52.703 A 4.777 4.777 0 0 1 79.599 52.759 A 2.613 2.613 0 0 1 79.874 53.379 C 80.222 54.496 80.219 56.264 79.901 57.653 A 6.476 6.476 0 0 1 79.699 58.359 A 5.226 5.226 0 0 0 79.547 58.828 C 79.227 60.013 79.539 60.784 80.381 60.933 A 1.827 1.827 0 0 0 80.699 60.959 C 81.832 60.959 82.608 59.801 83.028 57.065 A 21.327 21.327 0 0 0 83.099 56.559 C 83.699 52.459 81.399 48.559 78.299 48.559 A 4.857 4.857 0 0 0 75.259 49.896 C 73.91 51.084 72.707 53.029 71.797 55.599 A 27.024 27.024 0 0 0 70.899 58.759 A 10.344 10.344 0 0 0 70.714 59.724 C 70.306 62.457 70.358 67.181 70.799 68.859 C 71.404 71.095 72.263 72.782 73.444 73.967 A 6.901 6.901 0 0 0 76.199 75.659 C 78.745 76.638 82.058 75.412 85.293 72.357 Z"
            id="1"
            animate={{
              fill: [lightOff, pink, lightOff, pink, lightOff, pink, lightOff, pink],
              stroke: [lightOff, pink, lightOff, pink, lightOff, pink, lightOff, pink],
            }}
            transition={{
              duration: 0.5,
              times: [0.05, 0.1, 0.2, 0.25, 0.32, 0.38, 0.4, 0.45, 0.5],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <path
            d="M 105.393 72.357 A 21.789 21.789 0 0 0 105.599 72.159 C 108.199 69.659 111.499 65.159 112.099 63.059 C 112.799 60.759 112.799 58.059 111.999 58.059 A 0.244 0.244 0 0 0 111.86 58.125 C 111.7 58.253 111.478 58.56 111.214 58.964 A 31.763 31.763 0 0 0 110.899 59.459 C 110.499 60.259 109.699 61.659 109.099 62.659 A 33.234 33.234 0 0 1 105.191 68.214 C 103.551 70.092 101.846 71.563 100.399 72.259 A 16.473 16.473 0 0 1 99.989 72.474 C 99.023 72.959 98.696 72.959 97.899 72.959 A 4.27 4.27 0 0 1 97.219 72.853 C 96.513 72.677 96.017 72.295 95.403 71.524 A 11.631 11.631 0 0 1 95.199 71.259 A 6.826 6.826 0 0 1 94.168 69.27 C 92.59 64.693 93.622 56.607 96.699 52.759 A 5.553 5.553 0 0 1 97.113 52.294 C 98.116 51.294 98.968 51.431 99.669 52.703 A 4.777 4.777 0 0 1 99.699 52.759 A 2.613 2.613 0 0 1 99.974 53.379 C 100.322 54.496 100.319 56.264 100.001 57.653 A 6.476 6.476 0 0 1 99.799 58.359 A 5.226 5.226 0 0 0 99.647 58.828 C 99.327 60.013 99.639 60.784 100.481 60.933 A 1.827 1.827 0 0 0 100.799 60.959 C 101.932 60.959 102.708 59.801 103.128 57.065 A 21.327 21.327 0 0 0 103.199 56.559 C 103.799 52.459 101.499 48.559 98.399 48.559 A 4.857 4.857 0 0 0 95.359 49.896 C 94.01 51.084 92.807 53.029 91.897 55.599 A 27.024 27.024 0 0 0 90.999 58.759 A 10.344 10.344 0 0 0 90.814 59.724 C 90.406 62.457 90.458 67.181 90.899 68.859 C 91.504 71.095 92.363 72.782 93.544 73.967 A 6.901 6.901 0 0 0 96.299 75.659 C 98.845 76.638 102.158 75.412 105.393 72.357 Z"
            id="2"
          />
          <path
            d="M 113.499 69.159 A 2.753 2.753 0 0 0 114.26 69.335 C 115.949 69.477 117.637 68.029 118.504 65.947 A 7.816 7.816 0 0 0 119.099 63.159 C 119.099 62.459 119.099 61.559 118.999 61.159 A 26.928 26.928 0 0 1 118.961 61.044 C 118.806 60.571 118.839 60.566 119.362 60.653 A 88.133 88.133 0 0 1 119.399 60.659 C 122.954 61.474 125.357 61.521 126.73 60.8 A 2.468 2.468 0 0 0 127.799 59.759 A 2.197 2.197 0 0 0 127.959 59.452 C 128.267 58.727 128.124 57.972 127.599 58.059 C 127.4 58.059 126.203 58.159 124.806 58.159 A 19.949 19.949 0 0 1 124.799 58.159 C 122.699 58.259 122.199 58.259 120.799 57.859 C 118.799 57.359 117.999 56.959 116.799 55.959 A 7.754 7.754 0 0 0 116.419 55.633 C 115.552 54.942 115.014 54.908 114.399 55.259 C 114.199 55.459 113.699 55.759 113.299 55.959 A 1.61 1.61 0 0 0 113.002 56.157 C 111.881 57.077 110.682 59.964 110.402 62.439 A 10.773 10.773 0 0 0 110.399 62.459 A 8.712 8.712 0 0 0 110.359 63.298 C 110.359 66.068 111.681 68.523 113.499 69.159 Z M 114.569 58.945 A 8.154 8.154 0 0 0 114.499 59.059 A 6.208 6.208 0 0 0 114.159 59.759 C 113.411 61.561 113.245 64.031 113.746 65.41 A 2.171 2.171 0 0 0 114.099 66.059 A 3.986 3.986 0 0 0 114.213 66.169 C 114.491 66.425 114.614 66.423 114.894 66.161 A 4.15 4.15 0 0 0 114.999 66.059 A 0.811 0.811 0 0 0 115.054 65.999 C 115.251 65.756 115.525 65.216 115.799 64.759 C 116.212 63.865 116.246 62.735 115.967 61.53 A 9.315 9.315 0 0 0 115.399 59.859 C 114.849 58.668 114.804 58.568 114.569 58.945 Z"
            id="3"
          />
          <path
            d="M 140.499 62.059 L 141.199 60.859 L 141.599 61.959 C 142.65 64.935 144.925 66.225 147.488 65.496 A 6.42 6.42 0 0 0 148.599 65.059 A 5.383 5.383 0 0 0 149.135 64.766 C 150.668 63.822 152.855 61.716 153.299 60.559 A 4.453 4.453 0 0 0 153.619 59.697 C 153.798 59.01 153.816 58.324 153.673 57.918 A 0.877 0.877 0 0 0 153.599 57.759 A 0.145 0.145 0 0 0 153.461 57.671 C 153.292 57.671 152.975 57.884 152.399 58.459 A 238.854 238.854 0 0 1 151.486 59.247 C 149.22 61.191 148.478 61.725 147.499 62.259 A 205.06 205.06 0 0 1 147.236 62.379 C 146.363 62.774 146.157 62.842 145.699 62.659 C 144.71 62.209 144.125 60.869 143.799 58.127 A 32.187 32.187 0 0 1 143.699 57.159 A 24.274 24.274 0 0 0 143.646 56.494 C 143.552 55.501 143.421 54.801 143.333 54.473 A 2.039 2.039 0 0 0 143.299 54.359 C 143.01 53.997 142.51 53.74 142.028 53.74 A 1.174 1.174 0 0 0 141.499 53.859 C 140.956 54.041 140.658 54.386 139.714 56.683 A 87.744 87.744 0 0 0 139.399 57.459 C 136.503 64.411 132.674 67.821 130.253 65.797 A 3.174 3.174 0 0 1 129.999 65.559 A 5.192 5.192 0 0 1 128.918 63.703 C 128.601 62.797 128.414 61.665 128.339 60.212 A 31.918 31.918 0 0 1 128.299 58.559 C 128.299 55.759 128.099 55.159 127.299 54.859 A 1.694 1.694 0 0 0 126.977 54.785 C 126.386 54.71 125.87 54.988 125.585 55.526 A 1.958 1.958 0 0 0 125.399 56.059 A 2.733 2.733 0 0 0 125.335 56.398 C 125.134 57.859 125.333 61.609 125.699 63.259 C 126.299 66.259 127.999 68.459 130.199 69.159 A 1.691 1.691 0 0 0 130.372 69.205 C 130.671 69.27 131.157 69.32 131.644 69.294 A 4.09 4.09 0 0 0 131.999 69.259 A 11.652 11.652 0 0 0 132.532 69.249 C 133.27 69.215 133.802 69.09 134.546 68.734 A 9.556 9.556 0 0 0 134.699 68.659 A 10.288 10.288 0 0 0 136.8 67.091 C 138.081 65.876 139.332 64.199 140.499 62.059 Z"
            id="4"
          />
          <path
            d="M 153.599 70.659 A 4.655 4.655 0 0 0 153.949 70.837 C 154.646 71.15 155.137 71.091 155.999 70.659 A 4.096 4.096 0 0 0 156.577 70.312 C 157.479 69.66 158.381 68.427 160.491 65.054 A 243.943 243.943 0 0 0 160.799 64.559 C 164.099 59.359 165.799 57.159 167.599 55.159 A 71.21 71.21 0 0 1 168.064 54.699 C 169.082 53.699 169.649 53.222 169.901 53.222 A 0.132 0.132 0 0 1 169.999 53.259 A 0.617 0.617 0 0 0 170.008 53.333 C 170.045 53.57 170.191 54.291 170.281 55.168 A 16.018 16.018 0 0 1 170.299 55.359 A 181.464 181.464 0 0 0 170.447 56.291 C 171.073 60.186 171.571 62.302 172.499 64.159 C 174.059 67.57 176.853 68.322 179.308 65.951 A 7.304 7.304 0 0 0 179.499 65.759 A 14.793 14.793 0 0 0 181.837 62.857 C 182.459 61.848 182.907 60.839 183.097 59.989 A 3.833 3.833 0 0 0 183.199 59.159 A 3.873 3.873 0 0 0 183.18 58.754 C 183.059 57.608 182.35 57.922 180.991 59.757 A 23.551 23.551 0 0 0 180.699 60.159 A 44.733 44.733 0 0 1 179.318 62.001 C 178.422 63.125 177.626 63.969 177.129 64.209 A 0.819 0.819 0 0 1 176.999 64.259 A 1.041 1.041 0 0 1 176.754 64.332 C 176.157 64.428 175.628 63.893 175.099 62.659 A 15.083 15.083 0 0 1 174.362 60.573 C 174.095 59.608 173.864 58.46 173.615 56.902 A 92.099 92.099 0 0 1 173.499 56.159 A 40.491 40.491 0 0 0 173.289 54.693 C 173.141 53.787 172.98 53.008 172.85 52.601 A 2.174 2.174 0 0 0 172.799 52.459 A 3.665 3.665 0 0 0 172.192 51.267 A 2.968 2.968 0 0 0 170.299 50.159 C 169.224 50.077 168.149 50.541 166.678 51.892 A 20.666 20.666 0 0 0 165.699 52.859 A 36.191 36.191 0 0 0 164.606 54.056 C 162.921 55.987 161.235 58.342 158.599 62.459 A 1119.546 1119.546 0 0 1 157.753 63.793 C 155.798 66.866 155.076 67.936 154.899 67.759 A 0.263 0.263 0 0 1 154.853 67.663 C 154.776 67.431 154.7 66.846 154.624 66.174 A 87.009 87.009 0 0 1 154.599 65.959 A 11.87 11.87 0 0 1 154.506 65.013 C 154.332 62.183 154.916 58.111 155.899 55.159 C 156.16 54.378 156.496 53.521 156.645 53.178 A 2.702 2.702 0 0 1 156.699 53.059 C 156.851 52.529 156.716 52.056 156.337 51.684 A 2.127 2.127 0 0 0 155.899 51.359 C 155.521 51.076 155.322 51.06 154.879 51.313 A 4.132 4.132 0 0 0 154.799 51.359 C 152.958 52.28 151.117 60.657 151.538 65.961 A 13.781 13.781 0 0 0 151.699 67.259 C 151.935 68.44 152.419 69.62 153.053 70.264 A 1.813 1.813 0 0 0 153.599 70.659 Z"
            id="5"
          />
          <path
            d="M 186.499 31.559 L 186.699 30.259 L 188.199 30.159 C 193.699 29.959 214.199 30.959 219.699 31.659 A 104.1 104.1 0 0 1 219.715 31.661 C 222.146 31.953 222.391 32.054 222.867 31.685 A 2.674 2.674 0 0 0 222.899 31.659 C 223.251 31.396 223.371 31.21 223.395 30.762 A 3.799 3.799 0 0 0 223.399 30.559 C 223.495 29.509 222.861 29.097 220.54 28.714 A 31.328 31.328 0 0 0 220.199 28.659 A 19.903 19.903 0 0 0 219.259 28.542 C 214.56 28.047 199.825 27.362 193.543 27.262 A 127.012 127.012 0 0 0 193.399 27.259 A 242.195 242.195 0 0 0 191.61 27.212 C 189.144 27.156 187.281 27.141 187.199 27.059 C 187 26.859 187.998 21.566 188.598 19.463 A 16.216 16.216 0 0 1 188.599 19.459 C 188.863 18.669 189.203 17.494 189.35 16.745 A 5.68 5.68 0 0 0 189.399 16.459 C 189.399 15.434 189.313 15.191 188.977 14.839 A 4.614 4.614 0 0 0 188.899 14.759 A 2.02 2.02 0 0 0 188.575 14.434 C 187.804 13.825 186.835 14.1 186.399 15.059 C 186.199 15.659 185.099 20.759 184.499 24.059 A 44.681 44.681 0 0 0 184.494 24.086 C 184.206 25.53 184.011 26.876 183.909 27.047 A 0.065 0.065 0 0 1 183.899 27.059 C 183.805 27.059 181.85 27.237 179.535 27.257 A 48.602 48.602 0 0 1 179.099 27.259 A 496.699 496.699 0 0 0 172.556 27.48 C 163.55 27.84 154.543 28.431 151.599 28.977 A 8.967 8.967 0 0 0 151.199 29.059 A 2.301 2.301 0 0 0 150.491 29.239 C 149.923 29.492 149.599 29.972 149.599 30.559 C 149.599 31.269 149.914 31.822 150.544 32.077 A 1.917 1.917 0 0 0 150.799 32.159 A 1.668 1.668 0 0 0 151.048 32.203 C 152.218 32.341 156.183 32.226 160.399 31.859 A 3034.658 3034.658 0 0 0 161.519 31.757 C 163.297 31.595 165.427 31.398 166.956 31.239 A 106.536 106.536 0 0 0 167.699 31.159 A 271.18 271.18 0 0 1 169.904 30.972 C 173.312 30.697 176.049 30.559 179.199 30.559 A 60.516 60.516 0 0 1 180.51 30.502 C 181.762 30.459 182.774 30.459 182.999 30.459 A 28.842 28.842 0 0 1 183.08 30.473 C 183.599 30.561 183.59 30.592 183.399 31.259 A 314.017 314.017 0 0 0 183.203 33.039 C 182.749 37.259 182.552 40.02 182.199 44.959 C 181.462 59.62 181.829 78.955 183.772 87.369 A 19.266 19.266 0 0 0 184.299 89.259 C 184.899 91.159 186.599 94.759 187.199 95.559 C 187.583 95.943 188.612 96.235 189.048 95.993 A 0.452 0.452 0 0 0 189.099 95.959 C 189.399 95.759 189.899 95.059 189.899 94.659 A 0.43 0.43 0 0 0 189.874 94.538 C 189.782 94.252 189.454 93.669 189.199 93.159 C 187.16 89.395 185.982 85.507 185.328 79.759 A 92.46 92.46 0 0 1 184.899 74.559 C 184.399 66.959 184.899 47.159 185.699 38.959 A 197.449 197.449 0 0 1 185.922 36.671 C 186.128 34.667 186.336 32.898 186.445 32 A 136.099 136.099 0 0 1 186.499 31.559 Z"
            id="6"
          />
        </g>
      </svg>
    </Flex>
  )
}

export default Account
