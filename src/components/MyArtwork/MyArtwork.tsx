import { IArtworks } from "../../types/artworksInterface";
import MyArtworkStyled from "./MyArtworkStyled";

const MyArtwork = ({
  artwork: { id, title, image, purchaseprice, monthlyrateprice },
}: {
  artwork: IArtworks;
}) => {
  const titleUpperCase = title.toUpperCase();

  return (
    <li className="artwork__list" key={id}>
      <MyArtworkStyled>
        <div className="artwork__container">
          <img
            className="artwork__image"
            src={image}
            alt={`a painting called ${title}`}
          />
          <div className="artwork__text">
            <h3 className="artwork__text--title">{titleUpperCase}</h3>
            <p className="artwork__text--price">{`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}</p>
          </div>
        </div>
      </MyArtworkStyled>
    </li>
  );
};

export default MyArtwork;
