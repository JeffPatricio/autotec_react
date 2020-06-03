import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerHeader = styled.div`
  display: flex;
  background: #3EA2FF;
  padding: 30px 100px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 668px) {
    padding: 20px;
    box-shadow: 0px 0px 10px #333;
    z-index: 2;
    flex-direction: column;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-self: stretch;
`;

export const Title = styled.p`
  color: #FFF;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
  @media (max-width: 668px) {
   text-align: center;
   margin-top: 20px;
   font-size: 24px;
  }
`;

export const Info = styled.p`
  color: #FFF;
  font-size: 18px;
  font-weight: normal;
  @media (max-width: 668px) {
   text-align: center;
  font-size: 16px;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #EEEEEE;
  padding: 10px;
  overflow: auto;
  @media (max-width: 668px) {
    max-width: 100%;
    padding-top: 20px;
  }
`;

export const ContainerIndicators = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #FFF;
  padding: 20px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 2px 10px #999;
  margin-right: ${props => props.marginRight ? '10px' : 0};
  @media (max-width: 668px) {
    max-width: 100%;
    flex-direction: column;
    margin-right: 0px;
    margin-bottom: 15px;
  }
`;

export const ContainerIndicatorGeneral = styled.div`
  display: flex;
  align-self: stretch;
  margin-top: 10px;
  @media (max-width: 668px) {
    max-width: 100%;
    flex-direction: column;
    margin-top: 0px;
  }
`;

export const ContainerInfoIndicator = styled.div`
  display: flex;
  flex-direction: Column;
  margin-right: 20px;
  padding: 20px 30px 20px 30px;
  border-radius: 6px;
`;

export const ProductIndicator = styled.p`
  color: #333;
  font-size: 26px;
  font-weight: 500;
  @media (max-width: 668px) {
    font-size: 24px;
  }
`;

export const NumberIndicator = styled.p`
  color: #333;
  font-size: 42px;
  font-weight: 600;
  display: flex;
  align-items: center;
  @media (max-width: 668px) {
    font-size: 38px;
  }
`;

export const TitleIndicator = styled.p`
  color: #333;
  font-size: 14px;
  width: 100%;
  margin-bottom: 10px;
  @media (max-width: 668px) {
    font-size: 16px;
  }
`;

export const Ilustration = styled.img`
  width: 150px;
  @media (max-width: 668px) {
    display: none;
  }
`;