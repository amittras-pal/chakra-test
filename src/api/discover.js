import axios from "../config/axios.config";
import { ENDPOINTS } from "../constants/endpoints";
import { removeFalsyKeys } from "../utils/utils";

export function discoverMedia(type, payload) {
  return axios.get(ENDPOINTS.discover + type, {
    params: { ...removeFalsyKeys(payload) },
  });
}
