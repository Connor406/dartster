import axios from "axios"
import { io } from "socket.io-client"

export interface ApiResponse {
  message: string
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export default axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

export const socket = io(process.env.NEXT_PUBLIC_API_URL)
