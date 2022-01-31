import Axios from "axios"

export interface ApiResponse {
  message: string
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
