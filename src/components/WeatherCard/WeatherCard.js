import { useEffect, useState } from "react";
import CurrentCity from "./components/CurrentCity";
import Forecast from "./components/Forecast";
import OtherCities from "./components/OtherCities";
import oneCall from "../../apis/OpenWeatherMap/apis/oneCall";

//https://api.openweathermap.org/data/2.5/onecall?lat=-37.8142176&lon=144.9631608&units=metric&appid=2466213f21b4b723d341e00a430a7673

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const MELBOURNE = {
  name: "Melbourne",
  lat: "-37.8142176",
  lon: "144.9631608",
};

const WeatherCard = () => {
  const [city, setCity] = useState(MELBOURNE);
  const [current, setCurrent] = useState();
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    setLoading(true);
    oneCall({ lat: city.lat, lon: city.lon })
      .then((data) => {
        const daily = data.daily.slice(1, 6).map((day) => ({
          name: WEEK_DAYS[new Date(day.dt * 1000).getDay()],
          weather: {
            code: day.weather[0].icon,
            name: day.weather[0].main,
          },
          temperature: parseInt(day.temp.day),
        }));
        setForecast(daily);
        setCurrent(data.current);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl	shadow-black/50	overflow-hidden">
      <CurrentCity name={city.name} current={current} loading={loading} />
      <div className="flex gap-12 px-12 py-9">
        {/* <OtherCities onCityClick={setCity} /> */}
        <OtherCities onCityClick={setCity} />
        <div className="w-[3px] bg-black/10"></div>
        <div className="flex-1">
          <Forecast forecast={forecast} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
