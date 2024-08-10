import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistoryEntry(state, action) {
      state.history.push(action.payload);
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const { addHistoryEntry, clearHistory } = historySlice.actions;

export default historySlice.reducer;
