import styled from "styled-components"

type WrapperVariant = "small" | "regular"

interface WrapperProps {
  children: any
  size?: WrapperVariant
  bgColor?: string
  bgPic?: string
  color?: string
}

export default function Wrapper({
  children,
  size = "regular",
  bgColor,
  color,
  bgPic,
}: WrapperProps) {
  return (
    <Box color={color} bgPic={bgPic}>
      <InnerBox size={size as WrapperVariant} bgColor={bgColor}>
        {children}
      </InnerBox>
    </Box>
  )
}

const Box = styled.div<WrapperProps>`
  color: ${({ color }) => color ?? "var(--primary)"};
  background-image: ${({ bgPic }) => bgPic ?? "none"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const InnerBox = styled.div<WrapperProps>`
  margin: 0 auto;
  padding: ${({ size }) => (size === "small" ? "20%" : "10%")};
  width: 100%;
  background-color: ${({ bgColor }) => bgColor ?? "var(--white)"};
  text-align: center;
`
