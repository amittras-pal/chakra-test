import { useInfiniteQuery } from "react-query";
import { getDiscoveredMovies } from "../api/discover";

export function useMovieDiscover(payload) {
  const appliedPayload = { ...payload };
  if (payload?.with_genres?.length > 0) {
    appliedPayload.with_genres = payload.with_genres.join(",");
  } else if (payload?.with_genres) {
    delete appliedPayload.with_genres;
  }

  return useInfiniteQuery(
    ["discover-movies", payload],
    ({ pageParam = 1 }) => getDiscoveredMovies(pageParam, appliedPayload),
    {
      getNextPageParam: (last, all) =>
        last.data.total_pages > last.data.page ? last.data.page + 1 : undefined,
    }
  );
}
