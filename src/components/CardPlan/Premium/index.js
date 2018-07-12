import React from 'react';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const Premium = ({ className='', info }) => {
  const { premium } = info;
  let capsule = `${styles.capsulePlans} ${className}`;
  let description = styles.description;
  let perks = styles.perks;

  if (className === 'pricing') {
    capsule = `${capsule} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
    perks = `${perks} ${styles.plans}`;
  }

  return (
    <div className={ capsule }>
      <div className={ styles.planWrap }>
        <a href={ `${process.env.ITPROTV_URL}/plans/premium-signup/${info.type}/` }>
          <div className={ description }>
            <Hx className={ styles.title } color={ styles.purple } size="6">premium</Hx>
            <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Best Value</Hx>
            <span className={ perks }>Full ITProTV, OfficeProTV, DevProTV, CreativeProTV, &amp; BizProTV course libraries</span>
            <span className={ perks }>Virtual labs</span>
            <span className={ perks }>Practice tests</span>
          </div>
          <div className={ styles.pricing }>
            <Hx className={ styles.price } color={ styles.purple } size="2">${ premium.price }<span className={ styles['per-year'] }>/ { premium.term }</span></Hx>
            <span className={ styles.billing }>{ premium.billing2 }</span>
            <span className={ styles.billing }>{ premium.billing1 }</span>
            <TextLink className={ styles.link } color={ styles.purple } size="1.6" disabled>sign up</TextLink>
          </div>
          <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.purple }}></div>
        </a>
      </div>
    </div>
  );
};


export default Premium;
