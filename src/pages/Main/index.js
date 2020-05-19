import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from '../../components/Menu';
import Employees from './Employees';
import { Container } from './styles';

const Main = ({ match, location }) => {
  return (
    <Container>
      <Menu match={match} location={location} />
      <Route exact path={`${match.path}/`} component={(props) => <Redirect to={`${match.path}/home`} />} />
      <Route exact path={`${match.path}/home`} component={(props) => <h1>Home</h1>} />
      <Route path={`${match.path}/profile`} component={(props) => <h1>Profile</h1>} />
      <Route path={`${match.path}/products`} component={(props) => <h1>Products</h1>} />
      <Route path={`${match.path}/employees`} component={(props) => <Employees  {...props} />} />
      <Route path={`${match.path}/stock`} component={(props) => <h1>Stock</h1>} />
      <Route path={`${match.path}/reports`} component={(props) => <h1>Reports</h1>} />
    </Container>
  )
}

export default Main
