import React from "react";
import footerImage from "../../assets/built-from-firebase.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerFlex}>
      <img
        className={styles.footerImage}
        src={footerImage}
        alt="firebaseimage"
      />
    </div>
  );
};

export default Footer;
