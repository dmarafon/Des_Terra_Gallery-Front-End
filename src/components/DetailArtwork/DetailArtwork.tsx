import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useAppSelector } from "../hooks";
import DetailArtworkStyled from "./DetailArtworkStyled";

const DetailArtwork = (): JSX.Element => {
  const logged = useAppSelector((state) => state.user.logged);

  return (
    <DetailArtworkStyled>
      <div className="detail__container">
        <h2 className="detail__heading--title">sleep</h2>
        <p className="detail__paragraph--author">
          by <span className="detail__paragraph--special">Daniel Segrove</span>
        </p>
        <ul>
          <li className="detail__list">
            Dimensions: Height 18 in x Width 22 in.
          </li>
          <li className="detail__list">Medium: Oil on canvas</li>
          <li className="detail__list">
            38 €{" "}
            <span className="detail__paragraph--special_second">/month</span> |
            400 €
            <span className="detail__paragraph--special_second"> Purchase</span>
          </li>
        </ul>
        <p className="detail__paragraph--description">
          This work was created during a residence in Chile where I had the
          pleasure to meet Kamiko. I was very inspired by her art and even more
          by her perfect stillness while posing to this painting. One thing that
          I will take from Kamiko is that silence goes to places that sound
          would never dare to go.
        </p>
      </div>
      <div className="detail__image--container">
        <div className="detail__image--container_second">
          <img
            className="detail__image"
            src="https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/Daniel%20Segrove%20(11).jpeg?alt=media&token=f1f97305-1e42-4af7-9933-c81152df4f5a"
            alt=""
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
