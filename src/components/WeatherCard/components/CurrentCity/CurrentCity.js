import BackgroundImage from "../../../BackgroundImage";
import Name from "./components/Name";
import Temperature from "../../../Temperature";
import Details from "./components/Details";
import Weather from "./components/Weather";
import bg from "./assets/current-city-bg.jpg";

const CurrentCity = ({ name, current, loading }) => (
  <BackgroundImage image={bg}>
    <div className="flex justify-between gap-48 py-16 px-24 relative">
      <div>
        <Temperature
          className="text-white text-7xl text-center min-w-[300px]"
          value={current?.temp}
          loading={loading}
        />
        <Weather weather={current?.weather[0].main} loading={loading} />
        <Details
          humidity={current?.humidity}
          wind={current?.wind_speed}
          loading={loading}
        />
      </div>
      <Name>{name}</Name>
      <div className="h-[25px] bg-black/50 absolute bottom-0 inset-x-0"></div>
    </div>
  </BackgroundImage>
);

export default CurrentCity;
