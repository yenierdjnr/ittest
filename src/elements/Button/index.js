import React from 'react';
import styles from './styles.module.scss';


const Button = ({ className='', label='button', primary }) => {
  return (
    <button className={ `${className} ${styles.button}` }>{ label }</button>
  );
}


export default Button;