import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
