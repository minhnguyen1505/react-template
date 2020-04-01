import axios from "axios";
import { registerIntercepters } from "./intercepters";

const COIN_API_URL = process.env.REACT_APP_COIN_API;

const axiosInstanceCoin = axios.create({
  baseURL: COIN_API_URL,
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
});

registerIntercepters(axiosInstanceCoin);

export default axiosInstanceCoin;
