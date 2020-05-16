import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListEmployees from '../../../components/ListEmployees';
import FormEmployee from '../../../components/Forms/Employee';

const Employees = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}/new`} component={(props) => <FormEmployee {...props} />} />
      <Route exact path={`${match.path}/`} component={(props) => <ListEmployees {...props} />} />
    </Fragment>
  )
}

export default Employees
