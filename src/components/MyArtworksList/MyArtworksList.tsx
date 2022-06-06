import { useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import MyArtwork from "../MyArtwork/MyArtwork";
import MyArtworksListStyled from "./MyArtworksListStyled";

const MyArtworksList = () => {
  const userArtworks = useAppSelector((state) => state.userArtworks);
  const loading = useAppSelector((state) => state.ui.loading);

  console.log(userArtworks);
  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <MyArtworksListStyled>
          <ul className="artworks__list">
            {userArtworks?.map((userArtwork) => {
              return <MyArtwork key={userArtwork.id} artwork={userArtwork} />;
            })}
          </ul>
        </MyArtworksListStyled>
      )}
    </>
  );
};

export default MyArtworksList;
