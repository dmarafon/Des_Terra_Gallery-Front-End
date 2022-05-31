import { useState } from "react";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const formInitialState = { email: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);

  const dispatch = useAppDispatch();

  const loginSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const dispatchedData = { ...formData };
    resetForm();

    dispatch(loginUserThunk(dispatchedData));
  };

  const changeData = (event: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  return (
    <LoginFormStyled>
      <div className="login__image--container">
        <div className="login__image--image_container">
          <img
            className="login__image"
            src="https://i.ibb.co/R4cS7xP/leaving-the-bed.jpg"
            alt="artist painting"
          />
        </div>
        <div className="login__image--text_container">
          <p className="login__image--subtitle">Nick Alm, "Leaving the Bed"</p>
        </div>
      </div>
      <div className="login__container">
        <p className="login__text--intro">
          SIGN IN TO <span className="login__text--colored">EXPERIENCE </span>
        </p>
        <p className="login__text--intro_second">DES TERRA</p>
        <form onSubmit={loginSubmit} noValidate autoComplete="off">
          <div className="login__form">
            <label className="login__label" htmlFor="email">
              EMAIL
            </label>
            <input
              className="login__input"
              id="email"
              value={formData.email}
              onChange={changeData}
              placeholder="EMAIL"
            />
            <label className="login__label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="login__input"
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              placeholder="PASSWORD"
            />
          </div>
          <div className="login__button--container">
            <button className="login__button" type="submit">
              SIGN IN
            </button>
          </div>
        </form>

        <p className="login__text--register">
          Don’t have an account?
          <span className="login__text--colored"> Join Now!</span>
        </p>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
