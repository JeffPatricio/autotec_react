import styled from 'styled-components';
import Mask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${props => props.width};
  padding-right: 10px;
  padding-bottom: 10px;
  @media (max-width: 668px) {
    width: 100% !important;
    padding-bottom: 20px;
    padding-right: 0px;
  }
`;

export const Label = styled.label`
  color: #333;
  font-size: 16px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const InputText = styled.input`
  display: flex;
  flex: 1;
  align-self: stretch;
  border: 1px solid #DDD;
  border-radius: 6px;
  padding: 0px 10px;
  max-height: 40px;
  min-height: 40px;
  font-size: 16px;
  color: #333;
  &:focus, &:hover{
    box-shadow: 0px 0px 3px #DDD;
  }
`;

export const InputMask = styled(Mask)`
  display: flex;
  flex: 1;
  align-self: stretch;
  border: 1px solid #DDD;
  border-radius: 6px;
  padding: 0px 10px;
  max-height: 40px;
  min-height: 40px;
  font-size: 16px;
  color: #333;
  &:focus, &:hover{
    box-shadow: 0px 0px 3px #DDD;
  }
`;
