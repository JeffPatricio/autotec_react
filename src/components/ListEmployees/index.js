import React, { useState } from 'react';
import Header from '../Header';
import InputSearch from '../InputSearch';
import Button from '../Button';
import { Container, ContainerBody, ContainerOptions } from './styles';

const ListEmployees = (props) => {

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
          <Button
            type='new'
            style={{ marginLeft: '20px' }}
            onClick={() => props.history.push('/main/employees/new')}
          />
        </ContainerOptions>
      </ContainerBody>
    </Container>
  )
}

export default ListEmployees