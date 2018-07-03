import React from 'react';


const IconBadge = (props) => {
  const { className='', fill='#FFFFFF' } = props;

  return (
    <svg width="109.2" viewBox="0 0 218.4 218.4">
      <circle cx="109.2" cy="109.45" r="109.2" fill="#d8d8e5"/>
      <path d="M111,47.05l2-3.82c13.66,14.54,55.51-16,55.51-16l-5.63-9.37c-18.87,21.61-57.5,18.9-57.5,18.9S96.25,60.35,49.88,85.38c0,0,0,2.35.21,6.33l-.21.12s2,138.19,55.51,102.92C152,164,125.87,78.72,111,47Z" fill="#d8d8e5" stroke="#151746" strokeMiterlimit="10" strokeWidth="2"/>
      <path d="M167.47,28.54C158.82,34.23,123.92,56,114,42.89l-.13,0h0c-.71,1.68-10.86,24.4-55.47,48.48,0,0,2,138.19,55.51,102.92s54.6-165.69,54.6-165.69S168.72,27.72,167.47,28.54Z" fill="#fff" stroke="#151746" strokeMiterlimit="10" strokeWidth="3"/>
      <polygon points="113.91 87.17 122.74 102.73 142.47 94.65 128.19 118.97 131.56 139.72 113.91 139.19 96.26 160.1 99.63 135.46 85.35 127.63 105.08 112.92 113.91 87.17" fill="#d8d8e5"/>
    </svg>
  );
};


export default IconBadge;
