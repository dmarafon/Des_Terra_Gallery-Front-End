import axios from "axios";
import {
  checkStatusCode,
  errorLoginValidation,
  errorRegistrationValidation,
} from "../../components/utils/errorValidation";
import { loadartworksActionCreator } from "../features/artworkSlice";
import { countPaginationActionCreator } from "../features/paginationSlice";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
import { loadUserartworksActionCreator } from "../features/userArtworkSlice";

import { AppDispatch } from "../store/store";

export const loadArtworksThunk =
  (
    filterStyle: string | void,
    sortOrderPurchase: string | void,
    sortOrderRent: string | void,
    page: string | void
  ) =>
  async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}artworks/`;
    try {
      dispatch(loadingActionCreator());

      if (filterStyle && sortOrderPurchase) {
        const {
          data: { artworks, totalPage, currentPage },
        } = await axios.get(
          `${url}all?page=${page}&limit=12&filterStyle=${filterStyle}&sortOrderPurchase=${sortOrderPurchase}`
        );
        dispatch(finishedLoadingActionCreator());

        if (artworks) {
          const pagination = { totalPage, currentPage };
          await dispatch(loadartworksActionCreator(artworks));
          dispatch(countPaginationActionCreator(pagination));
        } else {
          dispatch(finishedLoadingActionCreator());
          throw new Error("No Artworks");
        }
        dispatch(finishedLoadingActionCreator());
      } else if (filterStyle && sortOrderRent) {
        const {
          data: { artworks, totalPage, currentPage },
        } = await axios.get(
          `${url}all?page=${page}&limit=12&filterStyle=${filterStyle}&sortOrderRent=${sortOrderRent}`
        );
        dispatch(finishedLoadingActionCreator());

        if (artworks) {
          const pagination = { totalPage, currentPage };
          await dispatch(loadartworksActionCreator(artworks));
          dispatch(countPaginationActionCreator(pagination));
        } else {
          dispatch(finishedLoadingActionCreator());
          throw new Error("No Artworks");
        }
      } else if (sortOrderRent) {
        const {
          data: { artworks, totalPage, currentPage },
        } = await axios.get(
          `${url}all?page=${page}&limit=12&sortOrderRent=${sortOrderRent}`
        );
        dispatch(finishedLoadingActionCreator());

        if (artworks) {
          const pagination = { totalPage, currentPage };
          await dispatch(loadartworksActionCreator(artworks));
          dispatch(countPaginationActionCreator(pagination));
        } else {
          dispatch(finishedLoadingActionCreator());
          throw new Error("No Artworks");
        }
      } else if (sortOrderPurchase) {
        const {
          data: { artworks, totalPage, currentPage },
        } = await axios.get(
          `${url}all?page=${page}&limit=12&sortOrderPurchase=${sortOrderPurchase}`
        );
        dispatch(finishedLoadingActionCreator());

        if (artworks) {
          const pagination = { totalPage, currentPage };
          await dispatch(loadartworksActionCreator(artworks));
          dispatch(countPaginationActionCreator(pagination));
        } else {
          dispatch(finishedLoadingActionCreator());
          throw new Error("No Artworks");
        }
      } else {
        const {
          data: { artworks, totalPage, currentPage },
        } = await axios.get(`${url}all?page=${page}&limit=12`);
        dispatch(finishedLoadingActionCreator());

        if (artworks) {
          const pagination = { totalPage, currentPage };
          await dispatch(loadartworksActionCreator(artworks));
          dispatch(countPaginationActionCreator(pagination));
        } else {
          dispatch(finishedLoadingActionCreator());
          throw new Error("No Artworks");
        }
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
      } = await axios.get(`${process.env.REACT_APP_API_URL}artworks/myart`, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(loadUserartworksActionCreator(artworkauthor));
      dispatch(finishedLoadingActionCreator());
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
          dispatch(apiResponseActionCreator(apiResponse.toString()));
        });

      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorRegistrationValidation(error);

      dispatch(apiResponseActionCreator(errorResponse));
      dispatch(finishedLoadingActionCreator());
    }
  };

export const editArtworkThunk =
  (formData: any, artworkId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      await axios
        .put(
          `${process.env.REACT_APP_API_URL}artworks/editart/${artworkId}`,
          formData,
          {
            headers: { Authorization: `Bearer ${localStorage.token}` },
          }
        )
        .then((response) => {
          const apiResponse = response.request.response.substring(2, 5);
          dispatch(apiResponseActionCreator(apiResponse.toString()));
        });

      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorRegistrationValidation(error);

      dispatch(apiResponseActionCreator(errorResponse));
      dispatch(finishedLoadingActionCreator());
    }
  };
