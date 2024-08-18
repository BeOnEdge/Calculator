import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorSliceState {
  firstInput: string;
  operator: string | null;
  secondInput: string;
  result: string;
  isCalculated: boolean;
}

const initialState: CalculatorSliceState = {
  firstInput: "",
  operator: null,
  secondInput: "",
  result: "",
  isCalculated: false,
};

const CalculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addFirst(state, action: PayloadAction<string>) {
      if (!state.isCalculated) {
        state.firstInput += action.payload;
      }
    },
    addSecond(state, action: PayloadAction<string>) {
      if (!state.isCalculated) {
        state.secondInput += action.payload;
      }
    },
    setOperator(state, action: PayloadAction<string>) {
      if (!state.isCalculated && state.firstInput) {
        state.operator = action.payload;
      }
    },
    calculate(state) {
      const first = parseFloat(state.firstInput);
      const second = parseFloat(state.secondInput);
      if (!isNaN(first) && !isNaN(second) && state.operator) {
        const operations: { [key: string]: number | string } = {
          "+": first + second,
          "-": first - second,
          "*": first * second,
          "/": second !== 0 ? first / second : "Error",
        };
        state.result = operations[state.operator]?.toString() || "";

        state.isCalculated = true;
      }
    },
    clear(state) {
      state.firstInput = "";
      state.operator = null;
      state.secondInput = "";
      state.result = "";
      state.isCalculated = false;
    },
  },
});

export const { addFirst, addSecond, setOperator, calculate, clear } =
  CalculatorSlice.actions;
export default CalculatorSlice.reducer;
