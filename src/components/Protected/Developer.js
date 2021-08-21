import React from "react";
import ProtectedHeader from "./ProtectedHeader";
import { useSelector } from "react-redux";
import styles from "./Developer.module.css";

const Developer = () => {
  const email = useSelector((state) => state.authenticationSlice.email);
  const token = useSelector((state) => state.authenticationSlice.token);
  const expiresIn = useSelector((state) => state.authenticationSlice.expiresIn);
  const refreshToken = useSelector(
    (state) => state.authenticationSlice.refreshToken
  );
  const kind = useSelector((state) => state.authenticationSlice.kind);
  return (
    <div>
      <ProtectedHeader />
      <div className={styles.developerDetails}>
        <h2>Email</h2>
        <p>{email}</p>
        <h2>Token</h2>
        <div>{token}</div>
        <h2>Token Expires In</h2>
        <p>{expiresIn}</p>
        <h2>Refresh Token</h2>
        <div>{refreshToken}</div>
        <h2>Kind</h2>
        <p>{kind}</p>
        <h2>IF U REFRESH U WILL BE LOGGED OUT</h2>
      </div>
    </div>
  );
};

export default Developer;
