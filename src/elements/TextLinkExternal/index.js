import React from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const TextLinkExternal = ({ children='TextLinkExternal', className='', color=`${styles.primaryOrange}`, disabled, size=1.8, to='#', weight=700, ltrSpc='1.5px', hideArrow='' }) => {
  let icon = `${styles.icon}`;
  let linkStyle = '';

  if (hideArrow) {
    icon = `${styles.icon} ${styles.hide}`;
  }

  if (color === `${styles.primaryOrange}`) {
    linkStyle = `${styles['text-link-orange']}`;
  }

  if (disabled) {
    return (
      <div className={ `${linkStyle} ${className}` }>
        <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight, letterSpacing: `${ltrSpc}` }} className={ styles.title }>{ children }</span>
        <IconArrowRight className={ icon } fill={ color } />
      </div>
    );
  }

  return (
    <a className={ `${linkStyle} ${className}` } href={ to } target="_blank" rel="noopener noreferrer">
      <span style={{ fontSize: `${size}rem`, fontWeight: weight, letterSpacing: `${ltrSpc}` }} className={ styles.title }>{ children }</span>
      <IconArrowRight className={ icon } fill={ color } />
    </a>
  );
};


export default TextLinkExternal;
