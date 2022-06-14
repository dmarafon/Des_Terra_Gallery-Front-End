import { SyntheticEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "../../redux/features/uiSlice";
import {
  loginUserThunk,
  registerUserThunk,
} from "../../redux/thunks/userThunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import LoadingModal from "../LoadingModal/LoadingModal";
import ModalText from "../ModalText/ModalText";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const formInitialState = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
    webpage: "",
    address: "",
    apartmentdoorstair: "",
    city: "",
    phonenumber: "",
    artist: "false",
    artimages: "",
  };

  const [formData, setFormData] = useState(formInitialState);
  const apiMessage = useAppSelector((state) => state.ui.apiResponse);
  const loading = useAppSelector((state) => state.ui.loading);
  const feedback = useAppSelector((state) => state.ui.feedback);

  const dispatch = useAppDispatch();

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "file"
          ? (event.target as HTMLInputElement).files?.[0]
          : (event.target as HTMLInputElement).type === "checkbox"
          ? (event.target as HTMLInputElement).checked.toString()
          : (event.target as HTMLInputElement).value,
    });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const submitRegister = (event: SyntheticEvent) => {
    event.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    switch (true) {
      case formData.firstname === "" ||
        formData.surname === "" ||
        formData.email === "" ||
        formData.password === "" ||
        formData.address === "" ||
        formData.city === "" ||
        formData.phonenumber === "":
        dispatch(apiResponseActionCreator("Blank"));
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
        sessionStorage.setItem("email", formData.email);
        sessionStorage.setItem("password", formData.password);
        const newUser = new FormData();
        newUser.append("firstname", formData.firstname.toLowerCase());
        newUser.append("surname", formData.surname.toLowerCase());
        newUser.append("email", formData.email.toLowerCase());
        newUser.append("password", formData.password);
        newUser.append("webpage", formData.webpage.toLowerCase());
        newUser.append("address", formData.address.toLowerCase());
        newUser.append(
          "apartmentdoorstair",
          formData.apartmentdoorstair.toLowerCase()
        );
        newUser.append("city", formData.city.toLowerCase());
        newUser.append("phonenumber", formData.phonenumber);
        newUser.append("artist", formData.artist);
        newUser.append("artimages", formData.artimages);

        dispatch(registerUserThunk(newUser));
        setFormData(formInitialState);
        resetForm();
    }
  };

  const submitClosingModalResponse = () => {
    dispatch(cleanApiResponseActionCreator());
  };

  const loginUser = {
    email: sessionStorage.getItem("email"),
    password: sessionStorage.getItem("password"),
  };

  return (
    <>
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
      {apiMessage === "Email Invalid" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={false}
          customFunction={""}
        >
          The email format is incorrect. Please, check the inputed email
          addressed
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
          Please, you left one or more mandatory fields in blank
        </ModalText>
      )}
      {apiMessage === "new" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={loginUserThunk(loginUser)}
        >
          Your user was Created Succesfully! Close this window to Login
        </ModalText>
      )}
      {apiMessage === "User alr" && (
        <ModalText
          handleClose={submitClosingModalResponse}
          isOpen={feedback}
          customFunction={""}
        >
          This email is already in use, please, choose another email
        </ModalText>
      )}
      {loading ? (
        <LoadingModal />
      ) : (
        <RegisterFormStyled>
          <div className="register__form">
            <form onSubmit={submitRegister} noValidate autoComplete="off">
              <div className="register__text--container">
                <p className="register__text--intro">REGISTER TO</p>
                <p className="register__text--intro">PURCHASE, SELL OR</p>
                <p className="register__text--intro">
                  RENT YOUR
                  <span className="register__text--colored"> ART</span>
                </p>
              </div>
              <div className="register__form--container-labels">
                <div className="register__form--first-labels">
                  <label className="register__label" htmlFor="firstname">
                    FIRST NAME
                  </label>
                  <input
                    className="register__input"
                    id="firstname"
                    placeholder="FIRST NAME"
                    value={formData.firstname}
                    onChange={changeData}
                    required
                    autoComplete="off"
                    maxLength={35}
                  />
                  <label className="register__label" htmlFor="surname">
                    SURNAME
                  </label>
                  <input
                    className="register__input"
                    id="surname"
                    placeholder="SURNAME"
                    value={formData.surname}
                    onChange={changeData}
                    required
                    autoComplete="off"
                    maxLength={35}
                  />
                  <label className="register__label" htmlFor="email">
                    EMAIL
                  </label>
                  <input
                    className="register__input"
                    id="email"
                    type="email"
                    placeholder="EMAIL"
                    value={formData.email}
                    onChange={changeData}
                    required
                    autoComplete="off"
                    maxLength={33}
                  />
                  <label className="register__label" htmlFor="password">
                    PASSWORD
                  </label>
                  <input
                    className="register__input"
                    id="password"
                    type="password"
                    placeholder="(MIN 5 CHAR - MAX 15 CHAR)"
                    value={formData.password}
                    onChange={changeData}
                    required
                    autoComplete="off"
                    minLength={5}
                    maxLength={15}
                  />
                  <label className="register__label" htmlFor="webpage">
                    WEB PAGE (OPTIONAL)
                  </label>
                  <input
                    className="register__input"
                    id="webpage"
                    placeholder="WEB PAGE"
                    value={formData.webpage}
                    onChange={changeData}
                    autoComplete="off"
                    maxLength={50}
                  />
                  <label className="register__label" htmlFor="artimages">
                    PICTURE PROFILE (OPTIONAL)
                  </label>
                  <input
                    className="register__input"
                    id="artimages"
                    type="file"
                    onChange={changeData}
                    autoComplete="off"
                    accept="image/*"
                    required
                  />
                </div>
                <div className="register__form--second-labels">
                  <label className="register__label" htmlFor="address">
                    ADDRESS & NUMBER
                  </label>
                  <input
                    className="register__input"
                    id="address"
                    placeholder="EX.: CARRER DE MALLORCA, 200"
                    value={formData.address}
                    required
                    onChange={changeData}
                    autoComplete="off"
                    maxLength={35}
                  />
                  <label
                    className="register__label"
                    htmlFor="apartmentdoorstair"
                  >
                    APARTMENT, DOOR, STAIR (OPTIONAL)
                  </label>
                  <input
                    className="register__input"
                    id="apartmentdoorstair"
                    placeholder="EX.: BAJO - 2"
                    value={formData.apartmentdoorstair}
                    onChange={changeData}
                    autoComplete="off"
                    maxLength={35}
                  />
                  <label className="register__label" htmlFor="city">
                    CITY
                  </label>
                  <input
                    className="register__input"
                    id="city"
                    placeholder="CITY"
                    value={formData.city}
                    onChange={changeData}
                    autoComplete="off"
                    maxLength={35}
                  />
                  <label className="register__label" htmlFor="phonenumber">
                    PHONE NUMBER
                  </label>
                  <input
                    className="register__input"
                    id="phonenumber"
                    placeholder="PHONE NUMBER"
                    value={formData.phonenumber}
                    onChange={changeData}
                    autoComplete="off"
                    type="number"
                  />
                  <div className="register__input--checkbox">
                    <input
                      className="register__input--checkbox_click"
                      id="artist"
                      type="checkbox"
                      name="subscribe"
                      value="false"
                      onChange={changeData}
                    />
                    <label
                      className="register__label--checkbox"
                      htmlFor="artist"
                    >
                      I'm an Artist and I want to Sell My Work
                    </label>
                  </div>
                  <div className="register__button--container">
                    <button
                      className="register__button"
                      type="submit"
                      disabled={false}
                      value="Send"
                    >
                      REGISTER
                    </button>
                  </div>
                  <div className="register__text--login">
                    <NavLink
                      to="/users/login"
                      className="register__text--navigation"
                    >
                      <div className="register__text--navigation">
                        Already Registered?
                        <span className="register__text--colored">
                          {" "}
                          Sign In Now!
                        </span>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </RegisterFormStyled>
      )}
    </>
  );
};

export default RegisterForm;
