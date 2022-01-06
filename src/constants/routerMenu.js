import { DateTime } from "luxon";
import {
  MdLocalFireDepartment,
  MdOfflineBolt,
  MdOnlinePrediction,
} from "react-icons/md";

const exploreRouterMenu = [
  {
    sectionId: "Movies",
    sectionLabel: "Movies",
    sectionItems: [
      {
        path: "movie",
        label: "Popular",
        passState: {
          sort_by: "popularity.desc",
          "vote_average.gte": 0,
          "vote_average.lte": 10,
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdLocalFireDepartment,
      },
      {
        path: "movie",
        label: "Latest",
        passState: {
          sort_by: "release_date.desc",
          "vote_average.gte": 0,
          "vote_average.lte": 10,
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdOfflineBolt,
      },
      {
        path: "movie",
        label: "Upcoming",
        passState: {
          sort_by: "release_date.asc",
          "vote_average.gte": 0,
          "vote_average.lte": 10,
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
