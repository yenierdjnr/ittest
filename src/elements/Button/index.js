import React from 'react';
import styles from './styles.module.scss';


const Button = ({ children='Button', className='', label='button', disabled }) => 
  <button className={ `${styles.button} ${className}` } disabled={disabled}>{ children }</button>
  


export default Button;
