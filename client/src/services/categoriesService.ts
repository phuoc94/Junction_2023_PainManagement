import { CategoriesResponse, SingleCategoryResponse } from "../@types/category";
import axiosInstance from "../utils/AxiosInstance";

const baseUrl = "/pains-categories";

const getCategories = async () => {
  const { data } = await axiosInstance.get<CategoriesResponse>(baseUrl);
  return data;
};

const getSingleCategory = async (categoryId: string) => {
  const { data } = await axiosInstance.get<SingleCategoryResponse>(
    `${baseUrl}/${categoryId}`
  );
  return data;
};

export { getCategories, getSingleCategory };
