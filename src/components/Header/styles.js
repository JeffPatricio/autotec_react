import styled from 'styled-components';

export const Container = styled.div`
  align-self: stretch;
  background: #EEE;
  box-shadow: 0px 0px 10px #999;
  padding: 20px 30px;
  align-items: center;
  @media (max-width: 668px) {
    display: flex;
    background: #3EA2FF;
    flex-direction: row;
    padding: 20px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #333;
  font-weight: 500;
  @media (max-width: 668px) {
    color: #FFF;
    margin-left: 20px;
  }
`;
