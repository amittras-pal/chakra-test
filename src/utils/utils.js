import { DateTime } from "luxon";
import { APP_TITLE } from "../constants/appConstants";

export function setPageTitle(title) {
  const newTitle = title ? `${APP_TITLE} | ${title}` : APP_TITLE;
  document.querySelector("title").textContent = newTitle;
}

export function getRandomHeaderImg(config, results) {
  return `url(${config?.data?.images?.secure_base_url}w1280${results[0].backdrop_path})`;
}

export function removeFalsyKeys(obj) {
  const cleaned = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] && obj[key].toString()) cleaned[key] = obj[key];
  });
  return cleaned;
}

export function getFormattedDate(date, format) {
  return date ? DateTime.fromISO(date).toLocaleString(format) : null;
}

export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
