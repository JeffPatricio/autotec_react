import React, { useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import groupIcon from '@iconify/icons-icons8/group';
import importIcon from '@iconify/icons-icons8/import';
import genderNeutralUser from '@iconify/icons-icons8/gender-neutral-user';
import boxIcon from '@iconify/icons-icons8/box';
import homeIcon from '@iconify/icons-icons8/home';
import barChart from '@iconify/icons-icons8/bar-chart';
import shoppingCart from '@iconify/icons-icons8/shopping-cart';
import Viewer from 'react-viewer';
import { AppContext } from '../../App';
import srcLogo from '../../assets/logo.png';
import { Container, ContainerProfile, Profile, Name, Detail, ContainerItems, Logo, ContainerItem, TitleItem } from './styles';

const Menu = ({ history }) => {

  const appData = useContext(AppContext);
  const [viewerVisible, setViewerVisible] = useState(false);
  const menuActive = history.location.pathname

  return (
    <Container>
      <ContainerProfile>
        <Profile src={appData.authUser.photo} onClick={() => setViewerVisible(true)} />
        <Name>{appData.authUser.name}</Name>
        <Viewer
          noFooter={true}
          noToolbar={true}
          zoomable={false}
          drag={false}
          visible={viewerVisible}
          onClose={() => setViewerVisible(false)}
          images={[{ src: appData.authUser.photo, alt: 'Imagem de Perfil' }]}
        />
      </ContainerProfile>
      <Detail />
      <ContainerItems className='items-menu'>
        <ContainerItem>
          <Icon icon={homeIcon} width={'25px'} />
          <TitleItem>Início</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon icon={genderNeutralUser} width={'25px'} />
          <TitleItem>Meu Perfil</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon icon={boxIcon} width={'25px'} />
          <TitleItem>Produtos</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon icon={shoppingCart} width={'25px'} />
          <TitleItem>Estoque</TitleItem>
        </ContainerItem>
        <ContainerItem active={menuActive.indexOf('employees') > -1} onClick={() => history.push('/main/employees')}>
          <Icon icon={groupIcon} width={'25px'} color={menuActive.indexOf('employees') > -1 ? '#FFF' : '#333'} />
          <TitleItem color={menuActive.indexOf('employees') > -1 ? '#FFF' : '#333'}>Funcionários</TitleItem>
        </ContainerItem>
        <ContainerItem>
          <Icon icon={barChart} width={'25px'} />
          <TitleItem>Relatórios</TitleItem>
        </ContainerItem>
        <ContainerItem active={false} onClick={() => {
          sessionStorage.setItem('tokenAccess', '');
          appData.setAuthUser({ authenticated: false })
        }}>
          <Icon icon={importIcon} width={'25px'} />
          <TitleItem>Sair</TitleItem>
        </ContainerItem>
      </ContainerItems>
      <Logo src={srcLogo} onClick={() => window.location.reload(false)} />
    </Container>
  )
}

export default Menu