import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Icon } from '@iconify/react';
import menuOutlined from '@iconify/icons-ant-design/menu-outlined';
import { Container, Title } from './styles';

const Header = ({ title }) => {

  const isMobile = window.screen.width <= 678;
  const appData = useContext(AppContext);

  return (
    <Container>
      {
        (isMobile) &&
        <Icon icon={menuOutlined} width={'20px'} color='#FFF' onClick={() => appData.setMenuMobileActive(true)} />
      }
      <Title>{title}</Title>
    </Container>
  )
}

export default Header