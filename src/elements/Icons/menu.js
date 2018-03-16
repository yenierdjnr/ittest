import React from 'react';
import { darkBlue } from './styles.module.scss';


const IconMenu = props => {
  const { className='', fill=darkBlue, onClick='' } = props;

  return (
    <svg className={ className } width="30" height="20" viewBox="0 0 30 20" onClick={ onClick }>
      <g fill={ fill } fillRule="evenodd">
        <rect width="30" height="4" rx="1"/>
        <rect width="30" height="4" y="8" rx="1"/>
        <rect width="30" height="4" y="16" rx="1"/>
      </g>
    </svg>
  );
};


export default IconMenu ;
