import Wrapper from "@/components/Wrapper"
import { Button, FormControl, Input, Text } from "@chakra-ui/react"
import { axios, API_URL } from "@/services"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"

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
    <Wrapper size="small">
      <Text fontSize="3rem" fontFamily="Lansdowne Slanted" color="gold">
        Welcome back
      </Text>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
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
          $name={errors["password"]}
          placeholder="password"
          type="password"
          {...register("password", {
            validate: (val: string) => val.length >= 5 || "Password must be at least 5 characters",
            required: true,
          })}
        />
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Login
        </Button>
      </FormControl>
    </Wrapper>
  )
}
