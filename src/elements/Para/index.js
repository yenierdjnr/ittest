import React from 'react';
import styles from './styles.module.scss';


const Para = ({ className='', children='Paragraph', color='#FFFFFF', size=1.6 }) => {
  return <p style={{ color: color, fontSize: `${size}rem` }} className={ `${className} ${styles.paragraph}` }>{ children }</p>
}


export default Para;
