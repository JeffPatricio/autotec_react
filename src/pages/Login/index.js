import React, { useState } from 'react';
import Loading from '../../components/Loading';
import srcLogo from '../../assets/logo.png';
import { Container, Form, Logo, Input, Submit, Error, MaskInput } from './styles';

const Login = () => {

  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('CPF ou senha inválidos');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!loading) {
      try {
        setLoading(true);
        const cpfFormated = cpf.replace(/\D/g, '');
        if (!cpf || !password || cpfFormated.length < 14) return setShowError(true);
        if (cpfFormated !== '11111111111' && password !== '12345') return setShowError(true);
      } catch (e) {
        console.log('Error processing login: ', e.toString());
        setError(e.toString());
        setShowError(true);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Form>
        <Logo src={srcLogo} />
        {
          (showError) &&
          <Error>{error}</Error>
        }
        <MaskInput mask="999.999.999-99" type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.currentTarget.value)} />
        <Input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <Submit onClick={submitLogin}>
          {
            (loading) && <Loading styles={{ width: '25px' }} />
          }
          {
            (!loading) && 'Entrar'
          }
        </Submit>
      </Form>
    </Container>
  )
}

export default Login;