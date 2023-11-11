import axios, { AxiosError, AxiosResponse } from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/auth`

// Types should be extracted to separate file
type AuthBase = {
  email: string
  password: string
}

type SignUpRequest = AuthBase & { name: string }

type LoginRequest = AuthBase

type LoginResponse = AuthBase & { tokenId: string }

const signUp = async (values: SignUpRequest) => {
  const result = await axios.post<SignUpRequest, AxiosResponse<string>>(
    `${baseUrl}/registeruser`,
    values
  )
  return result
}

const login = async (values: LoginRequest) => {
  try {
    const { data } = await axios.post<
      LoginRequest,
      AxiosResponse<LoginResponse>
    >(`${baseUrl}/login`, values)
    console.log('Login success, response data:', data) // Remove this console after you understand the data structure.
    localStorage.setItem('tokenId', data.tokenId)
    // You can also store the name and email to global context or redux so you can use it for the profile page
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError
    console.log(error.response?.data) // error.response?.data: {message: "wrong message"}
  }
}

export { login, signUp }
