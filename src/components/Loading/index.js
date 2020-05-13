import React from 'react';
import srcLogo from '../../assets/loading.svg';

const Loading = ({ styles = {} }) => {
  return (
    <img src={srcLogo} style={{ ...styles }} />
  )
}

export default Loading