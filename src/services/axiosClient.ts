import axios from "axios";
import { storage } from "../utils/storage";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = storage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      storage.clearAuth();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;