import axios from "axios";

export const baseURL = "http://localhost:8080/api/v1";

const axiosInstance = axios.create({ baseURL });
export default axiosInstance;
