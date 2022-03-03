const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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
  const parsedDate = parseDate(date);

  const month = monthes[parsedDate.getMonth()];
  const dateDay = parsedDate.getDate();
  const day = days[parsedDate.getDay()];

  const formattedTime = `${month} ${dateDay} ${day}`;
  return formattedTime;
};
