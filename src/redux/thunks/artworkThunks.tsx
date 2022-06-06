import axios from "axios";
import {
  checkStatusCode,
  errorLoginValidation,
} from "../../components/utils/errorValidation";
import { loadartworksActionCreator } from "../features/artworkSlice";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
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

export const deleteArtworkThunk =
  (artworkId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URL}/artworks//${artworkId}`,
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
