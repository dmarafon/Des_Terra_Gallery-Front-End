import axios from "axios";
import { errorLoginValidation } from "../../components/utils/errorValidation";
import { loadSingleArtworkActionCreator } from "../features/singleArtworkSlice";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";

import { AppDispatch } from "../store/store";

export const loadSingleArtworkThunk =
  (artworkId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const {
        data: { singleArtwork },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}artworks/single/${artworkId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      await dispatch(loadSingleArtworkActionCreator(singleArtwork));
      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };
