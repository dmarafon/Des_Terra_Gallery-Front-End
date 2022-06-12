import { createSlice } from "@reduxjs/toolkit";

interface IPagination {
  totalPage: number;
  currentPage: string;
}

const initialState: IPagination = {
  totalPage: 0,
  currentPage: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    countPagination: (pagination, action) => ({
      ...action.payload,
    }),
  },
});

export const { countPagination: countPaginationActionCreator } =
  paginationSlice.actions;

export default paginationSlice.reducer;
