import React from 'react';
import Header from '../Header';
import { Container, ContainerBody, Ilustration, Title } from './styles';

const Reports = ({ match }) => {
  return (
    <Container>
      <Header title='Relatórios' />
      <ContainerBody>
        <Ilustration src={require('../../assets/man.png')} />
        <Title>Ops... Esta funcionalidade ainda está em desenvolvimento, por favor volte daqui alguns dias.</Title>
      </ContainerBody>
    </Container>
  )
}

export default Reports
