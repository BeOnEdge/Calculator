import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addFirst,
  addSecond,
  clear,
  calculate,
  setOperator,
} from "../../redux/slices/calculatorSlice";
import { addHistoryEntry } from "../../redux/slices/historySlice";
import style from "./Calculator.module.scss";

const numbersArr = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const operationsArr = ["+", "-", "*", "/"];

const Calculator = () => {
  const dispatch = useDispatch();
  const { firstInput, secondInput, result, operator, isCalculated } =
    useSelector((state) => state.calculator);
  const handleDigitClick = (digit) => {
    if (!isCalculated) {
      if (!operator) {
        dispatch(addFirst(digit));
      } else {
        dispatch(addSecond(digit));
      }
    }
  };

  const handleOperatorClick = (operator) => {
    if (!isCalculated) {
      dispatch(setOperator(operator));
    }
  };
  const handleCalculateClick = () => {
    if (!isCalculated) {
      dispatch(calculate());
    }
  };

  const handleClearClick = () => {
    dispatch(
      addHistoryEntry(`${firstInput} ${operator} ${secondInput} = ${result}`)
    );
    dispatch(clear());
  };

  const historyOperation = () => {
    return `${firstInput} ${operator} ${secondInput}`;
  };

  return (
    <div className={style.calculator}>
      <div className={style.display}>
        {firstInput && operator && (
          <div className={style.history_operation}>{historyOperation()}</div>
        )}
        <div className={style.current}>
          {result || secondInput || firstInput || "0"}
        </div>
      </div>
      <div className={style.buttons}>
        <div className={style.digits}>
          {numbersArr.map((btn) => (
            <button key={btn} onClick={() => handleDigitClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
        <div className={style.bin_operation}>
          {operationsArr.map((btn) => (
            <button key={btn} onClick={() => handleOperatorClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
        <div className={style.end_operation}>
          <button className={style.equal} onClick={handleCalculateClick}>
            =
          </button>
          <button className={style.clear} onClick={handleClearClick}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
