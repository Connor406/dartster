import { useState } from "react"
import { axios, API_URL } from "@/services"
import * as Style from "@/components/styled"
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
    <Style.Wrap>
      <Style.Form onSubmit={handleSubmit(onSubmit)}>
        <Style.Input
          $name={errors["username"]}
          placeholder="username"
          {...register("username", {
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
      </Style.Form>
    </Style.Wrap>
  )
}
