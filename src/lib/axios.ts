/**@type {import('axios').Config} */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL_DEV
      : process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
})

axiosClient.interceptors.request.use(
  (request) => {
    // if (partUserInfo)
    //   request.headers.Authorization = `Bearer ${partUserInfo?.data?.accessToken}`

    return request
  },
  (err) => {
    return { status: err.request.status, request: err.request.data.errors }
  },
)

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error) => {
    if (error.response.status === 401) {
      // handle logout: clear cookies, move to login page

      const backToLogin: any = () => {
        const url: string = window.location.origin
        window.location.href = `${url}/login`
      }
    }
    if (error.response.status === 500) {
      // handle notification for user server error
    }
    return Promise.reject(error)
  },
)

const API_SERVICE = {
  get: <T>(url: string, obj?: object) => axiosClient.get<T>(url, obj),
  post: <T>(url: string, obj: object, config?: AxiosRequestConfig) =>
    axiosClient.post<T>(url, obj, config),
  patch: <T>(url: string, obj: object) => axiosClient.patch<T>(url, obj),
  put: <T>(url: string, obj: object) => axiosClient.put<T>(url, obj),
  delete: <T>(url: string, obj?: object) => axiosClient.delete<T>(url, obj),
}

export { API_SERVICE }
