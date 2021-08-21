import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoText}>
        <NavLink className={styles.text} to="/">
          Authentication
        </NavLink>
      </div>
      <div className={styles.rightContents}>
        <NavLink className={styles.links} to="/login">
          Login
        </NavLink>
        <NavLink className={styles.links} to="/signup">
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
