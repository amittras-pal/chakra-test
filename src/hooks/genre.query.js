import { useQuery } from "react-query";
import { getMovieGenres, getTvGenres } from "../api/genre";

export function useMovieGenres() {
  return useQuery("movie-genres", getMovieGenres);
}

export function useTvGenres() {
  return useQuery("tv-genres", getTvGenres);
}
