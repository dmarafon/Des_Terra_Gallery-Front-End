import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import MyArtwork from "../MyArtwork/MyArtwork";
import MyArtworksListStyled from "./MyArtworksListStyled";

const MyArtworksList = () => {
  const userArtworks = useAppSelector((state) => state.userArtworks);
  const loading = useAppSelector((state) => state.ui.loading);

  return (
    <>
      {loading ? (
        <LoadingModal />
      ) : (
        <MyArtworksListStyled>
          <div className="artwork__container">
            <div className="artwork__text--container">
              <p className="artwork__text--intro">SELECT YOUR ARTWORK TO </p>
              <p className="artwork__text--intro">
                <span className="artwork__text--colored">EDIT</span>
              </p>
              <p className="artwork__text--intro">
                OR <span className="artwork__text--colored">ADD</span> MORE OF
                YOUR ART
              </p>
            </div>
            <NavLink to={"/addart"}>
              <Button
                className={"general__button--orange"}
                text={"ADD YOUR ART +"}
              ></Button>
            </NavLink>
            <ul className="artworks__list">
              {userArtworks.length !== 0 ? (
                userArtworks.map((userArtwork) => {
                  return (
                    <MyArtwork key={userArtwork.id} artwork={userArtwork} />
                  );
                })
              ) : (
                <div className="artwork__container">
                  <div className="artwork__text--container">
                    <p className="artwork__text--intro">STILL NO ARTWORKS?</p>
                    <p className="artwork__text--intro">
                      PRESS{" "}
                      <span className="artwork__text--colored">
                        "ADD YOUR ART"{" "}
                      </span>
                      TO START
                    </p>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </MyArtworksListStyled>
      )}
    </>
  );
};

export default MyArtworksList;
