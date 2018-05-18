import React from 'react';


const IconSmiley = props => {
  const { className='', fill='#FFFFFF' } = props;

  return (
    <svg width="109.2" viewBox="0 0 218.4 218.4">
      <circle cx="109.2" cy="109.45" r="109.2" fill="#d8d8e5"/>
      <ellipse cx="104.95" cy="106.17" rx="92.84" ry="53.6" transform="translate(-39.47 143.98) rotate(-60)" fill="#d8d8e5" stroke="#151746" stroke-miterlimit="10" stroke-width="2"/>
      <ellipse cx="113.45" cy="112.23" rx="92.84" ry="53.6" transform="translate(-40.46 154.37) rotate(-60)" fill="#fff" stroke="#151746" stroke-miterlimit="10" stroke-width="3"/>
      <ellipse cx="96.78" cy="94.76" rx="11.55" ry="6.67" transform="translate(-33.68 131.2) rotate(-60)" fill="#151746"/>
      <ellipse cx="129.79" cy="75.71" rx="11.55" ry="6.67" transform="translate(-0.67 150.25) rotate(-60)" fill="#151746"/>
      <path d="M83.49,144.09s28.75,34.88,59.92-34.6C143.41,109.49,114.39,149,83.49,144.09Z" fill="#151746"/>
    </svg>
  );
};


export default IconSmiley;
