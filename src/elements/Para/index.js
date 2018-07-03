import React from 'react';
import styles from './styles.module.scss';


const Para = ({ className='', children='Paragraph', color='#FFFFFF' }) => <p style={{ color: color }} className={ `${styles.paragraph} ${className}` }>{ children }</p>


export default Para;
