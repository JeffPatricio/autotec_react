import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import baselinePlus from '@iconify/icons-ic/baseline-plus';
import baselineRemove from '@iconify/icons-ic/baseline-remove';
import Header from '../../Header';
import Button from '../../Button';
import Input from '../../Input';
import { Container, ContainerBody, ContainerOptions, Form, FormRow } from './styles';

const Stock = ({ history, add }) => {

  return (
    <Container>
      <Header title={add ? 'Adicionar Entrada de Estoque' : 'Adicionar Saída de Estoque'} />
      <ContainerBody>
        <Form>
          <FormRow style={{ alignItems: 'center' }}>
            <Input type='text' label='Estoque atual' width='25%' disabled={true} />
            {
              (add) &&
              <Fragment>
                <Icon icon={baselinePlus} width={'30px'} color='#68DC89' style={{ marginRight: '5px', marginTop: '10px' }} />
                <Input type='text' label='Entrada de estoque' width='25%' style={{ border: '2px solid #68DC89' }} />
              </Fragment>
            }
            {
              (!add) &&
              <Fragment>
                <Icon icon={baselineRemove} width={'20px'} color='#DE6464' style={{ marginRight: '5px', marginTop: '10px' }} />
                <Input type='text' label='Entrada de estoque' width='25%' style={{ border: '2px solid #DE6464' }} />
              </Fragment>
            }
          </FormRow>
          <Input type='text' label='Nome do produto' width='50%' disabled={true} />
          <Input type='text' label='Categoria' width='30%' disabled={true} />
          <Input type='number' label='Qtd. Min' width='20%' disabled={true} />
          <Input type='number' label='Código Ean' width='40%' disabled={true} />
          <Input type='text' label='Unidade de Medida' width='30%' disabled={true} />
          <Input type='text' label='Fornecedor' width='30%' disabled={true} />
        </Form>
        <ContainerOptions>
          <Button type='default' text='Voltar' onClick={() => history.goBack()} />
          <Button type='primary' text='Salvar' style={{ marginLeft: '20px' }} />
        </ContainerOptions>
      </ContainerBody>
    </Container>
  )
}

export default Stock