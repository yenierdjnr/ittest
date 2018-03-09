import React, { Fragment } from 'react';

import styles from './styles.module.scss';
import { IconArrowRight } from 'Elements/Icons';


const TextLink = ({ children='TextLink', color='#F6621C', size=1.8, weight=700 }) => {
  return (
    <div className={ styles.container }>
      <span style={{ color: color, fontSize: `${size}rem`, fontWeight: weight }} className={ styles.title }>{ children }</span>
      <IconArrowRight className={ styles.icon } fill={ color } />
    </div>
  );
};


export default TextLink;
