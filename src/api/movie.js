import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getMovieDetailsById(movieId) {
  return axios.get(ENDPOINTS.movieById + movieId, {
    params: {
      append_to_response:
        "videos,images,reviews,credits,recommendations,keywords",
    },
  });
}
