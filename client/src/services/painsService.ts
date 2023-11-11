import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/pains`

type GetAllPainsResponse = {
  _id: string
  name: string
  description: string
  approaches: string[]
}[]

const getAllPains = async () => {
  const { data } = await axios.get<GetAllPainsResponse>(baseUrl)
  console.log(data[0].approaches[0])
  return data
}

export { getAllPains }
