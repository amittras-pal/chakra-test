import { useQuery } from "react-query";
import { getGenresList } from "../api/genre";

export function useGenres(type) {
  return useQuery([type, "genre"], () => getGenresList(type));
}
