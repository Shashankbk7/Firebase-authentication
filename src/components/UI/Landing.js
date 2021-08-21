import React from "react";
import styles from "./Landing.module.css";
import firebaseLogo from "../../assets/firebase.png";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <h2>Authentication from</h2>
      <img className={styles.landingImage} src={firebaseLogo} alt="firebase" />
    </div>
  );
};

export default Landing;
