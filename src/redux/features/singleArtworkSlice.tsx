import { createSlice } from "@reduxjs/toolkit";
import { IArtworks } from "../../types/artworksInterface";

const initialState: IArtworks = {
  id: "",
  title: "",
  medium: "",
  height: "",
  width: "",
  style: "",
  description: "",
  image: "",
  imagebackup: "",
  purchaseprice: "",
  monthlyrateprice: "",
  author: [{ firstname: "", surname: "" }],
};

const singleArtworkSlice = createSlice({
  name: "singleArtwork",
  initialState,
  reducers: {
    loadSingleArtwork: (artworks, action) => ({
      ...action.payload,
    }),
  },
});

export const { loadSingleArtwork: loadSingleArtworkActionCreator } =
  singleArtworkSlice.actions;

export default singleArtworkSlice.reducer;
