import React from 'react';
import Link from 'gatsby-link';

import logoPath from 'Images/logo.svg';


const Logo = (props) => {
  const { className } = props;

  return (
    <div className={ className }>
      <Link to="/">
        <img src={ logoPath } alt="ITPro.tv Logo" width="154.71" height="50" />
      </Link>
    </div>
  );
}


export default Logo;