import React from 'react';
import Link from 'gatsby-link';


const IconCaret = (props) => {
  const { className='', fill } = props;

  return (
    <svg className={ className } height="14" viewBox="0 0 37 18.68">
      <polyline points="3 1 18.5 16.68 34 1" fill="none" stroke="#181845" strokeWidth="4"/>
    </svg>
  );
};


export default IconCaret;
