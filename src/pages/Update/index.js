import React, { useState } from 'react';

import srcLogo from '../../assets/logo.png'

import { Container, Form, Logo, Error, Input, Label, Submit } from './styles';

const Update = () => {

  const [passUpdate, setPassUpdate] = useState(false);
  const [error, setError] = useState('CPF ou senha inválidos');
  const [showError, setShowError] = useState(false);

  const submitUpdade = async (e) => {
    e.preventDefault();


  };

  return (
    <Container>
      <Form>
        <Logo src={srcLogo} />
        {
          (showError) &&
          <Error>{error}</Error>
        }
        <Label
        >Atualizar senha</Label>
        <Input
          type='password'
          placeholder='Nova Senha'
        />

        <Submit onClick={submitUpdade}>
          Atualizar
        </Submit>

      </Form>
    </Container>
  )
}

export default Update;