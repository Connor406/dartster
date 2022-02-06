import Wrapper from "@/components/Wrapper"
import { axios, API_URL } from "@/services"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import { Button, FormControl, Input } from "@chakra-ui/react"

interface Form {
  oldPassword: string
  newPassword: string
}

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit: SubmitHandler<Form> = async userInput => {
    const { data } = await axios.post(`${API_URL}/user/change-password`, userInput)
    if (data) router.push("/")
  }

  return (
    <Wrapper>
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <Input
          $name={errors["username"]}
          placeholder="old password"
          type="password"
          {...register("oldPassword", {
            required: true,
          })}
        />
        <Input
          $name={errors["password"]}
          placeholder="new password"
          type="password"
          {...register("newPassword", {
            validate: (val: string) => val.length >= 5 || "Password must be at least 5 characters",
            required: true,
          })}
        />
        <Button type="submit">Change Password</Button>
        {/* {message && (
          <Style.Error>
            {message[0]?.type && message[0]?.type !== "validate"
              ? message[0]?.type
              : message[0]?.message ?? ""}
          </Style.Error>
        )} */}
      </FormControl>
    </Wrapper>
  )
}
