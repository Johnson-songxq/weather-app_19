const Temperature = ({ value, loading, className }) => {
  return <div className={className}>{loading ? "..." : `${value} °`}</div>;
};

export default Temperature;
