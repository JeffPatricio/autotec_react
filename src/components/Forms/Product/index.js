import React from 'react';
import Header from '../../Header';
import Button from '../../Button';
import Input from '../../Input';
import { Container, ContainerBody, ContainerOptions, Form } from './styles';

const Product = ({ history }) => {
  return (
    <Container>
      <Header title='Adicionar Produto' />
      <ContainerBody>
        <Form>
          <Input type='text' label='Nome do produto' width='60%' />
          <Input type='text' label='Categoria' width='40%' />
          <Input type='number' label='Qtd. min. de estoque' width='20%' />
          <Input type='number' label='Código Ean' width='40%' />
          <Input type='text' label='Unidade de Medida' width='40%' />
          <Input type='text' label='Fornecedor' width='40%' />
          <Input type='text' label='Valor de compra' width='20%' />
          <Input type='text' label='Valor de venda' width='20%' />
          <Input type='text' label='IPI' width='20%' />
        </Form>
        <ContainerOptions>
          <Button type='default' text='Voltar' onClick={() => history.goBack()} />
          <Button type='primary' text='Salvar' style={{ marginLeft: '20px' }} />
        </ContainerOptions>
      </ContainerBody>
    </Container>
  )
}

export default Product