import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerBody = styled.div`
  flex: 1;
  padding: 30px;
  overflow: auto;
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

export const TableEmployees = styled.table`
  margin-top: 30px;
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Tr = styled.tr`
  background: ${props => props.head ? '#FFF' : '#EEE'};
  margin-bottom: 20px;
  border: 0 solid #FFF;
  border-bottom-color: #FFF;
  border-bottom-width: ${props => props.head ? 0 : '10px'};
  cursor: pointer;
  &:hover{
    background: ${props => props.head ? '#FFF' : '#DFDFDF'};
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: 5px;
  border: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonTable = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  padding: 5px;
  height: 30px;
  max-height: 30px;
  font-size: 16px;
  color: #FFF;
  background: ${props => props.delete ? '#BBB' : '#3EA2FF'};
  margin: 0 3px;
  cursor: pointer;
  &:hover{
    background: ${props => props.delete ? '#AAA' : '#2796f7'};
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  position: fixed;
  align-self: center;
  top: 0;
  bottom: 0;
  z-index: 4;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  align-self: center;
  width: -webkit-fill-available;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 700px;
  background: #FFF;
  border-radius: 20px;
`;

export const ModalIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
`;

export const ModalTitle = styled.p`
  display: flex;
  align-self: center;
  color: #333;
  font-size: 22px;
  font-weight: 600;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

export const ModalRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
