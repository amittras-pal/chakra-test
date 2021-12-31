import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getTrendingToday() {
  return axios.get(ENDPOINTS.trendingToday);
}
