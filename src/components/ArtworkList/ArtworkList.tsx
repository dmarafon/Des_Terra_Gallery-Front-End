import Artwork from "../Artwork/Artwork";
import { useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";

const ArtworksList = () => {
  const artworks = useAppSelector((state) => state.artworks);
  const loading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <ul>
          {artworks.map((artwork) => {
            return <Artwork key={artwork.id} artwork={artwork} />;
          })}
        </ul>
      )}
    </>
  );
};

export default ArtworksList;
