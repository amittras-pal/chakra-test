import { useQuery } from "react-query";
import { discoverMedia } from "../api/discover";

export function useDiscover(type, payload, options) {
  const appliedPayload = {
    ...payload,
    with_genres: payload.with_genres?.join(",") || "",
  };
  return useQuery(
    ["discover", type, appliedPayload],
    () => discoverMedia(type, appliedPayload),
    options
  );
}
