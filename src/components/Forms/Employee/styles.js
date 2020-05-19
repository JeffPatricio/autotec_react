import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 668px) {
    padding: 20px 10px;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

