import React, { Fragment } from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const TextLink = ({ children='TextLink', className='', color='#F6621C', size=1.8, to='#', weight=700 }) => {
  return (
    <a className={ className } href={ to }>
      <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight }} className={ styles.title }>{ children }</span>
      <IconArrowRight className={ styles.icon } fill={ color } />
    </a>
  );
};


export default TextLink;
