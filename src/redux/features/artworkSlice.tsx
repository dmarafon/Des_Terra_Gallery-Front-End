import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtworks } from "../../types/artworksInterface";

const initialState: IArtworks[] = [];

const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    loadArtworks: (artworks, action) => [...action.payload],
    deleteArtwork: (artworks, action: PayloadAction<string>) =>
      artworks.filter((artwork) => artwork.id !== action.payload),
  },
});

export const {
  loadArtworks: loadartworksActionCreator,
  deleteArtwork: deleteArtworkActionCreator,
} = artworksSlice.actions;

export default artworksSlice.reducer;
