import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route component={ Home } path="/" exact />
    <Route component={ Shelf } path="/shelf/:id" />
    <Route component={ Bin } path="/bin/:id" />
    <Route component={ newBin } path="/newBin/:id" />
  </Switch>
)
