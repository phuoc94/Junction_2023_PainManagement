import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/achievements`
type GetAllAchievementsResponse = {
  _id: string
  name: string
  description: string
  img_url: string
}[]

const getAllAchievements = async () => {
  const { data } = await axios.get<GetAllAchievementsResponse>(baseUrl)
  console.log(data)
  return data
}

export { getAllAchievements }
