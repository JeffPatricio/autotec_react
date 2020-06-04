import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import baselinePlus from '@iconify/icons-ic/baseline-plus';
import baselineRemove from '@iconify/icons-ic/baseline-remove';
import Header from '../Header';
import InputSearch from '../InputSearch';
import { Container, ContainerBody, ContainerOptions, TableStock, Td, Tr, ButtonTable } from './styles';

const ListStock = ({ match }) => {

  const isMobile = window.screen.width <= 678;
  const [search, setSearch] = useState('');
  const [stock, setStock] = useState([
    {
      name: 'Amortecedor',
      unMed: 'PC',
      category: 'Acessórios',
      qtd: 12
    },
    {
      name: 'Bucha',
      unMed: 'PC',
      category: 'Acessórios',
      qtd: 12
    },
    {
      name: 'Vidro',
      unMed: 'PC',
      category: 'Acessórios',
      qtd: 12
    },
    {
      name: 'Banco',
      unMed: 'PC',
      category: 'Acessórios',
      qtd: 12
    },
    {
      name: 'Graxa',
      unMed: 'KG',
      category: 'Acessórios',
      qtd: 12
    },
    {
      name: 'Lanterna traseira',
      unMed: 'PC',
      category: 'Acessórios',
      qtd: 12
    },
  ]);

  return (
    <Container>
      <Header title='Estoque' />
      <ContainerBody>
        <ContainerOptions>
          <InputSearch
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder={isMobile ? 'Buscar pelo nome ou EAN...' : 'Digite o nome ou o código EAN do produto....'}
          />
        </ContainerOptions>
        <TableStock>
          <Tr head={true}>
            <Td head={true}>Nome</Td>
            <Td head={true} style={{ textAlign: 'center' }}>Qtd</Td>
            {
              (!isMobile) &&
              <Fragment>
                <Td head={true} style={{ textAlign: 'center' }}>Un. Medida</Td>
                <Td head={true} style={{ textAlign: 'center' }}>Categoria</Td>
              </Fragment>
            }
            <Td head={true} style={{ textAlign: 'center' }}>Ações</Td>
          </Tr>
          {
            stock.map((product, index) => (
              <Tr key={index}>
                <Td>{product.name}</Td>
                <Td style={{ textAlign: 'center' }}>{product.qtd}</Td>
                {
                  (!isMobile) &&
                  <Fragment>
                    <Td style={{ textAlign: 'center' }}>{product.unMed}</Td>
                    <Td style={{ textAlign: 'center' }}>{product.category}</Td>
                  </Fragment>
                }
                <Td style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to={`${match.url}/add`}>
                    <ButtonTable title='Editar' style={{ backgroundColor: '#68DC89' }}>
                      <Icon icon={baselinePlus} width={'20px'} color='#333' />
                    </ButtonTable>
                  </Link>
                  <Link to={`${match.url}/remove`}>
                    <ButtonTable title='Excluir' delete={true} style={{ backgroundColor: '#DE6464' }}>
                      <Icon icon={baselineRemove} width={'20px'} color='#333' />
                    </ButtonTable>
                  </Link>
                </Td>
              </Tr>
            ))
          }
        </TableStock>
      </ContainerBody>
    </Container>
  )
}

export default ListStock
