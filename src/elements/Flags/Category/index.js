import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';


const Category = props => {
  const { className='', showMore, title, url } = props;
  const categoryStyles = !showMore ? styles.cols : `${styles.cols} ${styles['show-more']}`;

  return (
    <div className={ categoryStyles }>
      <Link to={url} className={ `${className} ${styles.link}` }>
        <div className={ styles.item }>
        { title }
        </div>
      </Link>
    </div>
  );
};


export default Category;
