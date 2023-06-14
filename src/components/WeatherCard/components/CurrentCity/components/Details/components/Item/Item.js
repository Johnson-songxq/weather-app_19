const Item = ({ title, children, loading }) => (
  <div className="text-white/70 text-center min-w-[90px]">
    <div className="mb-3 text-center">{title}</div>
    <div>{loading ? "..." : children}</div>
  </div>
);

export default Item;
