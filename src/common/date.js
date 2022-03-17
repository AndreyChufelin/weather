import { useI18n } from "vue-i18n";

const monthes = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export const parseDate = (date) => new Date(date * 1000);
export const getTime = (date) => {
  const parsedDate = parseDate(date);
  const hours = parsedDate.getHours();
  const minutes = "0" + parsedDate.getMinutes();

  const formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};
export const getDate = (date) => {
  const { t } = useI18n({ useScope: "global" });
  const parsedDate = parseDate(date);
  const month = t(monthes[parsedDate.getMonth()]);
  const dateDay = parsedDate.getDate();
  const day = t(days[parsedDate.getDay()]);

  const formattedTime = `${month} ${dateDay} ${day}`;
  return formattedTime;
};
