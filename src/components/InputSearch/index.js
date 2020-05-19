import React from 'react';
import { Icon } from '@iconify/react';
import searchIcon from '@iconify/icons-icons8/search';
import { Container, Input } from './styles';

const InputSearch = (props) => {
  return (
    <Container>
      <Icon icon={searchIcon} width={'30px'} color='#DDD' style={{ transform: 'scaleX(-1)' }} />
      <Input {...props} />
    </Container>
  )
}

export default InputSearch