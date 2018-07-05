import React from 'react';
import Link from 'gatsby-link';


const IconAlert = props => {
  const { className='', fill } = props;

  return (
    <svg className={ className } width="20" height="20" viewBox="0 0 20.9 20.9">
      <circle cx="10.05" cy="10.05" r="9.55" fill="none" stroke="#ff671f" stroke-miterlimit="10"/>
      <circle cx="10.06" cy="10.05" r="8.24" fill="#ff671f"/>
      <path d="M10.05,13.77a1.3,1.3,0,1,1-1.29,1.3A1.3,1.3,0,0,1,10.05,13.77Zm-1.2-10h2.39l-.34,8.64H9.21Z" fill="#fff"/>
    </svg>
  );
};


export default IconAlert;
