import { GetAllPainsResponse } from "../@types/pain";
import axiosInstance from "../utils/AxiosInstance";

const baseUrl = "/pains";

const getAllPains = async () => {
  const { data } = await axiosInstance.get<GetAllPainsResponse>(baseUrl);
  console.log(data[0].approaches[0]);
  return data;
};

export { getAllPains };
