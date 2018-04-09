import React from 'react';
import Link from 'gatsby-link';


const IconArrowLeft = props => {
  const { className='', fill } = props;

  return (
    <svg className={ className } width="17" height="13"  viewBox="0 0 85.01 65.15">
    <path fill={ fill } fillRule="evenodd" d="M24.49,25.87H72.86c1.66,0,3.33,0,5,.08C82.1,26.15,85,28.2,85,32.6s-3,6.5-7.28,6.53c-13.15.09-26.3.06-39.45.07H25.12a17.43,17.43,0,0,0,2.8,3.32c3.7,3.6,7.45,7.14,11.2,10.68C42.06,56,42.94,59,40.27,62.42a6.82,6.82,0,0,1-10.21.8Q16,50.49,2.35,37.32c-3.32-3.19-3.07-6.74.4-10Q15.76,14.89,29,2.75c3.92-3.59,8-3.59,11-.39s2.48,6.19-1.72,10.3S29.74,20.86,24.49,25.87Z" transform="translate(0 0)" fill="#f4581c"/>
    </svg>
  );
};


export default IconArrowLeft;
