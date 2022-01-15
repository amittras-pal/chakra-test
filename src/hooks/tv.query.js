import { useQuery } from "react-query";
import { getShowDetailsById } from "../api/tv";

export function useTvShowById(id) {
  return useQuery(["show", id], () => getShowDetailsById(id));
}
