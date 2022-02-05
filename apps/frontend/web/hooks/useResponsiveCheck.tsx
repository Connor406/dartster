import { useState, useEffect } from "react"
import { useMediaQuery } from "@chakra-ui/react"

export const UseResponsiveCheck = (): {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
} => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const mobileSize = useMediaQuery("(max-width:698px)")
  const tabletSize = useMediaQuery("(max-width:800px)")
  const desktopSize = useMediaQuery("(min-width:1024px)")

  useEffect(() => {
    setIsMobile(mobileSize[0])
    setIsTablet(tabletSize[0])
    setIsDesktop(desktopSize[0])
  }, [mobileSize, tabletSize, desktopSize])

  return { isMobile, isTablet, isDesktop }
}
