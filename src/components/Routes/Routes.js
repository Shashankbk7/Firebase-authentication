import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./Routes.module.css";

const LandingPage = React.lazy(() => import("../UI/LandingPage"));
const LoginForm = React.lazy(() => import("../Form/LoginForm"));
const SignupForm = React.lazy(() => import("../Form/SignupForm"));
const Profile = React.lazy(() => import("../Protected/Profile"));
const Dashboard = React.lazy(() => import("../Protected/Dashboard"));
const Developer = React.lazy(() => import("../Protected/Developer"));
const Header = React.lazy(() => import("../UI/Header"));

const Routes = () => {
  const state = useSelector((state) => state.authenticationSlice.isLoggedIn);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/signup" exact>
          <SignupForm />
        </Route>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/profile" exact>
          {state ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/dashboard" exact>
          {state ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/developer" exact>
          {state ? <Developer /> : <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <Header />
          <h2 className={styles.notFound}>404 Not Found</h2>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
