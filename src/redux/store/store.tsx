import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import artworkReducer from "../features/artworkSlice";
import userArtworksReducer from "../features/userArtworkSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    artworks: artworkReducer,
    userArtworks: userArtworksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
