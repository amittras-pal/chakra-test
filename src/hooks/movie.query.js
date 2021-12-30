import { useQuery } from "react-query";
import { getMovieDetailsById, getPopularMovies } from "../api/movie";

export function usePopularMovies() {
  return useQuery("popular-movies", getPopularMovies);
}

export function useMovieDetailsById(id) {
  return useQuery(["movie", id], () => getMovieDetailsById(id));
}
