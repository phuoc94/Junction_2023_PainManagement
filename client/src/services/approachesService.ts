import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/approaches`

type Detail = {
  _id: string
  name: string
  description: string
  img_url: string
}

type GetAllApproachesResponse = {
  _id: string
  name: string
  description: string
  details: Detail[]
  img_url: string
}[]

const getAllApproaches = async () => {
  const { data } = await axios.get<GetAllApproachesResponse>(baseUrl)
  console.log(data)
  return data
}

export { getAllApproaches }
