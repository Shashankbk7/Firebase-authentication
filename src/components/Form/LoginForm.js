import React, { useRef } from "react";
import styles from "./Form.module.css";
import Header from "../UI/Header";
import useHttp from "../hooks/use-http";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

let displayError = "";

const LoginForm = () => {
  const { login } = useHttp();
  const state = useSelector((state) => state.authenticationSlice.isLoggedIn);
  let error = useSelector((state) => state.authenticationSlice.error);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();


  if (error === "INVALID_EMAIL") {
    displayError = "Invalid Email";
  }
  if (error === "EMAIL_NOT_FOUND") {
    displayError = "Email Not Found";
  }
  if (error === "INVALID_PASSWORD") {
    displayError = "Invalid Password";
  }
  if (error === "MISSING_PASSWORD") {
    displayError = "Missing Password";
  }

  if (state) {
    history.push("/dashboard");
  }
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    error = "";
    login(email, password);
  };

  return (
    <React.Fragment>
      <Header />
      <div className={styles.flexForm}>
        <form onSubmit={loginSubmitHandler}>
          <div className={styles.formContainer}>
            <div className={styles.loginForm}>
              <h2 className={styles.text}>Login</h2>
              <h3 className={styles.backendError}>{displayError}</h3>
              <div>
                <label>Email</label>
                <input
                  className={
                    error === "INVALID_EMAIL" || error === "EMAIL_NOT_FOUND"
                      ? `${styles.error}`
                      : ""
                  }
                  ref={emailRef}
                  type="email"
                />
              </div>

              <div>
                <label>Password</label>
                <input
                  className={
                    error === "INVALID_PASSWORD" || error === "MISSING_PASSWORD"
                      ? `${styles.error}`
                      : ""
                  }
                  ref={passwordRef}
                  type="password"
                />
              </div>

              <div>
                <button className={styles.button}>Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
