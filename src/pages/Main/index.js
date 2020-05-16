import React from 'react';
import { Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Employees from './Employees';
import { Container } from './styles';

const Main = ({ match, location }) => {
  return (
    <Container>
      <Menu match={match} location={location} />
      <Route path={`${match.path}/employees`} component={(props) => <Employees  {...props} />} />
    </Container>
  )
}

export default Main
