import axios from "axios";
import {
  checkStatusCode,
  errorLoginValidation,
  errorRegistrationValidation,
} from "../../components/utils/errorValidation";
import { loadartworksActionCreator } from "../features/artworkSlice";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
import { loadUserartworksActionCreator } from "../features/userArtworkSlice";

import { AppDispatch } from "../store/store";

export const loadArtworksThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}artworks/all`;
  try {
    dispatch(loadingActionCreator());
    const {
      data: { artworks },
    } = await axios.get(url);
    dispatch(finishedLoadingActionCreator());

    if (artworks) {
      dispatch(loadartworksActionCreator(artworks));
    } else {
      dispatch(finishedLoadingActionCreator());
      throw new Error("No Artworks");
    }
  } catch (error: any) {
    const errorResponse = errorLoginValidation(error);
    dispatch(finishedLoadingActionCreator());
    dispatch(apiResponseActionCreator(errorResponse));
  }
};

export const loadUserArtworks =
  (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const {
        data: { artworkauthor },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}artworks/myart/${userId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      if (artworkauthor.length > 0) {
        dispatch(loadUserartworksActionCreator(artworkauthor));
        return dispatch(finishedLoadingActionCreator());
      } else {
        dispatch(finishedLoadingActionCreator());
        throw new Error("No Artworks");
      }
    } catch (error: any) {
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };

export const deleteArtworkThunk =
  (artworkId: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URL}artworks/${artworkId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      dispatch(finishedLoadingActionCreator());

      checkStatusCode(status, artworkId);
    } catch (error: any) {
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };

export const createArtworkThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      await axios
        .post(`${process.env.REACT_APP_API_URL}artworks/addart`, formData, {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        })
        .then((response) => {
          const apiResponse = response.request.response.substring(2, 5);
          console.log(apiResponse);
          dispatch(apiResponseActionCreator(apiResponse.toString()));
        });

      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorRegistrationValidation(error);

      dispatch(apiResponseActionCreator(errorResponse));
      dispatch(finishedLoadingActionCreator());
    }
  };
