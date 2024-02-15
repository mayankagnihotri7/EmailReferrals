import React from "react";

import { either, isEmpty, isNil } from "ramda";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "components/commons/PrivateRoute";
import Dashboard from "components/Dashboard";
import Login from "components/Login";
import SignUp from "components/SignUp";

const App = () => {
  const signInStatus = localStorage.getItem("isSignedIn");
  const isLoggedIn = !either(isNil, isEmpty)(signInStatus);

  return (
    <Router>
      <Switch>
        <Route exact component={SignUp} path="/signup" />
        <Route exact component={Login} path="/login" />
        <PrivateRoute
          component={Dashboard}
          condition={isLoggedIn}
          path="/"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
};

export default App;
