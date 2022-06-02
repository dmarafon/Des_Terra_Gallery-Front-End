import axios from "axios";
import jwtDecode from "jwt-decode";
import { LoginInformation, UserInformation } from "../../types/userInterface";
import {
  feedbackOnActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";

import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginUserThunk =
  (loginInformation: LoginInformation) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const route = `${process.env.REACT_APP_API_URL}users/login`;
      const {
        data: { token },
      } = await axios.post(route, loginInformation);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      dispatch(finishedLoadingActionCreator());
    } catch (error) {
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    }
  };

export const registerUserThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}users/register`,
      formData
    );

    const newUser = {
      email: formData.email,
      password: formData.password,
    };

    const route = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(route, newUser);
    localStorage.setItem("token", token);
    const userInfo: UserInformation = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };
