import axios from "axios";
import { registerIntercepters } from "./intercepters";

const API_URL = process.env.REACT_APP_BASE_API;

let progress = 0;

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
  onUploadProgress: function(progressEvent) {
    progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(progress);
  }
});

registerIntercepters(axiosInstance);

export default axiosInstance;
