"use client"
import axios, { AxiosRequestConfig } from "axios"

const clients = (options: Readonly<AxiosRequestConfig> = {}) => {
  const client = axios.create(options)

  client.interceptors.request.use(
    (config) => {
      const token = process.env.NEXT_PUBLIC_API_TOKEN

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return client
}

const baseURL = process.env.NEXT_PUBLIC_API_URL

const client = clients({
  baseURL,
  withCredentials: false,
  timeout: typeof window === "undefined" ? 5000 : undefined,
})

export { client }
