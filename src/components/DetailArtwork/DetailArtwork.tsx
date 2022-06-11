import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { loadSingleArtworkThunk } from "../../redux/thunks/singleArtworkThunk";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import DetailArtworkStyled from "./DetailArtworkStyled";

const DetailArtwork = (): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);
  const loading = useAppSelector((state) => state.ui.loading);
  const {
    title,
    author: [{ firstname, surname }],
    height,
    width,
    medium,
    monthlyrateprice,
    purchaseprice,
    description,
    imagebackup,
  } = useAppSelector((state) => state.singleArtwork);

  const dispatch = useAppDispatch();

  const { artworkId } = useParams();

  useEffect(() => {
    if (artworkId) {
      dispatch(loadSingleArtworkThunk(artworkId));
    }
  }, [artworkId, dispatch]);

  return loading ? (
    <LoadingModal />
  ) : (
    <DetailArtworkStyled>
      <div className="detail__container">
        <h2 className="detail__heading--title">{title}</h2>
        <p className="detail__paragraph--author">
          by{" "}
          <span className="detail__paragraph--special">
            {firstname ? firstname : ""} {surname ? surname : ""}
          </span>
        </p>
        <ul>
          <li className="detail__list">
            Dimensions: Height {height} in x Width {width} in.
          </li>
          <li className="detail__list">Medium: {medium}</li>
          <li className="detail__list">
            {monthlyrateprice} €{" "}
            <span className="detail__paragraph--special_second">/month</span> |
            {purchaseprice} €
            <span className="detail__paragraph--special_second"> Purchase</span>
          </li>
        </ul>
        <p className="detail__paragraph--description">{description}</p>
      </div>
      <div className="detail__image--container">
        <div className="detail__image--container_second">
          <img
            className="detail__image"
            src={imagebackup}
            alt={`a painting by ${firstname} ${surname}`}
          />
        </div>
        {logged ? (
          <div className="detail__button--container">
            <Button
              text={"BUY OR RENT"}
              className="general__button--orange"
            ></Button>
          </div>
        ) : (
          <div className="detail__info--container">
            <NavLink to="/users/login" className="login__register--navigation">
              <span className="details__text--colored"> Sign up </span>to buy or
              purchase this artwork
            </NavLink>
            <NavLink
              to="/users/register"
              className="login__register--navigation"
            >
              Don’t have an account?
              <span className="details__text--colored">
                {" "}
                Register to our gallery
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </DetailArtworkStyled>
  );
};

export default DetailArtwork;
