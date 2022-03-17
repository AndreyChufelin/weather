import { i18n } from "../common/localization";

const domain = "https://wft-geo-db.p.rapidapi.com";
const headers = {
  "x-rapidapi-key": "3ec7de8ea2msh6b4957c9a6d946fp1870e4jsnf5d4bab37dd5",
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
  const { locale } = i18n.global;
  url.searchParams.append("languageCode", locale.value);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url, {
    headers,
  })
    .then((res) => {
      if (res.status === 429) {
        throw { message: "Too many requests. Try again later" };
      } else if (res.status >= 400 && res.status < 600) {
        throw { message: "Unknown error. Try again." };
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

  return call(`/v1/geo/locations/${parsedCoords}/nearbyCities`).then((res) => {
    return res.data[0];
  });
};

export const getCityByIdApi = (id) => {
  return call(`/v1/geo/cities/${id}`, {}).then((res) => {
    return res.data;
  });
};

export const searchCitiesApi = (namePrefix) => {
  return call(`/v1/geo/cities`, { namePrefix, sort: "-population" }).then(
    (res) => {
      return res.data;
    }
  );
};
