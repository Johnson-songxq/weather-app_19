const BASE_URL = "https://api.openweathermap.org/data/2.5";

const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 },
];

const UNITS = "metric";
const APP_ID = "2466213f21b4b723d341e00a430a7673";

const group = () =>
  fetch(
    `${BASE_URL}/group?id=${CITIES.map(
      ({ id }) => id
    ).join()}&units=${UNITS}&appid=${APP_ID}`
  ).then((response) => response.json());

export default group;
