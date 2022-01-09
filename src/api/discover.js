import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";
import { removeFalsyKeys } from "../utils/utils";

export function getDiscoveredMovies(page, payload) {
  return axios.get(`${ENDPOINTS.discover}movie`, {
    params: { ...removeFalsyKeys(payload), page },
  });
}

export function getDiscoveredTv(page, payload) {
  return axios.get(`${ENDPOINTS.discover}tv`, {
    params: { ...removeFalsyKeys(payload), page },
  });
}
