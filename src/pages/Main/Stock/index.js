import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListStock from '../../../components/ListStock';
import FormStock from '../../../components/Forms/Stock';

const Employees = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}/add`} component={(props) => <FormStock {...props} add={true} />} />
      <Route exact path={`${match.path}/remove`} component={(props) => <FormStock {...props} add={false} />} />
      <Route exact path={`${match.path}/`} component={(props) => <ListStock {...props} />} />
    </Fragment>
  )
}

export default Employees
