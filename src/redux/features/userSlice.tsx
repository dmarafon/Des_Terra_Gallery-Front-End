import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  id: string;
  firstName: string;
  email: string;
  logged: boolean;
}

const initialState = {
  id: "",
  firstName: "",
  email: "",
  logged: false,
} as SliceState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: SliceState, action: PayloadAction<SliceState>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ id: "", firstName: "", email: "", logged: false }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
