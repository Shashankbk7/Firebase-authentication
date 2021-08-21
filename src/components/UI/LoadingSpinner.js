import React from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <React.Fragment>
      <div className={styles.spinnerStyles}>
        <div className={styles.loader}></div>
      </div>
    </React.Fragment>
  );
};

export default LoadingSpinner;
