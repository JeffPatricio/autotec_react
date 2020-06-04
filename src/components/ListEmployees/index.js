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
import { Container, ContainerBody, ContainerOptions, TableEmployees, Td, Tr, ButtonTable, ContainerModal, Modal, ModalIcon, ModalTitle, ModalInfo } from './styles';

const ListEmployees = ({ match }) => {

  const isMobile = window.screen.width <= 678;
  const [search, setSearch] = useState('');
  const [viewEmployee, setViewEmployee] = useState(false);
  const [employees] = useState([
    {
      name: 'Bruno Martins',
      phone: '(62) 993455654',
      cpf: '000.000.000-00',
      address: 'Avenida Recife das Laranjas com quebra de linha pra poder corrigir essa bosta nesse layout cocozão de teta'
    },
    {
      name: 'João Pedro',
      phone: '(62) 993455798',
      cpf: '730.330.040-00',
      address: 'Avenida Movimentada'
    },
    {
      name: 'Bruno Martins',
      phone: '(62) 993823654',
      cpf: '276.923.721-00',
      address: 'Avenida Alibaba'
    },
    {
      name: 'Bruno Martins',
      phone: '(62) 993455654',
      cpf: '000.000.000-00',
      address: 'Avenida Recife das Laranjas com quebra de linha pra poder corrigir essa bosta nesse layout cocozão de teta'
    },
    {
      name: 'João Pedro',
      phone: '(62) 993455798',
      cpf: '730.330.040-00',
      address: 'Avenida Movimentada'
    },
    {
      name: 'Bruno Martins',
      phone: '(62) 993823654',
      cpf: '276.923.721-00',
      address: 'Avenida Alibaba'
    },
    {
      name: 'Bruno Martins',
      phone: '(62) 993455654',
      cpf: '000.000.000-00',
      address: 'Avenida Recife das Laranjas com quebra de linha pra poder corrigir essa bosta nesse layout cocozão de teta'
    },
    {
      name: 'João Pedro',
      phone: '(62) 993455798',
      cpf: '730.330.040-00',
      address: 'Avenida Movimentada'
    },
    {
      name: 'Bruno Martins',
      phone: '(62) 993823654',
      cpf: '276.923.721-00',
      address: 'Avenida Alibaba'
    },
  ]);

  return (
    <Container>
      {
        (viewEmployee) &&
        <ContainerModal onClick={() => setViewEmployee(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalIcon>
              <Icon icon={baselineClose} width={'30px'} color='#333' style={{ cursor: 'pointer' }} onClick={() => setViewEmployee(false)} />
            </ModalIcon>
            <ModalTitle>(Nome do Funcionário)</ModalTitle>
            <ModalInfo>
              <Input type='text' label='Nome do Funcionário' width='100%' disabled={true} />
              <Input type='text' label='CPF' width='50%' disabled={true} />
              <Input type='text' label='Telefone' width='50%' disabled={true} />
              <Input type='text' label='Celular' width='50%' disabled={true} />
              <Input type='text' label='CEP' width='50%' disabled={true} />
              <Input type='text' label='Rua' width='50%' disabled={true} />
              <Input type='text' label='Bairro' width='50%' disabled={true} />
              <Input type='text' label='Cidade' width='50%' disabled={true} />
              <Input type='text' label='UF' width='50%' disabled={true} />
            </ModalInfo>
          </Modal>
        </ContainerModal>
      }
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
        <TableEmployees>
          <Tr head={true}>
            <Td head={true}>Nome do funcionário</Td>
            {
              (!isMobile) &&
              <Fragment>
                <Td head={true} style={{ textAlign: 'center' }}>Telefone</Td>
                <Td head={true} style={{ textAlign: 'center' }}>CPF</Td>
                <Td head={true} style={{ textAlign: 'center' }}>Endereço</Td>
              </Fragment>
            }
            <Td head={true} style={{ textAlign: 'center' }}>Ações</Td>
          </Tr>
          {
            employees.map((employee, index) => (
              <Tr key={index} onClick={() => setViewEmployee(true)}>
                <Td>{employee.name}</Td>
                {
                  (!isMobile) &&
                  <Fragment>
                    <Td style={{ textAlign: 'center' }}>{employee.phone}</Td>
                    <Td style={{ textAlign: 'center' }}>{employee.cpf}</Td>
                    <Td style={{ textAlign: 'center' }}>{employee.address}</Td>
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
        </TableEmployees>
      </ContainerBody>
    </Container>
  )
}

export default ListEmployees
