import React from 'react';

import '../../styles/toast.css';

const Toast = (props) => {
  return <div className='toast'>{props.message}</div>;
};

export default Toast;
