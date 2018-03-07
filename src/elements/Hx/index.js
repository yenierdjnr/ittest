import React from 'react';
import styles from './styles.module.scss';


const Hx = ({ className='', children='Heading', color='#FFFFFF', size='1' }) => {
  switch(size) {
    case '1':
      return <h1 style={{ color: color }} className={ `${className} ${styles.h1}` }>{ children }</h1>;
    case '2':
      return <h2 style={{ color: color }} className={ `${className} ${styles.h2}` }>{ children }</h2>;
    case '3':
      return <h3 style={{ color: color }} className={ `${className} ${styles.h3}` }>{ children }</h3>;
    case '4':
      return <h4 style={{ color: color }} className={ `${className} ${styles.h4}` }>{ children }</h4>;
    case '5':
      return <h5 style={{ color: color }} className={ `${className} ${styles.h5}` }>{ children }</h5>;
    case '6':
      return <h6 style={{ color: color }} className={ `${className} ${styles.h6}` }>{ children }</h6>;
  }
}


export default Hx;
