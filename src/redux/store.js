import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./slices/calculatorSlice";
import historySlice from "./slices/historySlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    history: historySlice,
  },
});
