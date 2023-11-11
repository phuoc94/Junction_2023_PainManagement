import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}/pains-categories`

// Types should be extracted to separate file
type Base = {
  _id: string
  name: string
  description: string
  img_url: string
}

type Detail = Base

type Achievement = Base

type Approach = Base & {
  details: Detail[]
  achievements: Achievement
}

type SimplePain = Base & {
  approaches: string[]
}

type Category = Base & {
  pains: SimplePain[]
}

type Pain = Base & {
  approaches: Approach[]
}

type SingleCategoryResponse = Base & {
  pains: Pain[]
}

type CategoriesResponse = Category[]

const getCategories = async () => {
  const { data } = await axios.get<CategoriesResponse>(baseUrl)
  console.log(data)
}

const getSingleCategory = async (categoryId: string) => {
  const { data } = await axios.get<SingleCategoryResponse>(
    `${baseUrl}/${categoryId}`
  )
  console.log(data) // You can check the data structure, remember to remove this line
}

export { getCategories, getSingleCategory }
