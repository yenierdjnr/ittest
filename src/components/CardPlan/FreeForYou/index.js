import React from 'react';
import { Link } from "gatsby";

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const FreeForYou = ({ className='', info }) => {
  const { free } = info;
  let capsule = `${styles.capsuleForYou} ${className}`;
  let description = styles.description;

  if (className === 'pricing') {
    capsule = `${capsule} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
  }

  return (
    <div className={ capsule }>
      <div className={ styles.planWrap }>
        <a href={`${process.env.ITPROTV_URL}/plans/free-signup/`}>
          <div className={ description }>
            <Hx className={ styles.title } color={ styles.darkGreen } size="6">free</Hx>
            <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Just Looking</Hx>
            <span className={ styles.perks }>Select content</span>
            <span className={ styles.perks }>Daily live stream</span>
          </div>
          <div className={ styles.pricing }>
            <Hx className={ styles.price } color={ styles.darkGreen } size="2">${ free.price }<span className={ styles['per-year'] }>/ { free.term }</span></Hx>
            <TextLink className={ styles.link } color={ styles.darkGreen } size="1.6" disabled>sign up</TextLink>
            <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.darkGreen }}></div>
          </div>
          <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.darkGreen }}></div>
        </a>
      </div>
    </div>
  );
};


export default FreeForYou;
