import { useInfiniteQuery } from "react-query";
import { getReviews } from "../api/reviews";

export function useReviews(type, id) {
  return useInfiniteQuery(
    ["movie-reviews", id],
    ({ pageParam = 1 }) => getReviews(type, id, pageParam),
    {
      getNextPageParam: (last, all) =>
        last.data.total_pages > last.data.page ? last.data.page + 1 : undefined,
    }
  );
}
