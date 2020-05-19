import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerBody = styled.div`
  flex: 1;
  padding: 30px;
  @media (max-width: 668px) {
    padding: 30px 10px;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-self: stretch;
  @media (max-width: 668px) {
    max-width: 100%;
  }
`;
