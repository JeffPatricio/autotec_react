import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import plusIcon from '@iconify/icons-icons8/plus';

import { ButtonComponent } from './styles';

const Button = ({ text, type = 'primary', ...props }) => {
  return (
    <ButtonComponent {...props} type={type}>
      {
        (type === 'new') &&
        <Fragment>
          <Icon icon={plusIcon} width={'20px'} color='#FFF' style={{ marginRight: '5px' }} />
          Novo
        </Fragment>
      }
      {
        (type !== 'new' && text) && `${text}`
      }
      {
        (type !== 'new' && !text) && { ...props.children }
      }
    </ButtonComponent>
  )
}

export default Button