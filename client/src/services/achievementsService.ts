import axiosInstance from '../utils/AxiosInstance'

const baseUrl = `${process.env.REACT_APP_API_URL}/achievements`
type GetAllAchievementsResponse = {
  _id: string
  name: string
  description: string
  img_url: string
}[]

const getAllAchievements = async () => {
  const { data } = await axiosInstance.get<GetAllAchievementsResponse>(baseUrl)
  return data
}

export { getAllAchievements }
