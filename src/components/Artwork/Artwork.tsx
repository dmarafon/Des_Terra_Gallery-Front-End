import { IArtworks } from "../../types/artworksInterface";

const Artwork = ({
  artwork: {
    id,
    title,
    medium,
    height,
    width,
    style,
    description,
    image,
    purchaseprice,
    monthlyrateprice,
    author,
  },
}: {
  artwork: IArtworks;
}) => {
  return (
    <>
      <div>
        <img src={image} alt="test" />
      </div>
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <span>{medium}</span>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default Artwork;
