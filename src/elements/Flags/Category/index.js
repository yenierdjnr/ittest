import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';


const Category = props => {
  const { className='', showMore, title, url } = props;
  const categoryStyles = !showMore ? styles.item : `${styles.item} ${styles['show-more']}`;

  return (
    <li className={ categoryStyles }>
      <Link to={url} className={ `${className} ${styles.link}` }>{ title }</Link>
    </li>
  );
};


export default Category;
