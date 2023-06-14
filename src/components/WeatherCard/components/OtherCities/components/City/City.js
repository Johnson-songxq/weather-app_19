import Temperature from "../../../../../Temperature";
import WeatherIcon from "../../../../../WeatherIcon";
import Name from "./components/Name";

const City = ({ name, temperature, weather }) => (
  <div className="flex items-center">
    <Name>{name}</Name>
    <div className="w-[50px]">
      <Temperature className="text-xl " value={temperature} />
    </div>
    <WeatherIcon code={weather.code} weather={weather.name} />
  </div>
);

export default City;
