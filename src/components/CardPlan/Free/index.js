import React from 'react';
import styles from '../styles.module.scss';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';


const Free = ({ className='', info }) => {
  let container = styles.container;
  let description = styles.description;

  if (className === 'pricing') {
    container = `${container} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
  }

  return (
    <section className={ container }>
      <div className={ description }>
        <Hx className={ styles.title } color={ styles.darkGreen } size="6">free</Hx>
        <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Just looking</Hx>
        <span className={ styles.perks }>Select content</span>
        <span className={ styles.perks }>Daily live stream</span>
      </div>
      <div className={ styles.pricing }>
        <Hx className={ styles.price } color={ styles.darkGreen } size="2">${ info.price }<span className={ styles['per-year'] }>/ year</span></Hx>
        <TextLink className={ styles.link } color={ styles.darkGreen } size="1.6">sign up</TextLink>
      </div>
    </section>
  );
};


export default Free;
