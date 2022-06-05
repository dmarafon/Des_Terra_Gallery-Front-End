import { IArtworks } from "../../types/artworksInterface";
import ArtworkStyled from "./ArtworkStyled";

const Artwork = ({
  artwork: { title, image, purchaseprice, monthlyrateprice, author },
}: {
  artwork: IArtworks;
}) => {
  const firstnameUpperCase =
    author[0].firstname.charAt(0).toUpperCase() + author[0].firstname.slice(1);
  const surnameUpperCase =
    author[0].surname.charAt(0).toUpperCase() + author[0].surname.slice(1);

  const titleUpperCase = title
    .split(" ")
    .map((titlewords) => {
      return titlewords[0].toUpperCase() + titlewords.substring(1);
    })
    .join(" ");

  return (
    <ArtworkStyled>
      <li className="artwork__list">
        <div className="artwork__container">
          <img
            className="artwork__image"
            src={image}
            alt={`painting by ${firstnameUpperCase} ${surnameUpperCase}`}
          />
          <div>
            <h2>{`${firstnameUpperCase} ${surnameUpperCase}`}</h2>
            <h3>{titleUpperCase}</h3>
            <p>{`${monthlyrateprice}€ /month | ${purchaseprice} Purchase`}</p>
          </div>
        </div>
      </li>
    </ArtworkStyled>
  );
};

export default Artwork;
