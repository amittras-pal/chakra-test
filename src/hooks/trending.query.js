import { useQuery } from "react-query";
import { getTrendingToday } from "../api/trending";

export function useAllTrendingToday() {
  return useQuery("trending-today", getTrendingToday);
}
