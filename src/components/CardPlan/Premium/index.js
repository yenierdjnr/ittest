import React from 'react';
import styles from '../styles.module.scss';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';


const Premium = ({ className='', info }) => {
  let container = styles.container;
  let description = styles.description;
  let perks = styles.perks;

  if (className === 'pricing') {
    container = `${container} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
    perks = `${perks} ${styles.plans}`;
  }

  return (
    <section className={ container }>
      <div className={ description }>
        <Hx className={ styles.title } color={ styles.purple } size="6">premium</Hx>
        <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Best value</Hx>
        <span className={ perks }>Full ITProTV, OfficeProTV, DevProTV, & BizProTV  course libraries</span>
        <span className={ perks }>Virtual Labs</span>
        <span className={ perks }>Practice exams</span>
      </div>
      <div className={ styles.pricing }>
        <Hx className={ styles.price } color={ styles.purple } size="2">${ info.price }<span className={ styles['per-year'] }>/ year</span></Hx>
        <span className={ styles.billing }>{ info.billing1 }</span>
        <span className={ styles.billing }>{ info.billing2 }</span>
        <TextLink className={ styles.link } color={ styles.purple } size="1.6">sign up</TextLink>
      </div>
    </section>
  );
};


export default Premium;
