import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import artworkReducer from "../features/artworkSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    artworks: artworkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
