import axios from "axios"
import { DebugLogger } from "./Debug"

export const fetchApi = async (url) => {
  const response = axios.get(url, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}

export const fetchApiAnonymous = (url) => {
  const response = axios.get(url, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}

export const postApi = async (url, obj) => {
  const response = axios.post(url, obj, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}

export const postApiAnonymous = (url, obj) => {
  const response = axios.post(url, obj, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}

export const patchApi = async (url, obj) => {
  const response = axios.patch(url, obj, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}

export const patchApiAnonymous = (url, obj) => {
  const response = axios.patch(url, obj, {
    headers: {
      "Conent-Type": "application/json",
    },
  })

  return response
}
