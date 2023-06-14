const WeatherIcon = ({ code, weather, className }) => (
  //   <image src="http://openweathermap.org/img/wn/09d.png">WeatherIcon</image>
  <img
    src={`http://openweathermap.org/img/wn/${code}.png`}
    alt={weather}
    className={className}
  />
);

export default WeatherIcon;
