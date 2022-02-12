import { DateTime } from "luxon";
import { APP_TITLE } from "../constants/appConstants";
import { LANGUAGE_CODES } from "../constants/languageCodes";

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

export function getLanguageName(langCode) {
  const languageName = LANGUAGE_CODES.find((lang) => lang.value === langCode);
  return languageName ? languageName.label : "N.A.";
}

export function createImageUrl(
  size = "original",
  imageType,
  config,
  imagePath
) {
  if (!imagePath) return null;
  let key = "";
  switch (imageType) {
    case "poster":
      key = "poster_sizes";
      break;
    case "backdrop":
      key = "backdrop_sizes";
      break;
    case "logo":
      key = "logo_sizes";
      break;
    case "profile":
      key = "profile_sizes";
      break;
    case "still":
      key = "still_sizes";
      break;
    default:
      break;
  }
  const imgConfig = config?.data?.images;
  if (!imgConfig?.[key]?.includes(size)) return null;
  return imgConfig.secure_base_url + size + imagePath;
}

export async function downloadImage(imageUrl, fileName) {
  const imageData = await fetch(imageUrl);
  const imgBlob = await imageData.blob();
  const imgUrl = URL.createObjectURL(imgBlob);
  const imgAnchor = document.createElement("a");
  imgAnchor.href = imgUrl;
  imgAnchor.download = fileName;
  imgAnchor.click();
  setTimeout(() => imgAnchor.remove(), 500);
}
