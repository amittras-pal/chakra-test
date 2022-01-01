import { useQuery } from "react-query";
import { getAllTrendingToday, getTrendingToday } from "../api/trending";

export function useAllTrendingToday() {
  return useQuery("trending-today", getAllTrendingToday);
}

export function useTrendingToday(mediaType) {
  return useQuery(["trending", mediaType], () => getTrendingToday(mediaType));
}
