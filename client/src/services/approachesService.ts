import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/approaches";

type Detail = {
  _id: string,
  name: string,
  description: string,
}

type GetAllApproachesResponse = {
  _id: string,
  name: string,
  description: string,
  details: Detail[],
}[];

const getAllApproaches = async () => {
  const { data } = await axios.get<GetAllApproachesResponse>(baseUrl);
  console.log(data[0]);
  return data;
};

export {
  getAllApproaches,
};
