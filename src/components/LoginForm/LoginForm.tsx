import { SyntheticEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "../../redux/features/uiSlice";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ModalText from "../ModalText/ModalText";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const formInitialState = { email: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.ui.loading);
  const feedback = useAppSelector((state) => state.ui.feedback);
  const apiMessage = useAppSelector((state) => state.ui.apiResponse);
  const logged = useAppSelector((state) => state.user.logged);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged, navigate]);

  const loginSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    switch (true) {
      case formData.email === "" && formData.password === "":
        dispatch(apiResponseActionCreator("Blank"));
        break;

      case formData.email === "":
        dispatch(apiResponseActionCreator("Email Blank"));
        break;

      case !formData.email.match(validRegex):
        dispatch(apiResponseActionCreator("Email Invalid"));
        break;

      case formData.password === "":
        dispatch(apiResponseActionCreator("Password Blank"));
        break;

      case formData.password.length < 5:
        dispatch(apiResponseActionCreator("Password Length"));
        break;

      default:
        const dispatchedData = { ...formData };
        resetForm();

        dispatch(loginUserThunk(dispatchedData));
    }
  };

  const submitClosingModalResponse = () => {
    dispatch(cleanApiResponseActionCreator());
  };

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  return (
    <>
      {apiMessage === "Email Invalid" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={false}
          customFunction={""}
        >
          This is an invalid Email. Please, check the inputed email addressed
          <p className="login__modal--break_text"></p>
        </ModalText>
      )}
      {apiMessage === "Unknown Error" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={false}
          customFunction={""}
        >
          Oops... We're sorry, something went wrong with our servers, try again
          later
          <p className="login__modal--break_text"></p>
        </ModalText>
      )}
      {apiMessage === "Blank" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          You left the Email and
          <p className="login__modal--break_text">Password field in blank</p>
        </ModalText>
      )}
      {apiMessage === "Email Blank" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          You left the Email field in blank.
          <p className="login__modal--break_text">Please, fill your Email.</p>
        </ModalText>
      )}
      {apiMessage === "Password Blank" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          <div className="login__modal--container">
            <p className="login__modal--break_text">
              You left the Password field in blank.
            </p>
            <p className="login__modal--break_text">
              Please, fill your Password.
            </p>
          </div>
        </ModalText>
      )}
      {apiMessage === "Password Length" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          <div className="login__modal--container">
            <p className="login__modal--break_text">
              Your Password should be longer than 5 characters
            </p>
          </div>
        </ModalText>
      )}
      {apiMessage === "Bad Request" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          Wrong Email or Password
          <p className="login__modal--break_text">
            {" "}
            Please, try again to Sign In
          </p>
        </ModalText>
      )}
      {loading ? (
        <LoadingModal />
      ) : (
        <LoginFormStyled>
          <div className="login__image--container">
            <div className="login__image--image_container">
              <img
                className="login__image"
                src="https://firebasestorage.googleapis.com/v0/b/desterra-181ac.appspot.com/o/leaving_the_bed.jpg?alt=media&token=1e89bee0-4d40-412c-863b-fc48a7be959a"
                alt="artist painting"
              />
            </div>
            <div className="login__image--text_container">
              <p className="login__image--subtitle">
                Nick Alm, "Leaving the Bed"
              </p>
            </div>
          </div>
          <div className="login__container">
            <p className="login__text--intro">
              SIGN IN TO{" "}
              <span className="login__text--colored">EXPERIENCE </span>
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
                  required
                  placeholder="EMAIL"
                  maxLength={33}
                />
                <label className="login__label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  autoComplete="current-password"
                  className="login__input"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={changeData}
                  required
                  placeholder="PASSWORD"
                  maxLength={15}
                  minLength={5}
                />
              </div>
              <div className="login__button--container">
                <button
                  className="login__button"
                  type="submit"
                  disabled={false}
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="login__text--register">
              <div>
                <NavLink
                  to="/users/register"
                  className="login__register--navigation"
                >
                  Don’t have an account?
                  <span className="login__text--colored"> Join Now!</span>
                </NavLink>
              </div>
            </div>
          </div>
        </LoginFormStyled>
      )}
    </>
  );
};

export default LoginForm;
