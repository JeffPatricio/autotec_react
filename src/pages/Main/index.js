import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Menu from '../../components/Menu';
import ListEmployees from '../../components/ListEmployees';
import FormEmployee from '../../components/Forms/Employee';
import { Container } from './styles';

const Main = (props) => {

  return (
    <Container>
      <Menu {...props} />
      <FormEmployee  {...props} />
      {/* <Router>
        <Switch>
          <Route exact path={`${props.match.path}/employees`} component={() => <ListEmployees  {...props} />} />
          <Route exact path={`${props.match.path}/employees/new`} component={() => <FormEmployee  {...props} />} />
        </Switch>
      </Router> */}
    </Container>
  )
}

export default Main
