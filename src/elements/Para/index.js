import React from 'react';
import styles from './styles.module.scss';


const Para = ({ className='', children='Paragraph', color='#FFFFFF' }) => {
  return <p style={{ color: color }} className={ `${className} ${styles.paragraph}` }>{ children }</p>
}


export default Para;
