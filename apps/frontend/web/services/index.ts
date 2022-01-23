import axios from "axios"

export interface ApiResponse {
  message: string
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
