import React, { useState, useContext } from 'react';
import { AppContext } from '../../../App';
import { Icon } from '@iconify/react';
import baselineExpandLess from '@iconify/icons-ic/baseline-expand-less';
import sharpExpandMore from '@iconify/icons-ic/sharp-expand-more';
import menuOutlined from '@iconify/icons-ant-design/menu-outlined';
import imgMecanic from '../../../assets/mecanico.png';
import {
  Container, ContainerHeader, ContainerText, Info, Title, ContainerBody, ContainerIndicatorGeneral, ContainerIndicators, TitleIndicator,
  ContainerInfoIndicator, NumberIndicator, ProductIndicator, Ilustration, ContainerIcon
} from './styles';

const Home = () => {

  const appData = useContext(AppContext);
  const isMobile = window.screen.width <= 678;
  const [lowStock] = useState([
    {
      name: 'Amortecedor',
      qtd: 10
    },
    {
      name: 'Parafuso',
      qtd: 27
    },
    {
      name: 'Correia',
      qtd: 5
    },
    {
      name: 'Câmbio',
      qtd: 22
    }
  ]);
  const [outStock] = useState(8);
  const [stockEntry] = useState(13);

  return (
    <Container>
      <ContainerHeader>
        {
          (isMobile) &&
          <ContainerIcon>
            <Icon icon={menuOutlined} width={'25px'} color='#FFF' onClick={() => appData.setMenuMobileActive(true)} />
          </ContainerIcon>
        }
        <ContainerText>
          <Title>Bem-vindo ao Autotec</Title>
          <Info>Organize sua empresa com otimização de tempo e qualidade no controle do seu estoque</Info>
        </ContainerText>
        <Ilustration src={imgMecanic} />
      </ContainerHeader>
      <ContainerBody>
        <ContainerIndicators>
          <TitleIndicator>Produtos com estoque baixo</TitleIndicator>
          {
            lowStock.map((product, index) => (
              <ContainerInfoIndicator key={index}>
                <ProductIndicator>{product.name}</ProductIndicator>
                <NumberIndicator>
                  {product.qtd}
                  <Icon icon={sharpExpandMore} color='#FF0000' width={30} />
                </NumberIndicator>
              </ContainerInfoIndicator>
            ))
          }
        </ContainerIndicators>
        <ContainerIndicatorGeneral>
          <ContainerIndicators marginRight={true}>
            <TitleIndicator>Entradas de estoque</TitleIndicator>
            <ContainerInfoIndicator>
              <ProductIndicator>Entradas</ProductIndicator>
              <NumberIndicator>
                {stockEntry}
                <Icon icon={baselineExpandLess} color='#00C853' width={30} />
              </NumberIndicator>
            </ContainerInfoIndicator>
          </ContainerIndicators>
          <ContainerIndicators>
            <TitleIndicator>Saídas de estoque</TitleIndicator>
            <ContainerInfoIndicator>
              <ProductIndicator>Saídas</ProductIndicator>
              <NumberIndicator>
                {outStock}
                <Icon icon={sharpExpandMore} color='#FF0000' width={30} />
              </NumberIndicator>
            </ContainerInfoIndicator>
          </ContainerIndicators>
        </ContainerIndicatorGeneral>
      </ContainerBody>
    </Container>
  )
}

export default Home;