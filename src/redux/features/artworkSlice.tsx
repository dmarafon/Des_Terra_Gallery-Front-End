import { createSlice } from "@reduxjs/toolkit";
import { IArtworks } from "../../types/artworksInterface";

const initialState: IArtworks[] = [];

const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    loadArtworks: (artworks, action) => [...action.payload],
  },
});

export const { loadArtworks: loadartworksActionCreator } =
  artworksSlice.actions;

export default artworksSlice.reducer;
