import axios, { API_URL } from "../../../services"
import { AxiosResponse } from "axios"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

function Token() {
  const router = useRouter()

  async function verifyEmail(email, token) {
    try {
      if (email && token) {
        const body = { email, token }
        const res: AxiosResponse = await axios.post(`${API_URL}/user/verify`, body)
        console.log(res)
        if (res.status === 200) router.push("/")
      } else {
        console.log("waiting for email and token")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const { email, token } = router.query
    verifyEmail(email, token)
  }, [router.query])

  return <div style={{ marginTop: "8rem" }}>hi</div>
}

export default Token
