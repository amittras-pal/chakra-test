import { useQuery } from "react-query";
import { getMovieDetailsById } from "../api/movie";

export function useMovieDetailsById(id) {
  return useQuery(["movie", id], () => getMovieDetailsById(id));
}
