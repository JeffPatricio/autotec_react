import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ReportsComponent from '../../../components/Reports';

const Reports = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}/`} component={(props) => <ReportsComponent {...props} />} />
    </Fragment>
  )
}

export default Reports
