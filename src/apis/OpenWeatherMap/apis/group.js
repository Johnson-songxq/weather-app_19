import OpenWeatherMapAPI from "../OpenWeatherMap";

const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 },
];

// const group = () =>
//   fetch(
//     `${BASE_URL}/group?id=${CITIES.map(
//       ({ id }) => id
//     ).join()}&units=${UNITS}&appid=${APP_ID}`
//   ).then((response) => response.json());

const group = () =>
  OpenWeatherMapAPI.get("/group", {
    params: {
      id: CITIES.map((city) => city.id).join(","),
    },
  }).then((response) => response.data);

export default group;
