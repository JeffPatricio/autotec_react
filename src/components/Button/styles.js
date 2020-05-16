import styled from 'styled-components';

export const ButtonComponent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 45px;
  border: 0;
  border-radius: 6px;
  padding: 10px 40px;
  font-size: 16px;
  color: #FFF;
  background: ${props => props.type === 'new' || props.type === 'primary' ? '#3EA2FF' : '#BBB'};
  cursor: pointer;
  &:hover{
    background-color: ${props => props.type === 'new' || props.type === 'primary' ? '#2796f7' : '#AAA'};;
  }
`;
