import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import ListProducts from '../../../components/ListProducts';
import FormProduct from '../../../components/Forms/Product';

const Employees = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={`${match.path}/new`} component={(props) => <FormProduct {...props} />} />
      <Route exact path={`${match.path}/`} component={(props) => <ListProducts {...props} />} />
    </Fragment>
  )
}

export default Employees
