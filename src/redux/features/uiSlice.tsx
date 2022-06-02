import { createSlice } from "@reduxjs/toolkit";

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
    loading: (ui: UISliceState, action) => ({ ...ui, loading: true }),
    finishedLoading: (ui: UISliceState, action) => ({ ...ui, loading: false }),
    feedbackOn: (ui: UISliceState, action) => ({ ...ui, feedback: true }),
    feedbackOff: (ui: UISliceState, action) => ({ ...ui, feedback: false }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
