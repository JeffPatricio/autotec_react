import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import InputSearch from '../InputSearch';
import Button from '../Button';
import { Container, ContainerBody, ContainerOptions } from './styles';

const ListEmployees = ({ match }) => {

  const [search, setSearch] = useState('');

  return (
    <Container>
      <Header title='Funcionários' />
      <ContainerBody>
        <ContainerOptions>
          <InputSearch
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder='Digite o nome ou o CPF do funcionário...'
          />
          <Link to={`${match.url}/new`}>
            <Button type='new' style={{ marginLeft: '20px' }} />
          </Link>
        </ContainerOptions>
      </ContainerBody>
    </Container>
  )
}

export default ListEmployees
