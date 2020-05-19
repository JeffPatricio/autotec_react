import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import Header from '../Header';
import InputSearch from '../InputSearch';
import Button from '../Button';
import { Container, ContainerBody, ContainerOptions } from './styles';

const ListEmployees = ({ match }) => {

  const isMobile = window.screen.width <= 678;
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Header title='Funcionários' />
      <ContainerBody>
        <ContainerOptions>
          <InputSearch
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder={isMobile ? 'Buscar pelo nome ou CPF...' : 'Digite o nome ou o CPF do funcionário...'}
          />
          {
            (!isMobile) &&
            <Link to={`${match.url}/new`}>
              <Button type='new' style={{ marginLeft: '20px' }} />
            </Link>
          }
          {
            (isMobile) &&
            <Link to={`${match.url}/new`}>
              <Button
                type='primary'
                style={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  padding: 10,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  boxShadow: '2px 2px 1px #999'
                }}
              >
                <Icon icon={plusOutlined} width={'40px'} color='#FFF' />
              </Button>
            </Link>
          }
        </ContainerOptions>
      </ContainerBody>
    </Container >
  )
}

export default ListEmployees
