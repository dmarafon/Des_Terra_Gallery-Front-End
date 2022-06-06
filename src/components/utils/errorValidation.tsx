import { deleteArtworkActionCreator } from "../../redux/features/artworkSlice";
import { apiResponseActionCreator } from "../../redux/features/uiSlice";
import { AppDispatch } from "../../redux/store/store";

export const errorLoginValidation = (error: {
  response: { data: { msg: string } };
}) => {
  if (typeof error?.response?.data?.msg === "undefined") {
    return "Unkwnown Error";
  }

  return error.response.data.msg.substring(0, 11);
};

export const errorRegistrationValidation = (error: {
  response: { data: { message: string } };
}) => {
  if (typeof error?.response?.data?.message === "undefined") {
    return "Unkwnown Error";
  }

  return error.response.data.message.substring(0, 8);
};

export const checkStatusCode =
  (status: number, artworkId: string) => (dispatch: AppDispatch) => {
    if (status === 200) {
      dispatch(deleteArtworkActionCreator(artworkId));
    } else {
      dispatch(apiResponseActionCreator("Artwork was not Deleted"));
    }
  };
