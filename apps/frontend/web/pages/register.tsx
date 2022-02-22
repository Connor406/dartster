import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { AxiosResponse } from "axios"
import { axios, API_URL } from "@/services"
import { useRouter } from "next/router"
import { Box, Button, Flex, FormControl, FormHelperText, Input } from "@chakra-ui/react"
import Wrapper from "@/components/Wrapper"
import Create from "@/components/Text/Create"
import Account from "@/components/Text/Account"

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

  return (
    <Wrapper size="small" bgColor="black">
      <Flex justifyContent="center">
        <Create />
        <Account />
      </Flex>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)} h="80vh">
        <Box display="flex" width="100%" margin="0px" padding="0px" my="1rem">
          <Input
            mr="1rem"
            $name={errors["firstName"]}
            placeholder="first name"
            {...register("firstName", {
              required: true,
            })}
            borderColor="neonBlue"
            bg="black"
            color="white"
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
            $name={errors["lastName"]}
            placeholder="last name"
            {...register("lastName", {
              required: true,
            })}
            borderColor="neonBlue"
            bg="black"
            color="white"
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
        </Box>
        <Input
          mb="1rem"
          $name={errors["username"]}
          placeholder="username"
          {...register("username", {
            required: true,
          })}
          borderColor="neonBlue"
          bg="black"
          color="white"
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
          $name={errors["email"]}
          placeholder="email"
          type="email"
          {...register("email", {
            validate: (val: string) => val.includes("@") || "Please enter valid email",
            required: true,
          })}
          borderColor="neonBlue"
          bg="black"
          color="white"
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
          $name={errors["password"]}
          placeholder="password"
          type="password"
          {...register("password", {
            validate: (val: string) => val.length >= 8 || "Password must be at least 8 characters",
            required: true,
          })}
          borderColor="neonBlue"
          bg="black"
          color="white"
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
