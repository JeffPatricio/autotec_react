import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../../components/Menu';
import Employees from './Employees';
import Products from './Products';
import Home from './Home';
import Profile from './Profile';
import Stock from './Stock';
import Reports from './Reports';
import { Container } from './styles';

const Main = ({ match, location }) => {
  return (
    <Container>
      <Menu match={match} location={location} />
      <Route exact path={`${match.path}/`} component={(props) => <Redirect to={`${match.path}/home`} />} />
      <Route exact path={`${match.path}/home`} component={(props) => <Home  {...props} />} />
      <Route path={`${match.path}/profile`} component={(props) => <Profile  {...props} />} />
      <Route path={`${match.path}/products`} component={(props) => <Products  {...props} />} />
      <Route path={`${match.path}/employees`} component={(props) => <Employees  {...props} />} />
      <Route path={`${match.path}/stock`} component={(props) => <Stock  {...props} />} />
      <Route path={`${match.path}/reports`} component={(props) => <Reports  {...props} />} />
    </Container>
  )
}

export default Main
