import React from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const TextLink = ({ children='TextLink', className='', color='#F6621C', disabled, size=1.8, to='#', weight=700, ltrSpc='1.5px', hideArrow='' }) => {
  let icon = `${styles.icon}`;

  if (hideArrow) {
    icon = `${styles.icon} ${styles.hide}`;
  }

  if (disabled) {
    return (
      <div className={ `${styles['text-link']} ${className}` }>
        <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight, letterSpacing: `${ltrSpc}` }} className={ styles.title }>{ children }</span>
        <IconArrowRight className={ icon } fill={ color } />
      </div>
    );
  }

  return (
    <a className={ `${styles['text-link']} ${className}` } href={ to }>
      <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight, letterSpacing: `${ltrSpc}` }} className={ styles.title }>{ children }</span>
      <IconArrowRight className={ icon } fill={ color } />
    </a>
  );
};


export default TextLink;
