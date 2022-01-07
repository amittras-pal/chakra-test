import { DateTime } from "luxon";
import {
  MdLocalFireDepartment,
  MdOfflineBolt,
  MdOnlinePrediction,
} from "react-icons/md";

const defaultFilters = {
  "vote_average.gte": 0,
  "vote_average.lte": 10,
  "with_runtime.gte": 0,
  "with_runtime.lte": 400,
};

const exploreRouterMenu = [
  {
    sectionId: "Movies",
    sectionLabel: "Explore Movies",
    sectionItems: [
      {
        path: "movie",
        label: "Popular",
        filterParams: {
          ...defaultFilters,
          sort_by: "popularity.desc",
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdLocalFireDepartment,
      },
      {
        path: "movie",
        label: "Latest",
        filterParams: {
          ...defaultFilters,
          sort_by: "release_date.desc",
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdOfflineBolt,
      },
      {
        path: "movie",
        label: "Upcoming",
        filterParams: {
          ...defaultFilters,
          sort_by: "release_date.asc",
          "primary_release_date.gte": DateTime.now().toISODate(),
          "primary_release_date.lte": DateTime.now()
            .plus({ months: 1 })
            .toISODate(),
        },
        Icon: MdOnlinePrediction,
      },
    ],
  },
];

export default exploreRouterMenu;
