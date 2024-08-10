import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/Calculator";
import History from "./pages/History";
import CurrencyTransfer from "./pages/CurrencyTransfer";
import Navbar from "./components/Navbar";
import "./scss/app.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Calculator />} />
        <Route path='/history' element={<History />} />
        <Route path='/currency-transfer' element={<CurrencyTransfer />} />
      </Routes>
    </div>
  );
}

export default App;
