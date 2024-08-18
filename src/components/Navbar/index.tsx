import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nambar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.root}>
      <NavLink className={styles.link} to='/'>
        Calculator
      </NavLink>
      <NavLink className={styles.link} to='/history'>
        History
      </NavLink>
      {/* <NavLink className={style.link} to='/currency-transfer'>
        Currency Transfer
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
