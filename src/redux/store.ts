import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "./slices/calculatorSlice";
import HistorySlice from "./slices/historySlice";

export const store = configureStore({
  reducer: {
    calculator: CalculatorSlice,
    history: HistorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
