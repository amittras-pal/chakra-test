import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getReviews(type, id, page) {
  return axios.get(`/${type}/${id}/reviews`, {
    params: { page },
  });
}
