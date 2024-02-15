import React from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import SignUp from "components/SignUp";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact path="/about" render={() => <div>About</div>} />
      <Route exact component={SignUp} path="/signup" />
    </Switch>
  </Router>
);

export default App;
