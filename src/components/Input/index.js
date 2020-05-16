import React from 'react';
import { Container, InputText, Label, InputMask } from './styles';

const Input = ({ label, width, mask = null, ...propsInput }) => {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      {
        (mask) && <InputMask {...propsInput} mask={mask} />
      }
      {
        (!mask) && <InputText {...propsInput} />
      }
    </Container>
  )
}

export default Input