import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";

export function getPopularTvShows() {
  return axios.get(ENDPOINTS.popularTvShows);
}

export function getShowDetailsById(showId) {
  return axios.get(ENDPOINTS.showById + showId, {
    params: {
      append_to_response:
        "videos,images,reviews,credits,recommendations,keywords,latest,seasons",
    },
  });
}
