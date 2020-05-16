import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Update from '../pages/Update';

const Routes = ({ authUser }) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => authUser.authenticated ? <Redirect to='/main/employees' /> : <Redirect to='/login' />} />
        <Route exact path='/login' render={() => authUser.authenticated ? <Redirect to='/main/employees' /> : <Login />} />
        <PrivateRoute path='/main' component={Main} authUser={authUser} />
        <PrivateRoute exact path='/updatePassword' component={Update} authUser={authUser} />
      </Switch>
    </Router>
  )
}

export default Routes