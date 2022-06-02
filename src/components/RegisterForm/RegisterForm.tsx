import { SyntheticEvent, useEffect, useState } from "react";
import { registerUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";
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
    artist: "",
    image: "",
  };

  const [formData, setFormData] = useState(formInitialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      formData.firstname !== "" &&
      formData.surname !== "" &&
      formData.email !== "" &&
      formData.password !== "" &&
      formData.address !== "" &&
      formData.city !== "" &&
      formData.phonenumber !== ""
    ) {
      setButtonDisabled(false);
      return;
    }

    setButtonDisabled(true);
  }, [
    formData.firstname,
    formData.surname,
    formData.email,
    formData.password,
    formData.address,
    formData.city,
    formData.phonenumber,
  ]);

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "file"
          ? (event.target as HTMLInputElement).files?.[0] || ""
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
    const newUser = new FormData();
    newUser.append("firstname", formData.firstname);
    newUser.append("surname", formData.surname);
    newUser.append("email", formData.email);
    newUser.append("password", formData.password);
    newUser.append("webpage", formData.webpage);
    newUser.append("address", formData.address);
    newUser.append("apartmentdoorstair", formData.apartmentdoorstair);
    newUser.append("city", formData.city);
    newUser.append("phonenumber", formData.phonenumber);
    newUser.append("artist", formData.artist);
    newUser.append("image", formData.image);

    dispatch(registerUserThunk(newUser));
    setFormData(formInitialState);
    resetForm();
  };

  return (
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
              />
              <label className="register__label" htmlFor="email">
                EMAIL
              </label>
              <input
                className="register__input"
                id="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={changeData}
                required
                autoComplete="off"
              />
              <label className="register__label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="register__input"
                id="password"
                type="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={changeData}
                required
                autoComplete="off"
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
              />
              <label className="register__label" htmlFor="image">
                PICTURE PROFILE (OPTIONAL)
              </label>
              <input
                className="register__input"
                id="image"
                type="file"
                onChange={changeData}
                autoComplete="off"
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
              />
              <label className="register__label" htmlFor="apartmentdoorstair">
                APARTMENT, DOOR, STAIR (OPTIONAL)
              </label>
              <input
                className="register__input"
                id="apartmentdoorstair"
                placeholder="EX.: BAJO - 2"
                value={formData.apartmentdoorstair}
                onChange={changeData}
                autoComplete="off"
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
                <label className="register__label--checkbox" htmlFor="artist">
                  I'm an Artist and I want to Sell My Work
                </label>
              </div>
              <div className="register__button--container">
                <button
                  className="register__button"
                  type="submit"
                  disabled={buttonDisabled}
                  value="Send"
                >
                  REGISTER
                </button>
              </div>
              <p className="register__text--login">
                Already Registered?
                <span className="register__text--colored"> Sign In Now!</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
