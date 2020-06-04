import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 30px;
  overflow: auto;
  @media (max-width: 668px) {
    padding: 30px 10px;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  align-self: stretch;
  @media (max-width: 668px) {
   align-items: center;
   justify-content: center;
  }
`;

export const ContainerPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  cursor: pointer;
  background: #EEE;
  background-image: url(${ props => props.src});
  background-size: cover;
  @media (max-width: 668px) {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
`;

export const ChangePhoto = styled.button`
  display: flex;
  margin-top: 10px;
  background: #999;
  border-radius: 6px;
  border: 0;
  padding: 5px 20px;
  font-size: 14px;
  color: #FFF;
  cursor: pointer;
  &:hover{
    background-color: #777;
  }
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

export const ContainerOptions = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 20px;
  padding-right: 10px;
  @media (max-width: 668px) {
    padding-right: 0px;
    align-self: center;
  }
`;

