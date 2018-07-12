import React from 'react';
import styles from './styles.module.scss';


const Link = (props) => {
  const { className='', children='', to='#' } = props;

  return (
    <a className={ `${styles.anchor} ${className}` } href={ to }>{ children }</a>
  );
};


export default Link;
