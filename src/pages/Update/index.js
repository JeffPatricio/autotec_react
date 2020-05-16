import React, { useState } from 'react';
import srcLogo from '../../assets/logo.png'
import { Container, Form, Logo, Error, Input, Label, Submit } from './styles';

const Update = () => {

  const [password, setPassword] = useState(false);
  const [error, setError] = useState('A senha deve conter no mínimo 6 caracteres');
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
        <Label>Atualizar senha</Label>
        <Input type='password' placeholder='Nova Senha' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <Submit onClick={submitUpdade}>
          Atualizar
        </Submit>
      </Form>
    </Container>
  )
}

export default Update;