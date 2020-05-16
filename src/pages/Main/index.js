import React from 'react';
import Menu from '../../components/Menu';
import ListEmployees from '../../components/ListEmployees';
import { Container } from './styles';

const Main = (props) => {
  return (
    <Container>
      <Menu {...props} />
      <ListEmployees />
    </Container>
  )
}

export default Main