import { useInfiniteQuery } from "react-query";
import { getMovieReviews } from "../api/reviews";

export function useMovieReviews(movieId) {
  return useInfiniteQuery(
    ["movie-reviews", movieId],
    ({ pageParam = 1 }) => getMovieReviews(movieId, pageParam),
    {
      getNextPageParam: (last, all) =>
        last.data.total_pages > last.data.page ? last.data.page + 1 : undefined,
    }
  );
}
