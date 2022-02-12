import { DateTime } from "luxon";
import {
  MdLocalFireDepartment,
  MdOfflineBolt,
  MdOnlinePrediction,
  MdStackedLineChart,
} from "react-icons/md";

const defaultMovieFilters = {
  "vote_average.gte": 0,
  "vote_average.lte": 10,
  "with_runtime.gte": 0,
  "with_runtime.lte": 400,
};

const defaultTvFilters = {
  "with_runtime.gte": 0,
  "with_runtime.lte": 400,
  "vote_average.gte": 0,
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
          ...defaultMovieFilters,
          sort_by: "popularity.desc",
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdLocalFireDepartment,
      },
      {
        path: "movie",
        label: "Latest",
        filterParams: {
          ...defaultMovieFilters,
          sort_by: "release_date.desc",
          "primary_release_date.lte": DateTime.now().toISODate(),
        },
        Icon: MdOfflineBolt,
      },
      {
        path: "movie",
        label: "Upcoming",
        filterParams: {
          ...defaultMovieFilters,
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
  {
    sectionId: "Shows",
    sectionLabel: "Explore TV Shows",
    sectionItems: [
      {
        path: "tv",
        label: "Popular",
        filterParams: {
          ...defaultTvFilters,
          sort_by: "popularity.desc",
        },
        Icon: MdLocalFireDepartment,
      },
      {
        path: "tv",
        label: "Top Rated",
        filterParams: {
          ...defaultTvFilters,
          sort_by: "vote_average.desc",
        },
        Icon: MdStackedLineChart,
      },
    ],
  },
];

export default exploreRouterMenu;
