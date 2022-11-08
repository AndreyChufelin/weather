import { i18n } from "../common/localization";
// import { useI18n } from "vue-i18n";

// const { t } = useI18n({});
const { t, locale } = i18n.global;
console.log("f", process.env, process.env.VUE_APP_WEATHER_API_KEY);

const domain = "https://wft-geo-db.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": process.env.VUE_APP_GEO_API_KEY,
  "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
};
function toCoords(x) {
  let parsed = x.toFixed(4);
  if (x >= 0) {
    parsed = "+" + parsed;
  }
  return String(parsed);
}

function call(path, params = {}) {
  let url = new URL(`${domain}/${path}`);
  url.searchParams.append("languageCode", locale.value);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url, {
    headers,
  })
    .then((res) => {
      if (res.status === 429) {
        throw { message: t("too_many") };
      } else if (res.status >= 400 && res.status < 600) {
        throw { message: t("unknown_error") };
      }

      return res.json();
    })
    .catch((error) => {
      throw { message: error.message };
    });
}

export const getCityByCoordsApi = (coords) => {
  const latitude = toCoords(coords.latitude);
  const longitude = toCoords(coords.longitude);
  const parsedCoords = latitude + longitude;

  return call(`v1/geo/locations/${parsedCoords}/nearbyCities`).then((res) => {
    return res.data[0];
  });
};

export const getCityByIdApi = (id) => {
  return call(`v1/geo/cities/${id}`, {}).then((res) => {
    return res.data;
  });
};

export const searchCitiesApi = (namePrefix) => {
  return call(`v1/geo/cities`, {
    namePrefix,
    sort: "-population",
  }).then((res) => {
    return res.data;
  });
};
