import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstInput: "",
  operator: null,
  secondInput: "",
  result: "",
  isCalculated: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addFirst(state, action) {
      if (!state.isCalculated) {
        state.firstInput += action.payload;
      }
    },
    addSecond(state, action) {
      if (!state.isCalculated) {
        state.secondInput += action.payload;
      }
    },
    setOperator(state, { payload }) {
      if (!state.isCalculated && state.firstInput) {
        state.operator = payload;
      }
    },
    calculate(state) {
      const first = parseFloat(state.firstInput);
      const second = parseFloat(state.secondInput);
      if (!isNaN(first) && !isNaN(second) && state.operator) {
        const operations = {
          "+": first + second,
          "-": first - second,
          "*": first * second,
          "/": second !== 0 ? first / second : "Error",
        };
        state.result = operations[state.operator]?.toString();

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

export const { addFirst, addSecond, setOperator, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;
