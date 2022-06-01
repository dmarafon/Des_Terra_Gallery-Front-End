import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  FormData,
  LoginInformation,
  UserInformation,
} from "../../types/userInterface";

import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginUserThunk =
  (loginInformation: LoginInformation) => async (dispatch: AppDispatch) => {
    const route = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(route, loginInformation);

    localStorage.setItem("token", token);

    const userInfo: UserInformation = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };

export const registerUserThunk =
  (formData: FormData) => async (dispatch: AppDispatch) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}users/register`,
      formData
    );

    const newUser = {
      firstname: formData.firstname,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      webpage: formData.webpage,
      address: formData.address,
      apartmentdoorstair: formData.apartmentdoorstair,
      city: formData.city,
      phonenumber: formData.phonenumber,
      artist: formData.artist,
      pictureprofile: formData.image,
    };

    const route = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(route, newUser);
    localStorage.setItem("token", token);
    const userInfo: UserInformation = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };
