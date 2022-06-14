import { useCallback, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { loadArtworksThunk } from "../../redux/thunks/artworkThunks";
import Artwork from "../Artwork/Artwork";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ArtworksListStyled from "./ArtworksListStyled";

const ArtworksList = (): JSX.Element => {
  const artworks = useAppSelector((state) => state.artworks);
  const loading = useAppSelector((state) => state.ui.loading);

  const { filterStyle, sortOrderPurchase, sortOrderRent, page } = useParams();
  const navigate = useNavigate();

  const { totalPage, currentPage } = useAppSelector(
    (state) => state.pagination
  );
  const limitPage = 12;

  const calaculateLinkPage = useCallback(() => {
    const pageQuery = (Number(page) - 1) * limitPage + 1;

    return pageQuery.toString();
  }, [page]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (filterStyle && sortOrderPurchase) {
      dispatch(
        loadArtworksThunk(
          filterStyle,
          sortOrderPurchase,
          "",
          calaculateLinkPage()
        )
      );
    } else if (filterStyle && sortOrderRent) {
      dispatch(
        loadArtworksThunk(filterStyle, "", sortOrderRent, calaculateLinkPage())
      );
    } else if (sortOrderRent) {
      dispatch(loadArtworksThunk("", "", sortOrderRent, calaculateLinkPage()));
    } else if (sortOrderPurchase) {
      dispatch(
        loadArtworksThunk("", sortOrderPurchase, "", calaculateLinkPage())
      );
    } else {
      dispatch(loadArtworksThunk("", "", "", calaculateLinkPage()));
    }
  }, [
    calaculateLinkPage,
    dispatch,
    filterStyle,
    sortOrderPurchase,
    sortOrderRent,
  ]);

  const changePageBack = () => {
    const nextPage = Number(page) - 1;

    if (filterStyle && sortOrderPurchase) {
      navigate(
        `/artwork/${nextPage}/${filterStyle}/sortOrderPurchase=${sortOrderPurchase}`
      );
    } else if (filterStyle && sortOrderRent) {
      navigate(
        `/artwork/${nextPage}/${filterStyle}/sortOrderRent=${sortOrderRent}`
      );
    } else if (sortOrderRent) {
      navigate(`/artwork/${nextPage}/sortOrderRent=${sortOrderRent}`);
    } else if (sortOrderPurchase) {
      navigate(`/artwork/${nextPage}/sortOrderPurchase=${sortOrderPurchase}`);
    } else {
      navigate(`/artwork/${nextPage}`);
    }
  };

  const changePageForward = () => {
    const nextPage = Number(page) + 1;

    if (filterStyle && sortOrderPurchase) {
      navigate(
        `/artwork/${nextPage}/${filterStyle}/sortOrderPurchase=${sortOrderPurchase}`
      );
    } else if (filterStyle && sortOrderRent) {
      navigate(
        `/artwork/${nextPage}/${filterStyle}/sortOrderRent=${sortOrderRent}`
      );
    } else if (sortOrderRent) {
      navigate(`/artwork/${nextPage}/sortOrderRent=${sortOrderRent}`);
    } else if (sortOrderPurchase) {
      navigate(`/artwork/${nextPage}/sortOrderPurchase=${sortOrderPurchase}`);
    } else {
      navigate(`/artwork/${nextPage}`);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <ArtworksListStyled>
          <div>
            <div className="artwork__text--container">
              {filterStyle ? (
                <p className="artwork__text--intro">
                  ALL OF OUR
                  <span className="artwork__text--colored">
                    {" "}
                    {filterStyle.toUpperCase()}{" "}
                  </span>{" "}
                  ART
                </p>
              ) : (
                <p className="artwork__text--intro">
                  ALL THE
                  <span className="artwork__text--colored">
                    {" "}
                    DES TERRA{" "}
                  </span>{" "}
                  ARTISTS WORKS
                </p>
              )}
              {sortOrderRent ? (
                <p className="artwork__text--intro">
                  {" "}
                  SORTED BY
                  <span className="artwork__text--colored"> RENT </span>
                  PRICE{" "}
                </p>
              ) : (
                ""
              )}
              {sortOrderPurchase ? (
                <p className="artwork__text--intro">
                  {" "}
                  SORTED BY
                  <span className="artwork__text--colored"> PURCHASE</span>
                  PRICE{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="artwork__filter--container">
            <div className="dropdown__container">
              <div className="dropdown">
                <button className="dropbtn">SORT BY PURCHASE PRICE</button>
                <div className="dropdown-content">
                  {filterStyle ? (
                    <NavLink
                      to={`/artwork/1/${filterStyle}/sortOrderPurchase=-1`}
                    >
                      Biggest to Smallest Price
                    </NavLink>
                  ) : (
                    <NavLink to={`/artwork/1/sortOrderPurchase=-1`}>
                      Biggest to Smallest Price
                    </NavLink>
                  )}
                  {filterStyle ? (
                    <NavLink
                      to={`/artwork/1/${filterStyle}/sortOrderPurchase=1`}
                    >
                      Biggest to Smallest Price
                    </NavLink>
                  ) : (
                    <NavLink to={`/artwork/1/sortOrderPurchase=1`}>
                      Smallest to Biggest Price
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
            <div className="dropdown__container--center">
              <div className="dropdown">
                <button className="dropbtn">SORT BY RENT PRICE</button>
                <div className="dropdown-content">
                  {filterStyle ? (
                    <NavLink to={`/artwork/1/${filterStyle}/sortOrderRent=-1`}>
                      Biggest to Smallest Price
                    </NavLink>
                  ) : (
                    <NavLink to={`/artwork/1/sortOrderRent=-1`}>
                      Biggest to Smallest Price
                    </NavLink>
                  )}
                  {filterStyle ? (
                    <NavLink to={`/artwork/1/${filterStyle}/sortOrderRent=1`}>
                      Smallest to Biggest Price
                    </NavLink>
                  ) : (
                    <NavLink to={`/artwork/1/sortOrderRent=1`}>
                      Smallest to Biggest Price
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
            <div className="dropdown__container--right">
              <div className="dropdown">
                <button className="dropbtn">SELECT YOUR STYLE</button>
                <div className="dropdown-content">
                  <NavLink to={`/artwork/1/`}>All Artworks</NavLink>
                  <NavLink to={`/artwork/1/abstract/sortOrderRent=-1`}>
                    Abstract
                  </NavLink>
                  <NavLink to={`/artwork/1/architecture/sortOrderRent=-1`}>
                    Architecture
                  </NavLink>
                  <NavLink to={`/artwork/1/expressionist/sortOrderRent=-1`}>
                    Expressionist
                  </NavLink>
                  <NavLink to={`/artwork/1/figurative/sortOrderRent=-1`}>
                    Figurative
                  </NavLink>
                  <NavLink to={`/artwork/1/geometric/sortOrderRent=-1`}>
                    Geometric
                  </NavLink>
                  <NavLink to={`/artwork/1/minimal/sortOrderRent=-1`}>
                    Minimal
                  </NavLink>
                  <NavLink to={`/artwork/1/nature/sortOrderRent=-1`}>
                    Nature
                  </NavLink>
                  <NavLink to={`/artwork/1/people/sortOrderRent=-1`}>
                    People
                  </NavLink>
                  <NavLink to={`/artwork/1/psychedelic/sortOrderRent=-1`}>
                    Psychedelic
                  </NavLink>
                  <NavLink to={`/artwork/1/urban/sortOrderRent=-1`}>
                    Urban
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown__container--right_responsive">
            <div className="dropdown">
              <button className="dropbtn">SELECT YOUR STYLE</button>
              <div className="dropdown-content">
                <NavLink to={`/artwork/1/abstract/sortOrderRent=-1`}>
                  Abstract
                </NavLink>
                <NavLink to={`/artwork/1/architecture/sortOrderRent=-1`}>
                  Architecture
                </NavLink>
                <NavLink to={`/artwork/1/expressionist/sortOrderRent=-1`}>
                  Expressionist
                </NavLink>
                <NavLink to={`/artwork/1/figurative/sortOrderRent=-1`}>
                  Figurative
                </NavLink>
                <NavLink to={`/artwork/1/geometric/sortOrderRent=-1`}>
                  Geometric
                </NavLink>
                <NavLink to={`/artwork/1/minimal/sortOrderRent=-1`}>
                  Minimal
                </NavLink>
                <NavLink to={`/artwork/1/nature/sortOrderRent=-1`}>
                  Nature
                </NavLink>
                <NavLink to={`/artwork/1/people/sortOrderRent=-1`}>
                  People
                </NavLink>
                <NavLink to={`/artwork/1/psychedelic/sortOrderRent=-1`}>
                  Psychedelic
                </NavLink>
                <NavLink to={`/artwork/1/urban/sortOrderRent=-1`}>
                  Urban
                </NavLink>
              </div>
            </div>
          </div>
          <ul className="artworks__list">
            {artworks.map((artwork) => {
              return <Artwork key={artwork.id} artwork={artwork} />;
            })}
          </ul>
          <div className="artworks__navigate--container">
            <svg
              data-testid="back-button"
              className={
                Number(page) <= 1
                  ? "artworks__navigate--button_deactivated_left"
                  : "artworks__navigate--button_first"
              }
              onClick={Number(page) <= 1 ? undefined : changePageBack}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fillOpacity={Number(page) <= 1 ? "0" : ""}
                d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
              />
            </svg>

            <p className="artworks__navigate--counter">{`${currentPage}/${totalPage}`}</p>
            <svg
              data-testid="forward-button"
              className={
                Number(page) === totalPage || totalPage === 0
                  ? "artworks__navigate--button_deactivated_right"
                  : "artworks__navigate--button_second"
              }
              onClick={
                Number(page) === totalPage || totalPage === 0
                  ? undefined
                  : changePageForward
              }
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fillOpacity={Number(page) === totalPage ? "0" : ""}
                d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
              />
            </svg>
          </div>
        </ArtworksListStyled>
      )}
    </>
  );
};

export default ArtworksList;
