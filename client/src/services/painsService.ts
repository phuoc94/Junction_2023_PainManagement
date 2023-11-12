import { GetAllPainsResponse } from "../@types/pain";
import axiosInstance from "../utils/AxiosInstance";

const baseUrl = "/pains";

const getAllPains = async () => {
  const { data } = await axiosInstance.get<GetAllPainsResponse>(baseUrl);
  return data;
};

export { getAllPains };
