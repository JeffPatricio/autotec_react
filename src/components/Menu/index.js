import React, { useState, useContext, useCallback } from 'react';
import { NavLink } from "react-router-dom";
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

const Menu = ({ location, match }) => {

  const appData = useContext(AppContext);
  const active = useCallback((item) => location.pathname.indexOf(item) > -1 ? '#FFF' : '#333', [location]);
  const [viewerVisible, setViewerVisible] = useState(false);

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

        <NavLink to={`${match.url}/home`}>
          <ContainerItem active={active('home') === '#FFF'}>
            <Icon icon={homeIcon} width={'25px'} color={active('home')} />
            <TitleItem color={active('home')}>Início</TitleItem>
          </ContainerItem>
        </NavLink>

        <NavLink to={`${match.url}/profile`}>
          <ContainerItem active={active('profile') === '#FFF'}>
            <Icon icon={genderNeutralUser} width={'25px'} color={active('profile')} />
            <TitleItem color={active('profile')}>Meu Perfil</TitleItem>
          </ContainerItem>
        </NavLink>

        <NavLink to={`${match.url}/products`}>
          <ContainerItem active={active('products') === '#FFF'}>
            <Icon icon={boxIcon} width={'25px'} color={active('products')} />
            <TitleItem color={active('products')}>Produtos</TitleItem>
          </ContainerItem>
        </NavLink>

        <NavLink to={`${match.url}/stock`}>
          <ContainerItem active={active('stock') === '#FFF'}>
            <Icon icon={shoppingCart} width={'25px'} color={active('stock')} />
            <TitleItem color={active('stock')}>Estoque</TitleItem>
          </ContainerItem>
        </NavLink>

        <NavLink to={`${match.url}/employees`}>
          <ContainerItem active={active('employees') === '#FFF'}>
            <Icon icon={groupIcon} width={'25px'} color={active('employees')} />
            <TitleItem color={active('employees')}>Funcionários</TitleItem>
          </ContainerItem>
        </NavLink>

        <NavLink to={`${match.url}/reports`}>
          <ContainerItem active={active('reports') === '#FFF'}>
            <Icon icon={barChart} width={'25px'} color={active('reports')} />
            <TitleItem color={active('reports')}>Relatórios</TitleItem>
          </ContainerItem>
        </NavLink>

        <ContainerItem
          active={false}
          onClick={() => {
            sessionStorage.setItem('tokenAccess', '');
            appData.setAuthUser({ authenticated: false })
          }}
        >
          <Icon icon={importIcon} width={'25px'} />
          <TitleItem>Sair</TitleItem>
        </ContainerItem>
      </ContainerItems>
      <Logo src={srcLogo} onClick={() => window.location.reload(false)} />
    </Container>
  )
}

export default Menu