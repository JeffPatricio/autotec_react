import React, { useState, useContext } from 'react';
import { postApi } from '../../services';
import { AppContext } from '../../App';
import Loading from '../../components/Loading';
import srcLogo from '../../assets/logo.png';
import { Container, Form, Logo, Input, Submit, MaskInput } from './styles';
import Toast from '../../components/Toast';

const Login = () => {

  const appConfig = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState('76621002009');
  const [password, setPassword] = useState('123456');

  const submitLogin = async (e) => {
    e.preventDefault();
    if (!loading) {
      try {
        setLoading(true);
        if (!cpf || !password || cpf.length < 11) {
          setLoading(false);
          return Toast('CPF ou senha inválidos', 'error');
        }
        postApi('/session', { cpf, password }).then((res) => {
          if (!res.success) {
            setLoading(false);
            return Toast(res.message, 'error');
          }
          setLoading(false);
          sessionStorage.setItem('tokenAccess', res.token);
          appConfig.setAuthUser({ ...res.user, authenticated: true });
        })
      } catch (e) {
        Toast(e.toString(), 'error');
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Form>
        <Logo src={srcLogo} />
        <MaskInput mask="999.999.999-99" type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.currentTarget.value.replace(/\D/g, ''))} />
        <Input type='password' placeholder='Senha' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <Submit onClick={submitLogin}>
          {(loading) && <Loading width='25px' />}
          {(!loading) && 'Entrar'}
        </Submit>
      </Form>
    </Container>
  )
}

export default Login;