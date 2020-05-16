import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 0; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #EEE;
`;

export const Logo = styled.img`
  width: 150px;
  animation: ${opacity} 1.5s linear infinite;
`;
