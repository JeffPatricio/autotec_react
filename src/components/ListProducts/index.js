import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import outlineEdit from '@iconify/icons-ic/outline-edit';
import baselineDeleteOutline from '@iconify/icons-ic/baseline-delete-outline';
import baselineClose from '@iconify/icons-ic/baseline-close';
import Header from '../Header';
import InputSearch from '../InputSearch';
import Button from '../Button';
import Input from '../Input';
import { Container, ContainerBody, ContainerOptions, TableProducts, Td, Tr, ButtonTable, ContainerModal, Modal, ModalIcon, ModalTitle, ModalInfo, ModalRow } from './styles';

const ListProducts = ({ match }) => {

  const isMobile = window.screen.width <= 678;
  const [search, setSearch] = useState('');
  const [viewProduct, setViewProduct] = useState(false);
  const [products, setProducts] = useState([
    {
      name: 'Amortecedor',
      unMed: 'PC',
      category: 'Acessórios'
    },
    {
      name: 'Bucha',
      unMed: 'PC',
      category: 'Acessórios'
    },
    {
      name: 'Vidro',
      unMed: 'PC',
      category: 'Acessórios'
    },
    {
      name: 'Banco',
      unMed: 'PC',
      category: 'Acessórios'
    },
    {
      name: 'Graxa',
      unMed: 'KG',
      category: 'Acessórios'
    },
    {
      name: 'Lanterna traseira',
      unMed: 'PC',
      category: 'Acessórios'
    },
  ]);

  return (
    <Container>
      {
        (viewProduct) &&
        <ContainerModal onClick={() => setViewProduct(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalIcon>
              <Icon icon={baselineClose} width={'30px'} color='#333' style={{ cursor: 'pointer' }} onClick={() => setViewProduct(false)} />
            </ModalIcon>
            <ModalTitle>(Nome do Produto)</ModalTitle>
            <ModalInfo>
              <Input type='text' label='Nome do produto' width='70%' disabled={true} />
              <Input type='number' label='Qtd. min. de estoque' width='30%' disabled={true} />
              <Input type='text' label='Categoria' width='50%' disabled={true} />
              <Input type='number' label='Código Ean' width='50%' disabled={true} />
              <Input type='text' label='Unidade de Medida' width='50%' disabled={true} />
              <Input type='text' label='Fornecedor' width='50%' disabled={true} />
              <Input type='text' label='Valor de compra' width='33.33%' disabled={true} />
              <Input type='text' label='Valor de venda' width='33.33%' disabled={true} />
              <Input type='text' label='IPI' width='33.33%' disabled={true} />
            </ModalInfo>
          </Modal>
        </ContainerModal>
      }
      <Header title='Produtos' />
      <ContainerBody>
        <ContainerOptions>
          <InputSearch
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
            placeholder={isMobile ? 'Buscar pelo nome ou EAN...' : 'Digite o nome ou o código EAN do produto....'}
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
                  boxShadow: '2px 2px 1px #999',
                  zIndex: 3,
                  maxHeight: '100px'
                }}
              >
                <Icon icon={plusOutlined} width={'40px'} color='#FFF' />
              </Button>
            </Link>
          }
        </ContainerOptions>
        <TableProducts>
          <Tr head={true}>
            <Td head={true}>Nome</Td>
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
            products.map((product, index) => (
              <Tr key={index} onClick={() => setViewProduct(true)}>
                <Td>{product.name}</Td>
                {
                  (!isMobile) &&
                  <Fragment>
                    <Td style={{ textAlign: 'center' }}>{product.unMed}</Td>
                    <Td style={{ textAlign: 'center' }}>{product.category}</Td>
                  </Fragment>
                }
                <Td style={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonTable title='Editar' onClick={(e) => e.stopPropagation()}>
                    <Icon icon={outlineEdit} width={'20px'} color='#FFF' />
                  </ButtonTable>
                  <ButtonTable title='Excluir' delete={true} onClick={(e) => e.stopPropagation()}>
                    <Icon icon={baselineDeleteOutline} width={'20px'} color='#FFF' />
                  </ButtonTable>
                </Td>
              </Tr>
            ))
          }
        </TableProducts>
      </ContainerBody>
    </Container>
  )
}

export default ListProducts
