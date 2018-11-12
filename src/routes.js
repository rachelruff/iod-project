import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreateEmployee from "./components/CreateEmployee";
import ViewEmployee from "./components/ViewEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/create" component={CreateEmployee} />
    <Route path="/view/:id" component={ViewEmployee} />
    <Route path="/update/:id" component={UpdateEmployee} />
  </Switch>
);
