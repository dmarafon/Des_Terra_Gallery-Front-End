import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";
import Artwork from "../Artwork/Artwork";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ArtworksListStyled from "./ArtworksListStyled";

const ArtworksList = () => {
  const artworks = useAppSelector((state) => state.artworks);
  const loading = useAppSelector((state) => state.ui.loading);

  const { page } = useParams();

  const navigate = useNavigate();

  const { totalPage, currentPage } = useAppSelector(
    (state) => state.pagination
  );
  const limitPage = 12;

  const calculateCurrentPage = () => {
    const userCurrentPage = (Number(currentPage) - 1) / limitPage + 1;
    return userCurrentPage;
  };

  const calaculateLinkPage = useCallback(() => {
    const pageQuery = (Number(page) - 1) * limitPage + 1;

    return pageQuery.toString();
  }, [page]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadArtworksThunk("", "", "", calaculateLinkPage()));
  }, [calaculateLinkPage, currentPage, dispatch, page]);

  const changePageBack = () => {
    const nextPage = Number(page) - 1;

    navigate(`/artwork/${nextPage}`);
  };

  const changePageForward = () => {
    const nextPage = Number(page) + 1;

    navigate(`/artwork/${nextPage}`);
  };

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <ArtworksListStyled>
          <ul className="artworks__list">
            {artworks.map((artwork) => {
              return <Artwork key={artwork.id} artwork={artwork} />;
            })}
          </ul>
          <div className="artworks__navigate--container">
            {Number(page) <= 1 ? (
              ""
            ) : (
              <svg
                className="artworks__navigate--button"
                onClick={changePageBack}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
              </svg>
            )}
            <p>{`${calculateCurrentPage()}/${totalPage}`}</p>
            {Number(page) === totalPage ? (
              ""
            ) : (
              <svg
                className="artworks__navigate--button"
                onClick={changePageForward}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
              </svg>
            )}
          </div>
        </ArtworksListStyled>
      )}
    </>
  );
};

export default ArtworksList;
