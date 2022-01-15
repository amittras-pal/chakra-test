import { useQuery } from "react-query";
import { getPopularTvShows, getShowDetailsById } from "../api/tv";

// export function usePopularTvShows() {
//   return useQuery("popular-tv", getPopularTvShows);
// }

export function useTvShowById(id) {
  return useQuery(["show", id], () => getShowDetailsById(id));
}
