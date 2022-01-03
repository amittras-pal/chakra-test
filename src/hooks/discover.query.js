import { useQuery } from "react-query";
import { discoverMedia } from "../api/discover";

export function useDiscover(type, payload, options) {
  const appliedPayload = { ...payload };
  if (payload.with_genres?.length > 0) {
    appliedPayload.with_genres = payload.with_genres.join(",");
  } else if (payload.with_genres) {
    delete appliedPayload.with_genres;
  }
  return useQuery(
    ["discover", type, appliedPayload],
    () => discoverMedia(type, appliedPayload),
    options
  );
}
