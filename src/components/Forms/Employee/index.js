import React from 'react';
import Header from '../../Header';
import Button from '../../Button';
import Input from '../../Input';
import { Container, ContainerBody, ContainerOptions, Form, FormRow } from './styles';

const Employee = ({ history }) => {
  return (
    <Container>
      <Header title='Adicionar Funcionário' />
      <ContainerBody>
        <ContainerOptions>
          <Button type='default' text='Voltar' onClick={() => history.goBack()} />
          <Button type='primary' text='Salvar' style={{ marginLeft: '20px' }} />
        </ContainerOptions>
        <Form>
          <Input type='text' label='Nome do Funcionário' width='60%' />
          <Input type='text' label='CPF' width='40%' mask='999.999.999-99' />
          <FormRow>
            <Input type='text' label='Telefone' width='30%' mask='(99) 9 9999-9999' />
            <Input type='text' label='Celular' width='30%' mask='(99) 9999-9999' />
          </FormRow>
          <Input type='text' label='CEP' width='33%' mask='99999-999' />
          <Input type='text' label='Rua' width='33%' />
          <Input type='text' label='Bairro' width='34%' />
          <Input type='text' label='Cidade' width='40%' />
          <Input type='text' label='UF' width='20%' maxLength={2} />
        </Form>
      </ContainerBody>
    </Container>
  )
}

export default Employee