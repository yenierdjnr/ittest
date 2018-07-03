import React from 'react';
import Link from 'gatsby-link';


const IconCheck = (props) => {
  const { className='', fill='#FFFFFFF' } = props;

  return (
    <svg width="21" height="19" viewBox="0 0 21 19">
      <polygon fill={ fill } fillRule="evenodd" points="144.652 0 142.632 2.511 132.983 14.502 128.47 9.67 128.205 9.386 127.102 10.362 126 11.34 133.151 19 147 1.792 145.826 .896" transform="translate(-126)"/>
    </svg>
  );
};


export default IconCheck;
