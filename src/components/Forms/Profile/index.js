import React, { useState, useContext } from 'react';
import Viewer from 'react-viewer';
import { AppContext } from '../../../App';
import Header from '../../Header';
import Button from '../../Button';
import Input from '../../Input';
import { Container, ContainerBody, ContainerPhoto, Photo, ChangePhoto, ContainerProfile, Form, FormRow, ContainerOptions } from './styles';

const Profile = () => {

  const appData = useContext(AppContext);
  const isMobile = window.screen.width <= 678;
  const [viewerVisible, setViewerVisible] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Header title='Meu Perfil' />
      <ContainerBody>
        <ContainerProfile>
          <ContainerPhoto>
            <Photo src={appData.authUser.photo} onClick={() => setViewerVisible(true)} />
            <ChangePhoto>Alterar foto</ChangePhoto>
            <Viewer
              noFooter={true}
              noToolbar={true}
              zoomable={false}
              drag={false}
              visible={viewerVisible}
              onClose={() => setViewerVisible(false)}
              images={[{ src: appData.authUser.photo, alt: 'Imagem de Perfil' }]}
            />
          </ContainerPhoto>
        </ContainerProfile>
        <Form>
          <FormRow>
            <Input type='text' label='Nome' width='60%' />
            <Input type='text' label='CPF' width='40%' mask='999.999.999-99' disabled={true} />
          </FormRow>
          <FormRow>
            <Input type='password' label='Senha atual' width='33.33%' />
            <Input type='password' label='Nova senha' width='33.33%' />
            <Input type='password' label='Confirmar nova senha' width='33.33%' />
          </FormRow>
        </Form>
        <ContainerOptions>
          <Button type='primary' text='Salvar' style={{ padding: isMobile ? '10px 100px' : '' }} />
        </ContainerOptions>
      </ContainerBody>
    </Container>
  )
}

export default Profile
