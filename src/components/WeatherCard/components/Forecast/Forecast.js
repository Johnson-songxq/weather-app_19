import SubSection from "../../../SubSection";
import DayOfWeek from "./components/DayOfWeek";

// const FORECAST = [
//   {
//     name: "Mon",
//     weather: { code: "11d", name: "Thunderstorm" },
//     temperature: 18,
//   },
//   {
//     name: "Tue",
//     weather: { code: "01d", name: "Clear" },
//     temperature: 21,
//   },
//   {
//     name: "Wed",
//     weather: { code: "03d", name: "Clouds" },
//     temperature: 16,
//   },
//   {
//     name: "Thu",
//     weather: { code: "09d", name: "Rain" },
//     temperature: 15,
//   },
//   {
//     name: "Fri",
//     weather: { code: "09d", name: "Rain" },
//     temperature: 15,
//   },
// ];

const Forecast = ({ loading, forecast }) => (
  <SubSection title="Forecast">
    {loading ? (
      <div>Loading</div>
    ) : (
      <div className="flex gap-4 justify-between">
        {forecast?.map(({ name, weather, temperature }) => (
          <DayOfWeek
            key={name}
            name={name}
            weather={weather}
            temperature={temperature}
          />
        ))}
      </div>
    )}
  </SubSection>
);

export default Forecast;
