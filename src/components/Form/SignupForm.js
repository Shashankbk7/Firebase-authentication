import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
import Header from "../UI/Header";
import { useSelector } from "react-redux";
// import { Actions } from "../../store/redux-store";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";

let displayError;

const SignupForm = () => {
  const { signup } = useHttp();
  const [passwordValidator, setPasswordValidator] = useState();
  const state = useSelector((state) => state.authenticationSlice.error);
  const successState = useSelector(
    (state) => state.authenticationSlice.success
  );
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  if (successState === 200) {
    alert("User Created");
    history.push("/login");
  }
  if (state === "EMAIL_EXISTS") {
    displayError = "Email Exists";
  }

  if (state === "WEAK_PASSWORD : Password should be at least 6 characters") {
    displayError = "Password should be > 6 characters";
  }

  const signupSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password === "" && confirmPassword === "") {
      setPasswordValidator(true);
      displayError = "Password should not be blank";
      return;
    }

    if (password !== confirmPassword) {
      setPasswordValidator(true);
      displayError = "Password did not match";
      return;
    } else {
      signup(email, password);

      // history.push("/login");
    }
    setPasswordValidator(false);
  };
  return (
    <React.Fragment>
      <Header />
      <div className={styles.flexForm}>
        <form onSubmit={signupSubmitHandler}>
          <div className={styles.formContainer}>
            <div className={styles.loginForm}>
              <h2 className={styles.text}>Create Account</h2>
              <h3 className={styles.backendError}>{displayError}</h3>
              <div>
                <label>Email</label>
                <input
                  className={state === "EMAIL_EXISTS" ? `${styles.error}` : ""}
                  ref={emailRef}
                  type="email"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  className={
                    passwordValidator ||
                    state ===
                      "WEAK_PASSWORD : Password should be at least 6 characters"
                      ? `${styles.error}`
                      : ""
                  }
                  ref={passwordRef}
                  type="password"
                />
              </div>

              <div>
                <label>Confirm Password</label>
                <input
                  className={
                    passwordValidator ||
                    state ===
                      "WEAK_PASSWORD : Password should be at least 6 characters"
                      ? `${styles.error}`
                      : ""
                  }
                  ref={confirmPasswordRef}
                  type="password"
                />
              </div>

              <div>
                <button className={styles.button}>Signup</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignupForm;
