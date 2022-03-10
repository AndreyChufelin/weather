import { parseDate } from "../common/date";

export const getWeatherApi = (coords, lang) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&lang=${lang}&appid=79403415551793e325fcc351666475e5`
  )
    .then((res) => {
      if (res.status >= 400 && res.status < 600) {
        throw { message: "Unknown error. Try again." };
      }

      return res.json();
    })
    .then((res) => {
      let hourly = [];
      for (let i = 0; i < res.hourly.length; i++) {
        hourly.push(res.hourly[i]);
        if (parseDate(res.hourly[i].dt).getHours() === 0) {
          break;
        }
      }
      res.hourly = hourly;
      return res;
    });
};
