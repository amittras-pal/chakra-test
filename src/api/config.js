import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getConfiguration() {
  return axios.get(ENDPOINTS.configuration);
}
