import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProtectedHeader.module.css";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/redux-store";

const ProtectedHeader = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(Actions.logout());
    window.location.reload();
  };
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.profileHeading}>
          <h2 className={styles.heading}>Authentication</h2>
        </div>
        <div className={styles.links}>
          <Link className={styles.link} to="/dashboard">
            Dashboard
          </Link>
          <Link className={styles.link} to="/profile">
            Profile
          </Link>
          <Link className={styles.link} to="/developer">
            Developer
          </Link>
          <button onClick={logoutHandler} className={styles.button}>
            Logout
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProtectedHeader;
