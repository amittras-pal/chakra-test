export const APP_TITLE = "ShowSurfer";

export const globalSearchCategories = [
  { label: "Movies", value: "movie", textFormLabel: "movies" },
  { label: "Shows", value: "tv", textFormLabel: "tv shows" },
  { label: "People", value: "people", textFormLabel: "people" },
];

export const MOVIE_SORT_MODES = [
  { label: "Popularity: Ascending", value: "popularity.asc" },
  { label: "Popularity: Descending", value: "popularity.desc" },
  { label: "Oldest to Newest", value: "release_date.asc" },
  { label: "Newest to Oldest", value: "release_date.desc" },
  { label: "Rating: Ascending", value: "vote_average.asc" },
  { label: "Rating: Descending", value: "vote_average.desc" },
  { label: "Vote Count: Ascending", value: "vote_count.asc" },
  { label: "Vote Count: Descending", value: "vote_count.desc" },
];

export const TV_SORT_MODES = [
  { label: "Popularity: Ascending", value: "popularity.asc" },
  { label: "Popularity: Descending", value: "popularity.desc" },
  { label: "Rating: Ascending", value: "vote_average.asc" },
  { label: "Rating: Descending", value: "vote_average.desc" },
  { label: "Aired: Ascending", value: "air_date.asc" },
  { label: "Aired: Descending", value: "air_date.desc" },
];

export const tvSearchdateModes = [
  { label: "All Episodes", value: "all" },
  { label: "First Aired", value: "first" },
];
