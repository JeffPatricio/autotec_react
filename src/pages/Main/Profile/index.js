import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FormProfile from '../../../components/Forms/Profile';

const Employees = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}/`} component={(props) => <FormProfile {...props} />} />
    </Fragment>
  )
}

export default Employees
