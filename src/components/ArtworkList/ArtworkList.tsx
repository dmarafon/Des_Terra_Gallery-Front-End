import Artwork from "../Artwork/Artwork";
import { useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ArtworkListStyled from "./ArtworkListStyled";

const ArtworksList = () => {
  const artworks = useAppSelector((state) => state.artworks);
  const loading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <ArtworkListStyled>
          <ul className="artworks__list">
            {artworks.map((artwork) => {
              return <Artwork key={artwork.id} artwork={artwork} />;
            })}
          </ul>
        </ArtworkListStyled>
      )}
    </>
  );
};

export default ArtworksList;
