const BackgroundImage = ({ image, children }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className="bg-center bg-cover"
  >
    {children}
  </div>
);

export default BackgroundImage;
