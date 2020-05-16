import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerBody = styled.div`
  flex: 1;
  padding: 30px;
  flex-direction: column;
  overflow: auto;
`;

export const ContainerOptions = styled.div`
  display: flex;
  align-self: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 30px;
`;

export const FormRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

