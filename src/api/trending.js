import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getAllTrendingToday() {
  return axios.get(ENDPOINTS.trendingToday);
}

export function getTrendingToday(mediaType) {
  switch (mediaType) {
    case "movie":
      return axios.get(ENDPOINTS.trendingMoviesToday);
    case "tv":
      return axios.get(ENDPOINTS.trendingShowsToday);
    case "person":
      return axios.get(ENDPOINTS.trendingPeopleToday);
    default:
      return;
  }
}
