import React from "react";
import ProtectedHeader from "./ProtectedHeader";
import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const email = useSelector((state) => state.authenticationSlice.email);
  return (
    <div>
      <ProtectedHeader />
      <div className={styles.dashboard}>
        <h2>Welcome</h2>
        <div>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
