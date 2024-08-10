import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../redux/slices/historySlice";
import style from "../scss/History.module.scss";

const History = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history.history);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className={style.history}>
      <h3>History</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};

export default History;
