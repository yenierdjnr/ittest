import React from 'react';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const Standard = ({ className='', info }) => {
  const { standard } = info;
  let capsule = `${styles.capsulePlans} ${className}`;
  let description = styles.description;
  let perks = styles.perks

  if (className === 'pricing') {
    capsule = `${capsule} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
    perks = `${perks} ${styles.plans}`;
  }

  return (
    <div className={ capsule }>
      <div className={ styles.planWrap }>
        <a href={ `${process.env.ITPROTV_URL}/plans/standard-signup/${info.type}/` }>
          <div className={ description }>
            <Hx className={ styles.title } color={ styles.blue } size="6">standard</Hx>
            <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">The Good Stuff</Hx>
            <span className={ perks }>Full on-demand ITProTV course library</span>
          </div>
          <div className={ styles.pricing }>
            <Hx className={ styles.price } color={ styles.blue } size="2">${ standard.price }<span className={ styles['per-year'] }>/ { standard.term }</span></Hx>
            <span className={ styles.billing }>{ standard.billing2 }</span>
            <span className={ styles.billing }>{ standard.billing1 }</span>
            <TextLink className={ styles.link } color={ styles.blue } size="1.6" disabled>sign up</TextLink>
          </div>
          <div className={ styles.bottomBar } style={{ 'backgroundColor': styles.blue }}></div>
        </a>
      </div>
    </div>
  );
};


export default Standard;
