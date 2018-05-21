import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';


const ButtonLink = ({ className='', children, to='/' }) => {
  return (
    <Link className={ `${className} ${styles.link}` } to={ to }>{ children }</Link>
  );
}


export default ButtonLink;
