import React from "react";
import { Route, Switch } from "react-router-dom";
import newEmployee from "./components/newEmployee";
import HomePage from "./components/HomePage";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/create" component={newEmployee} />
  </Switch>
);
