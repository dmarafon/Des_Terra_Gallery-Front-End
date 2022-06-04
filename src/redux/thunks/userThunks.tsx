import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  errorLoginValidation,
  errorRegistrationValidation,
} from "../../components/utils/errorValidation";
import { LoginInformation } from "../../types/userInterface";
import {
  apiResponseActionCreator,
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
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };

export const registerUserThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      await axios
        .post(`${process.env.REACT_APP_API_URL}users/register`, formData)
        .then((response) => {
          const apiResponse = response.request.response.substring(2, 5);

          dispatch(apiResponseActionCreator(apiResponse.toString()));
        });

      dispatch(finishedLoadingActionCreator());
    } catch (error) {
      const errorResponse = errorRegistrationValidation(error);

      dispatch(apiResponseActionCreator(errorResponse));
      dispatch(finishedLoadingActionCreator());
    }
  };
