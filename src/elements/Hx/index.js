import React from 'react';
import styles from './styles.module.scss';


const Hx = ({ className='', children='Heading', color='#FFFFFF', size='1' }) => {
  switch(size) {
    case '1':
      return <h1 style={{ color: color }} className={ `${className} ${styles.h1}` }>{ children }</h1>;
    case '2':
      return <h2 style={{ color: color }} className={ `${styles.h2} ${className}` }>{ children }</h2>;
    case '3':
      return <h3 style={{ color: color }} className={ `${styles.h3} ${className}` }>{ children }</h3>;
    case '4':
      return <h4 style={{ color: color }} className={ `${styles.h4} ${className}` }>{ children }</h4>;
    case '5':
      return <h5 style={{ color: color }} className={ `${styles.h5} ${className}` }>{ children }</h5>;
    case '6':
      return <h6 style={{ color: color }} className={ `${styles.h6} ${className}` }>{ children }</h6>;
    default:
      return <span style={{ color: color, fontSize: `${size}rem` }} className={ `${styles.default} ${className}` }>{ children }</span>;
  }
}


export default Hx;
