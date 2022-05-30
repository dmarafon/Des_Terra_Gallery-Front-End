import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISliceState {
  id: string;
  firstName: string;
  logged: boolean;
}

const initialState = {
  id: "",
  firstName: "",
  logged: false,
} as ISliceState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: ISliceState, action: PayloadAction<ISliceState>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ id: "", firstName: "", logged: false }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
