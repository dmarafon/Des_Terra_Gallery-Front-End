import { SyntheticEvent, useEffect, useState } from "react";
import { registerUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";

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
    <form onSubmit={submitRegister} noValidate autoComplete="off">
      <label htmlFor="firstname">FIRST NAME</label>
      <input
        id="firstname"
        placeholder="FIRST NAME"
        value={formData.firstname}
        onChange={changeData}
        required
        autoComplete="off"
      />
      <label htmlFor="surname">SURNAME</label>
      <input
        id="surname"
        placeholder="SURNAME"
        value={formData.surname}
        onChange={changeData}
        required
        autoComplete="off"
      />
      <label htmlFor="email">EMAIL</label>
      <input
        id="email"
        placeholder="EMAIL"
        value={formData.email}
        onChange={changeData}
        required
        autoComplete="off"
      />
      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        type="password"
        placeholder="PASSWORD"
        value={formData.password}
        onChange={changeData}
        required
        autoComplete="off"
      />
      <label htmlFor="webpage">WEB PAGE (OPTIONAL)</label>
      <input
        id="webpage"
        placeholder="WEB PAGE"
        value={formData.webpage}
        onChange={changeData}
        autoComplete="off"
      />
      <label htmlFor="image">PICTURE PROFILE (OPTIONAL)</label>
      <input id="image" type="file" onChange={changeData} autoComplete="off" />
      <label htmlFor="address">ADDRESS & NUMBER</label>
      <input
        id="address"
        placeholder="ex.: Carrer de Mallorca, 200"
        value={formData.address}
        required
        onChange={changeData}
        autoComplete="off"
      />
      <label htmlFor="apartmentdoorstair">
        APARTMENT, DOOR, STAIR (OPTIONAL)
      </label>
      <input
        id="apartmentdoorstair"
        placeholder="ex.: 1 - 1"
        value={formData.apartmentdoorstair}
        onChange={changeData}
        autoComplete="off"
      />
      <label htmlFor="city">CITY</label>
      <input
        id="city"
        placeholder="CITY"
        value={formData.city}
        onChange={changeData}
        autoComplete="off"
      />
      <label htmlFor="phonenumber">PHONE NUMBER</label>
      <input
        id="phonenumber"
        placeholder="PHONE NUMBER"
        value={formData.phonenumber}
        onChange={changeData}
        autoComplete="off"
      />
      <input
        id="artist"
        type="checkbox"
        name="subscribe"
        value="false"
        onChange={changeData}
      />
      <label htmlFor="artist">I'm an Artist and I want to Sell My Work</label>
      <button type="submit" disabled={buttonDisabled} value="Send">
        REGISTER
      </button>
    </form>
  );
};

export default RegisterForm;
