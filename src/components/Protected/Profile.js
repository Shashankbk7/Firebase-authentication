import React, { useRef, useState } from "react";
import ProtectedHeader from "./ProtectedHeader";
import styles from "./Profile.module.css";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "../hooks/use-http";
import { Actions } from "../../store/redux-store";

const Profile = () => {
  const { changePassword } = useHttp();
  const email = useSelector((state) => state.authenticationSlice.email);
  const token = useSelector((state) => state.authenticationSlice.token);
  const success = useSelector(
    (state) => state.authenticationSlice.profileSuccess
  );
  const state = useSelector((state) => state.authenticationSlice.profileError);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  if (success) {
    alert("Password Change Successfull");
    dispatch(Actions.profileSuccess(""));
    dispatch(Actions.profileError(""));
  }

  const confirmPasswordSubmitHandler = (event) => {
    event.preventDefault();

    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError("Password Did not match");
      return;
    }

    changePassword(token, password);
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    setError("");
  };

  return (
    <div className={styles.body}>
      <ProtectedHeader />
      <h2 className={styles.heading}>Change Password</h2>
      <h4 className={styles.heading}>{email}</h4>
      <h4 className={styles.changePasswordError}>{state}</h4>
      <form onSubmit={confirmPasswordSubmitHandler} className={styles.form}>
        <div className={styles.inputs}>
          <div>
            <h3 className={styles.error}>{error}</h3>
            <label className={styles.label}>New Password</label>
            <input
              className={error || state ? `${styles.errorLabel}` : ""}
              ref={passwordRef}
              type="password"
            />
          </div>
          <div>
            <label className={styles.label}>Confirm Password</label>
            <input
              className={error || state ? `${styles.errorLabel}` : ""}
              ref={confirmPasswordRef}
              type="password"
            />
          </div>
          <button className={styles.button}>Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
