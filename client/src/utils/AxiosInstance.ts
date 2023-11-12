import axios from "axios";

const backendURL = process.env.REACT_APP_API_URL || 'http://localhost:8080'

export const baseURL = `${backendURL}/api/v1`;

const axiosInstance = axios.create({ baseURL });
export default axiosInstance;
