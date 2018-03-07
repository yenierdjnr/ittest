import React from 'react';

import styles from './styles.module.scss';


const Category = props => {
  const { className='', title } = props;

  return (
    <li className={ `${className} ${styles.container}` }>
      <span>{ title }</span>
    </li>
  );
};


export default Category;
