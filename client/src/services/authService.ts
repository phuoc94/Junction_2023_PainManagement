import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../utils/AxiosInstance";

const baseUrl = "/auth";

// Types should be extracted to separate file
type AuthBase = {
  email: string;
  password: string;
};

type SignUpRequest = AuthBase & { name: string };

type LoginRequest = AuthBase;

type LoginResponse = AuthBase & { tokenId: string; name?: string };

const signUp = async (values: SignUpRequest) => {
  const result = await axiosInstance.post<SignUpRequest, AxiosResponse<string>>(
    `${baseUrl}/registeruser`,
    values
  );
  return result;
};

const login = async (values: LoginRequest) => {
  try {
    const { data } = await axiosInstance.post<
      LoginRequest,
      AxiosResponse<LoginResponse>
    >(`${baseUrl}/login`, values);
    localStorage.setItem("tokenId", data.tokenId);
    localStorage.setItem(
      "user",
      JSON.stringify({ name: data.name, email: data.email })
    );
  } catch (e: unknown) {
    const error: AxiosError = e as AxiosError;
    throw error;
  }
};

export { signUp, login };
