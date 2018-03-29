import React from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const TextLink = ({ children='TextLink', className='', color='#F6621C', size=1.8, to='#', weight=700, ltrSpc='1.5px', hideArrow='' }) => {
  let icon = `${styles.icon}`;

  if (hideArrow) {
    icon = `${styles.icon} ${styles.hide}`;
  }

  return (
    <a className={ className } href={ to }>
      <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight, letterSpacing: `${ltrSpc}` }} className={ styles.title }>{ children }</span>
      <IconArrowRight className={ icon } fill={ color } />
    </a>
  );
};


export default TextLink;
