import Temperature from "../../../../../Temperature";
import WeatherIcon from "../../../../../WeatherIcon";
import Name from "./components/Name";

const City = ({ name, temperature, weather, onClick }) => (
  <button
    // className="flex items-center text-left border-y-[2px] border-transparent hover:border-black/10"
    className="
    flex items-center text-left relative
    before:content-[''] before:w-[4px] before:h-[12px] before:absolute before:left-[-8px] hover:before:bg-black/20
    "
    onClick={onClick}
  >
    <Name>{name}</Name>
    <div className="w-[50px]">
      <Temperature className="text-xl " value={temperature} />
    </div>
    <WeatherIcon code={weather.code} weather={weather.name} />
  </button>
);

export default City;
