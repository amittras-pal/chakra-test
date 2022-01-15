import axios from "../config/axios.config";

export function getReviews(type, id, page) {
  return axios.get(`/${type}/${id}/reviews`, {
    params: { page },
  });
}
