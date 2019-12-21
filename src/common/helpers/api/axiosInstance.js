import axios from "axios";
import { registerIntercepters } from "./intercepters";

const API_URL = process.env.REACT_APP_BASE_API;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    post: {
      "Content-Type": "multipart/form-data; application/json"
    },
    patch: {
      "Content-Type": "multipart/form-data; application/json"
    },
    delete: {
      "Content-Type": "application/json"
    }
  },
  onUploadProgress: function (progressEvent) {
    let progress = 0;
    progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  }
});

registerIntercepters(axiosInstance);

export default axiosInstance;
