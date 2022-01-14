import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getMovieReviews(movieId, page) {
  return axios.get(`${ENDPOINTS.movieById}/${movieId}/reviews`, {
    params: { page },
  });
}
