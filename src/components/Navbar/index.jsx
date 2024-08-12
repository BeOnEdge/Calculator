import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nambar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.root}>
      <NavLink className={style.link} to='/'>
        Calculator
      </NavLink>
      <NavLink className={style.link} to='/history'>
        History
      </NavLink>
      {/* <NavLink className={style.link} to='/currency-transfer'>
        Currency Transfer
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
