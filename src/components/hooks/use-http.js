import { useDispatch } from "react-redux";
import { Actions } from "../../store/redux-store";

const KEY = "AIzaSyDVofpQPqVwzjTAWaiQ_EknuP4oSZmeU0M";
const useHttp = () => {
  const dispatch = useDispatch();

  const signup = async (email, password) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    if (response.ok) {
      const status = response.status;
      dispatch(Actions.success(status));
  
    } else {

      if (responseData.error.message) {
        const error = responseData.error.message;
        if (error) {
          dispatch(Actions.error(error));
        }
      }
    }
  };

  const login = async (email, password) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      dispatch(
        Actions.loggedIn({
          token: responseData.idToken,
          email: responseData.email,
          expiresIn: responseData.expiresIn,
          kind: responseData.kind,
          refreshToken: responseData.refreshToken,
        })
      );
    } else {
      const error = responseData.error.message;
      dispatch(Actions.error(error));
    }
  };
  const changePassword = async (idToken, password) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    if (response.ok) {
      const success = response.status;
      dispatch(Actions.profileSuccess(success));
    } else {
      const error = responseData.error.message;
      dispatch(Actions.profileError(error));
    }
  };
  return {
    signup,
    login,
    changePassword,
  };
};

export default useHttp;
