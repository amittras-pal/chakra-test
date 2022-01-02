import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getMovieGenres() {
  return axios.get(ENDPOINTS.movieGenres);
}

export function getTvGenres() {
  return axios.get(ENDPOINTS.tvGenres);
}
