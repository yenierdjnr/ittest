import React from 'react';
import styles from './styles.module.scss';


const Button = ({ children='Button', className='', disabled }) =>
  <button className={ `${styles.button} ${className}` } disabled={disabled}>{ children }</button>



export default Button;
