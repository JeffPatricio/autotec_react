import styled from 'styled-components';
import InputMask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #EEE;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  justify-content: center;
  @media (max-width: 668px) {
    width: 100%;
  }
  @media (min-width: 669px) and (max-width: 768px) {
    width: 60%;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Input = styled.input`
	background-color: #fff;
	border-radius: 6px;
	border: 1px solid #BBB;
	padding: 10px;
	height: 40px;
  width: 80%;
  margin-bottom: 5%;
  font-size: 15px;
  &:focus{
    box-shadow: 0px 0px 3px #BBB;
  }
`;

export const MaskInput = styled(InputMask)`
	background-color: #fff;
	border-radius: 6px;
	border: 1px solid #BBB;
	padding: 10px;
	height: 40px;
  width: 80%;
  margin-bottom: 5%;
  font-size: 15px;
  &:focus{
    box-shadow: 0px 0px 3px #BBB;
  }
`;

export const Submit = styled.button`
	background-color: #3EA2FF;
	color: #fff;
	border: 0;
  width: 60%;
  height: 40px;
	border-radius: 6px;
  margin-bottom: 5%;
  font-size: 15px;
	cursor: pointer;
  &:hover{
    background-color: #3E90FF;
  }
`;


export const Error = styled.p`
	color: #F00;
  font-size: 14px;
  text-align: center;
  margin-bottom: 3%;
`;