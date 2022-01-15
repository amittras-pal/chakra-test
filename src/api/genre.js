import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getGenresList(type) {
  return axios.get(`${ENDPOINTS.genre + type}/list`);
}
