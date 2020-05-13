import React from "react";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default PublicRoutes