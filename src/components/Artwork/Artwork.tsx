import { IArtworks } from "../../types/artworksInterface";
import ArtworkStyled from "./ArtworkStyled";

const Artwork = ({
  artwork: {
    id,
    title,
    image,
    imagebackup,
    purchaseprice,
    monthlyrateprice,
    author,
  },
}: {
  artwork: IArtworks;
}) => {
  const firstnameUpperCase = author[0]?.firstname?.toUpperCase();
  const surnameUpperCase = author[0]?.surname?.toUpperCase();

  const titleUpperCase = title.toUpperCase();

  return (
    <li className="artwork__list" key={id}>
      <ArtworkStyled>
        <div className="artwork__container">
          <img
            className="artwork__image"
            src={imagebackup}
            alt={`painting by ${
              firstnameUpperCase ? firstnameUpperCase : ""
            }  ${surnameUpperCase ? surnameUpperCase : ""}`}
          />
          <div className="artwork__text">
            <h2 className="artwork__text--author">{`${firstnameUpperCase} ${surnameUpperCase}`}</h2>
            <h3 className="artwork__text--title">{titleUpperCase}</h3>
            <p className="artwork__text--price">{`${monthlyrateprice}€ /month | ${purchaseprice}€ Purchase`}</p>
          </div>
        </div>
      </ArtworkStyled>
    </li>
  );
};

export default Artwork;
