import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';


const Category = props => {
  const { className='', title, url } = props;

  return (
    <li className={ styles.item }>
      <Link to={url} className={ `${className} ${styles.link}` }>{ title }</Link>
    </li>
  );
};


export default Category;
