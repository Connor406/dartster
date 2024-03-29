import { axios } from "@/services"
import { useEffect, useState } from "react"
import { useAtom } from "jotai"
import { userAtom } from "@/store"
import Wrapper from "@/components/Wrapper"

export default function Stats() {
  const [stats, setStats] = useState()
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    try {
      const res = async () => {
        const { data }: any = await axios.get(`/stats?id=${user.id}`)
        setStats(data)
      }
      if (user.id) res()
    } catch (error) {
      throw new Error(error)
    }
  }, [user])

  return (
    <Wrapper>
      <h1>...this page is under construction. Please come back later! 🛠</h1>
    </Wrapper>
  )
}
