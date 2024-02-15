import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Login from "components/Login";
import SignUp from "components/SignUp";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/about" render={() => <div>About</div>} />
      <Route exact component={SignUp} path="/signup" />
      <Route exact component={Login} path="/login" />
    </Switch>
  </Router>
);

export default App;
