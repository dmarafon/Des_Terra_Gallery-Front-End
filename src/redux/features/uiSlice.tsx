import { createSlice } from "@reduxjs/toolkit";

interface uiSliceState {
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
    loading: (ui: uiSliceState, action) => ({ ...ui, loading: true }),
    finishedLoading: (ui: uiSliceState, action) => ({ ...ui, loading: false }),
    feedbackOn: (ui: uiSliceState, action) => ({ ...ui, feedback: true }),
    feedbackOff: (ui: uiSliceState, action) => ({ ...ui, feedback: false }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
