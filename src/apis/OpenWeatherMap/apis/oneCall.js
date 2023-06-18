import OpenWeatherMapAPI from "../OpenWeatherMap";

// const MELBOURNE_GEO = {
//   lat: "-37.8142176",
//   lon: "144.9631608",
// };

// const UNITS = "metric";
// const APP_ID = "30552c1e8594ae98b41c25641fa95b1a";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

// const oneCall = () =>
//   fetch(
//     `${BASE_URL}/onecall?lat=${MELBOURNE_GEO.lat}&lon=${MELBOURNE_GEO.lon}&units=${UNITS}&appid=${APP_ID}`
//   ).then((response) => response.json());

const oneCall = ({ lat, lon }) =>
  OpenWeatherMapAPI.get("/onecall", {
    params: {
      lat,
      lon,
    },
  }).then((response) => response.data);

export default oneCall;
