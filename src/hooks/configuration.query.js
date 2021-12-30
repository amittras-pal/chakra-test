import { useQuery } from "react-query";
import { getConfiguration } from "../api/config";

export function useApiConfig() {
  return useQuery("api-config", getConfiguration);
}
