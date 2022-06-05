import { IArtworks } from "../../types/artworksInterface";

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
    <>
      <div>
        <img
          src={image}
          alt={`painting by ${firstnameUpperCase} ${surnameUpperCase}`}
        />
      </div>
      <div>
        <div>
          <h2>{`${firstnameUpperCase} ${surnameUpperCase}`}</h2>
          <h3>{titleUpperCase}</h3>
          <p>{`${monthlyrateprice}€ /month | ${purchaseprice} Purchase`}</p>
        </div>
      </div>
    </>
  );
};

export default Artwork;
