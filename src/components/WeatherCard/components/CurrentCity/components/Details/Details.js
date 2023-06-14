import Item from "./components/Item";

const Details = ({ humidity, wind, loading }) => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      <Item title="HUMIDITY" loading={loading}>
        {`${humidity}%`}
      </Item>
      <div className="w-[1px] bg-white/70"></div>
      <Item title="WIND" loading={loading}>
        {`${wind}KM/H`}
      </Item>
    </div>
  );
};

export default Details;
