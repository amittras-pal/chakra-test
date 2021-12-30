import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getPopularMovies() {
  return axios.get(ENDPOINTS.popularMovies);
}

export function getMovieDetailsById(movieId) {
  return axios.get(ENDPOINTS.movieById + movieId, {
    params: {
      append_to_response:
        "videos,images,reviews,credits,recommendations,keywords",
    },
  });
}
