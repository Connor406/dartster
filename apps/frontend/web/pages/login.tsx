import Wrapper from "@/components/Wrapper"
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react"
import { axios, API_URL } from "@/services"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Welcome from "@/components/Text/Welcome"
import Back from "@/components/Text/Back"

interface Form {
  username: string
  password: string
}

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

  return (
    <Wrapper bgColor="black" size="small">
      <Flex justifyContent="center">
        <Welcome />
        <Back />
      </Flex>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          my="1rem"
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
