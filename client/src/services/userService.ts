import axios, { AxiosError, AxiosResponse } from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/users`

const tokenId = localStorage.getItem('tokenId')

type GetMyAchievements = {
  _id: string
  name: string
  description: string
  img_url: string
}[]

type GetMyApproaches = {
  _id: string
  name: string
  description: string
  img_url: string
  status: string
}[]

type AddApproachToMeResponse = {
  _id: string
  userId: string
  approachId: string
  status: string
}

const getMyAchievements = async () => {
  try {
    const { data } = await axios.get<GetMyAchievements>(
      `${baseUrl}/achievements`,
      { headers: { Authorization: `Bearer ${tokenId}` } }
    )
    console.log(data)
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError
    console.log(error.response?.data)
  }
}

const getMyApproaches = async () => {
  try {
    const { data } = await axios.get<GetMyApproaches>(`${baseUrl}/approaches`, {
      headers: { Authorization: `Bearer ${tokenId}` },
    })
    console.log(data)
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError
    console.log(error.response?.data)
  }
}

const addApproachToMe = async (approachId: string) => {
  try {
    const { data } = await axios.post<
      string,
      AxiosResponse<AddApproachToMeResponse>
    >(
      `${baseUrl}/approaches`,
      { approachId },
      { headers: { Authorization: `Bearer ${tokenId}` } }
    )
    console.log(data)
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError
    console.log(error.response?.data)
  }
}

export { addApproachToMe, getMyAchievements, getMyApproaches }
