import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UISliceState {
  loading: boolean;
  feedback: boolean;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    feedback: false,
  },
  reducers: {
    loading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: false,
    }),
    feedbackOn: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      feedback: true,
    }),
    feedbackOff: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      feedback: false,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
