import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistorySliceState {
  history: string[];
}

const initialState: HistorySliceState = {
  history: [],
};

const HistorySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryEntry(state, action: PayloadAction<string>) {
      state.history.push(action.payload);
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { addHistoryEntry, clearHistory } = HistorySlice.actions;

export default HistorySlice.reducer;
