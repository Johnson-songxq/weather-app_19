const Weather = ({ weather, loading }) => (
  <div className="text-center mt-2">
    <span className="text-white/70 text-2xl  tracking-widest ">
      {loading ? "Loading" : weather}
    </span>
  </div>
);

export default Weather;
