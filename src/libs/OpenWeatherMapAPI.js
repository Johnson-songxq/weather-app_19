import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const UNITS = "metric";
const APP_ID = "2466213f21b4b723d341e00a430a7673";

const OpenWeatherMapAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    units: UNITS,
    appid: APP_ID,
  },
});

export default OpenWeatherMapAPI;
