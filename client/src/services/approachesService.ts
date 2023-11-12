import { GetAllApproachesResponse } from "../@types/approaches";
import axiosInstance from "../utils/AxiosInstance";

const baseUrl = "/approaches";

const getAllApproaches = async () => {
  const { data } = await axiosInstance.get<GetAllApproachesResponse>(baseUrl);
  return data;
};

export { getAllApproaches };
