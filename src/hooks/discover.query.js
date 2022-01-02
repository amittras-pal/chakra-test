import { useQuery } from "react-query";
import { discoverMedia } from "../api/discover";

export function useDiscover(type, payload, options) {
  return useQuery(
    ["discover", type, payload],
    () => discoverMedia(type, payload),
    options
  );
}
