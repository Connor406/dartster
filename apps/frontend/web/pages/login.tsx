import Wrapper from "@/components/Wrapper"
import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react"
import { axios, API_URL } from "@/services"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

interface Form {
  username: string
  password: string
}

const MotionText = motion(Text)

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit: SubmitHandler<Form> = async userInput => {
    const { data } = await axios.post(`${API_URL}/user/login`, userInput)
    if (data) router.push("/")
  }

  // TODO: add 'forgot password' and 'change password' buttons

  const lightOff = "#29484d"
  const pink = "#ff37d497"
  return (
    <Wrapper bgColor="black" size="small">
      <Flex justifyContent="center">
        <Text fontSize="3rem" fontFamily="Sanpaullo" color="neonBlue">
          Welcome
        </Text>
        <MotionText
          fontSize="3rem"
          fontFamily="Sanpaullo"
          color="pink"
          animate={{
            color: [lightOff, pink, lightOff, pink, lightOff, pink, lightOff, pink],
          }}
          transition={{
            duration: 0.5,
            times: [0.05, 0.1, 0.2, 0.25, 0.32, 0.38, 0.4, 0.45, 0.5],
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          Back
        </MotionText>
      </Flex>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          mb="1rem"
          borderColor="neonBlue"
          $name={errors["username"]}
          bg="black"
          color="white"
          placeholder="username"
          {...register("username", {
            required: true,
          })}
          _hover={{
            borderColor: "pink",
          }}
          _focus={{
            borderColor: "neonPink",
          }}
          _autofill={{
            textFillColor: "#83EEFF",
            boxShadow: "0 0 0px 100px #12151f inset",
          }}
        />
        <Input
          mb="1rem"
          borderColor="neonBlue"
          $name={errors["password"]}
          placeholder="password"
          type="password"
          color="white"
          {...register("password", {
            validate: (val: string) => val.length >= 5 || "Password must be at least 5 characters",
            required: true,
          })}
          _hover={{
            borderColor: "pink",
          }}
          _focus={{
            borderColor: "neonPink",
          }}
        />
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          bg="black"
          border="1px solid #ff37d497"
          color="pink"
          _hover={{
            border: "1px solid #ff37d4",
            color: "neonPink",
          }}
        >
          Login
        </Button>
      </FormControl>
    </Wrapper>
  )
}
