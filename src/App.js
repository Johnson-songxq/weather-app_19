import WeatherCard from "./components/WeatherCard";
import bg from "./assets/app-bg.png";
import BackgroundImage from "./components/BackgroundImage";

const App = () => (
  <BackgroundImage image={bg}>
    <div className="h-screen flex justify-center items-center ">
      <WeatherCard />
    </div>
  </BackgroundImage>
);

export default App;
