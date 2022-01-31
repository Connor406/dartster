import * as Style from "@/components/styled"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { AxiosResponse } from "axios"
import { axios, API_URL } from "@/services"
import { useRouter } from "next/router"

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
    <div style={{ marginTop: "8rem" }}>
      <Style.Form onSubmit={handleSubmit(onSubmit)}>
        <Style.NameBox>
          <div>
            <Style.Input
              $name={errors["firstName"]}
              placeholder="first name"
              {...register("firstName", {
                required: true,
              })}
            />
          </div>
          <Style.Input
            $name={errors["lastName"]}
            placeholder="last name"
            {...register("lastName", {
              required: true,
            })}
          />
        </Style.NameBox>
        <Style.Input
          $name={errors["username"]}
          placeholder="username"
          {...register("username", {
            required: true,
          })}
        />
        <Style.Input
          $name={errors["email"]}
          placeholder="email"
          type="email"
          {...register("email", {
            validate: (val: string) => val.includes("@") || "Please enter valid email",
            required: true,
          })}
        />
        <Style.Input
          $name={errors["password"]}
          placeholder="password"
          type="password"
          {...register("password", {
            validate: (val: string) => val.length >= 5 || "Password must be at least 5 characters",
            required: true,
          })}
        />
        <Style.Button type="submit" />
        {userError && <Style.Error>{userError}</Style.Error>}
        {message && (
          <Style.Error>
            {message[0]?.type && message[0]?.type !== "validate"
              ? message[0]?.type
              : message[0]?.message ?? ""}
          </Style.Error>
        )}
      </Style.Form>
    </div>
  )
}
