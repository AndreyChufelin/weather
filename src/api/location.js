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

export const getCityByCoordsApi = (coords, languageCode) => {
  const latitude = toCoords(coords.latitude);
  const longitude = toCoords(coords.longitude);
  const parsedCoords = latitude + longitude;

  return fetch(
    `${domain}/v1/geo/locations/${parsedCoords}/nearbyCities?languageCode=${languageCode}`,
    {
      headers,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data[0];
    });
};

export const getCityByIdApi = (id, languageCode) => {
  return fetch(`${domain}/v1/geo/cities/${id}?languageCode=${languageCode}`, {
    headers,
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
};
