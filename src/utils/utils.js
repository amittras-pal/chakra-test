import { APP_TITLE } from "../constants/appConstants";

export function setPageTitle(title) {
  const newTitle = title ? `${APP_TITLE} | ${title}` : APP_TITLE;
  document.querySelector("title").textContent = newTitle;
}

export function getRandomHeaderImg(config, results) {
  return `url(${config?.data?.images?.secure_base_url}w1280${results[0].backdrop_path})`;
  // results[Math.floor(Math.random() * results.length)].backdrop_path;
}
