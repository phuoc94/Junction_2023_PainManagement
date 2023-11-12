import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../utils/AxiosInstance";
import { AddApproachToMeResponse, GetMyApproaches } from "../@types/approaches";
import { GetMyAchievements } from "../@types/achievements";

const baseUrl = "/users";

const tokenId = localStorage.getItem("tokenId");

const getMyAchievements = async () => {
  try {
    const { data } = await axiosInstance.get<GetMyAchievements>(
      `${baseUrl}/achievements`,
      { headers: { Authorization: `Bearer ${tokenId}` } }
    );
    console.log(data);
    return data;
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError;
    console.log(error.response?.data);
    throw error;
  }
};

const getMyApproaches = async () => {
  try {
    const { data } = await axiosInstance.get<GetMyApproaches>(
      `${baseUrl}/approaches`,
      {
        headers: { Authorization: `Bearer ${tokenId}` },
      }
    );
    console.log(data);
    return data;
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError;
    console.log(error.response?.data);
    throw error;
  }
};

const addApproachToMe = async (approachId: string) => {
  try {
    const { data } = await axiosInstance.post<
      string,
      AxiosResponse<AddApproachToMeResponse>
    >(
      `${baseUrl}/approaches`,
      { approachId },
      { headers: { Authorization: `Bearer ${tokenId}` } }
    );
    console.log(data);
    return data;
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError;
    console.log(error.response?.data);
    throw error;
  }
};

export { getMyAchievements, getMyApproaches, addApproachToMe };
