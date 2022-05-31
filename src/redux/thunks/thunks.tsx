import axios from "axios";
import jwtDecode from "jwt-decode";

import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface LoginInformation {
  email: string;
  password: string;
}

interface userInformation {
  id: string;
  firstName: string;
  email: string;
  logged: boolean;
}

export const loginUserThunk =
  (loginInformation: LoginInformation) => async (dispatch: AppDispatch) => {
    const route = `${process.env.REACT_APP_API_URL}users/login`;
    const {
      data: { token },
    } = await axios.post(route, loginInformation);

    localStorage.setItem("token", token);

    const userInfo: userInformation = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };
