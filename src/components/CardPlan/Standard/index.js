import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const Standard = ({ className='', info }) => {
  let container = `${styles.container} ${className}`;
  let description = styles.description;
  let perks = styles.perks

  if (className === 'pricing') {
    container = `${container} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
    perks = `${perks} ${styles.plans}`;
  }

  return (
    <Link className={ container }>
      <div className={ description }>
        <Hx className={ styles.title } color={ styles.blue } size="6">standard</Hx>
        <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">The Good Stuff</Hx>
        <span className={ perks }>Full on-demand ITProTV course library</span>
      </div>
      <div className={ styles.pricing }>
        <Hx className={ styles.price } color={ styles.blue } size="2">${ info.price }<span className={ styles['per-year'] }>/ year</span></Hx>
        <span className={ styles.billing }>{ info.billing2 }</span>
        <span className={ styles.billing }>{ info.billing1 }</span>
        <TextLink className={ styles.link } color={ styles.blue } size="1.6">sign up</TextLink>
      </div>
      <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.blue }}></div>
    </Link>
  );
};


export default Standard;
