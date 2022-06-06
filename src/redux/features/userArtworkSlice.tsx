import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtworks } from "../../types/artworksInterface";

const initialState: IArtworks[] = [];

const userArtworksSlice = createSlice({
  name: "userArtworks",
  initialState,
  reducers: {
    loadUserArtworks: (artworks, action) => [...action.payload],
    deleteArtwork: (artworks, action: PayloadAction<string>) =>
      artworks.filter((artwork) => artwork.id !== action.payload),
  },
});

export const {
  loadUserArtworks: loadUserartworksActionCreator,
  deleteArtwork: deleteArtworkActionCreator,
} = userArtworksSlice.actions;

export default userArtworksSlice.reducer;
