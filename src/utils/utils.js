import { APP_TITLE } from "../constants/appConstants";

export function setPageTitle(title) {
  const newTitle = title ? `${APP_TITLE} | ${title}` : APP_TITLE;
  document.querySelector("title").textContent = newTitle;
}
