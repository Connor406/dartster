import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { AxiosResponse } from "axios"
import { axios, API_URL } from "@/services"
import { useRouter } from "next/router"
import { Box, Button, FormControl, FormHelperText, Input, Text } from "@chakra-ui/react"
import Wrapper from "@/components/Wrapper"

interface IFormInput {
  email: string
}

interface Response extends AxiosResponse {
  data: {
    error?: string
    where?: string
  }
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [userError, setUserError] = useState("")
  const router = useRouter()

  const onSubmit: SubmitHandler<IFormInput> = async userInput => {
    const res: Response = await axios.post(`${API_URL}/user/register`, userInput)
    if (res.status === 200) {
      router.push("/")
    } else if (res.data.error === "P2002") {
      console.log(res.data.where)
      setUserError(`An account exists with this ${res.data.where}.`)
    }
  }

  const message = Object.values(errors)
  console.log(message)

  return (
    <Wrapper size="small">
      <Text fontSize="3rem" fontFamily="Lansdowne Slanted" color="gold">
        Create an account
      </Text>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)} h="80vh">
        <Box display="flex" width="100%" margin="0px" padding="0px" my="1rem">
          <Input
            mr="1rem"
            $name={errors["firstName"]}
            placeholder="first name"
            {...register("firstName", {
              required: true,
            })}
          />
          <Input
            $name={errors["lastName"]}
            placeholder="last name"
            {...register("lastName", {
              required: true,
            })}
          />
        </Box>
        <Input
          mb="1rem"
          $name={errors["username"]}
          placeholder="username"
          {...register("username", {
            required: true,
          })}
        />
        <Input
          mb="1rem"
          $name={errors["email"]}
          placeholder="email"
          type="email"
          {...register("email", {
            validate: (val: string) => val.includes("@") || "Please enter valid email",
            required: true,
          })}
        />
        <Input
          mb="1rem"
          $name={errors["password"]}
          placeholder="password"
          type="password"
          {...register("password", {
            validate: (val: string) => val.length >= 8 || "Password must be at least 8 characters",
            required: true,
          })}
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Sign Up
        </Button>
        {userError && <FormHelperText color="red">{userError}</FormHelperText>}
        {message && (
          <FormHelperText color="red">
            {message[0]?.type !== "validate" ? message[0]?.type : message[0]?.message ?? ""}
          </FormHelperText>
        )}
      </FormControl>
    </Wrapper>
  )
}
