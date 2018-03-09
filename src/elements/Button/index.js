import React from 'react';
import styles from './styles.module.scss';


const Button = ({ children='Button', className='', label='button' }) => {
  return (
    <button className={ `${styles.button} ${className}` }>{ children }</button>
  );
}


export default Button;
