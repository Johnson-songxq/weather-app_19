import { useEffect, useState } from "react";
import SubSection from "../../../SubSection";
import City from "./components/City";
import group from "../../../../apis/group";

// const OTHER_CITIES = [
//   { name: "Sydney", temperature: 12, weather: { code: "04n", name: "Clouds" } },
//   { name: "Brisbane", temperature: 21, weather: { code: "10d", name: "Rain" } },
//   { name: "Perth", temperature: 19, weather: { code: "01d", name: "Clear" } },
// ];

const OtherCities = () => {
  const [others, setOthers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    group()
      .then((data) => {
        const list = data.list.map(({ name, main, weather }) => ({
          name,
          temperature: parseInt(main.temp),
          weather: { code: weather[0].icon, name: weather[0].main },
        }));
        setOthers(list);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SubSection title="Other Cities">
      {loading && <div>Loading</div>}
      {others?.map(({ name, temperature, weather }) => (
        <City
          key={name}
          name={name}
          temperature={temperature}
          weather={weather}
        />
      ))}
    </SubSection>
  );
};

export default OtherCities;
