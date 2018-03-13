import React from 'react';
import styles from '../styles.module.scss';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';


const Standard = ({ className='' }) => {
    return (
      <section className={ styles.container }>
        <div className={ styles.description }>
          <Hx className={ styles.title } color={ styles.blue } size="6">standard</Hx>
          <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">The good stuff</Hx>
          <span className={ styles.perks }>Full on-demand ITProTV</span>
          <span className={ styles.perks }>Course library</span>
        </div>
        <div className={ styles.pricing }>
          <Hx className={ styles.price } color={ styles.blue } size="2">$570<span className={ styles['per-year'] }>/ year</span></Hx>
          <span className={ styles.billing }>Annual Billing <br/>(16% Discount)</span>
          <TextLink className={ styles.link } color={ styles.blue } size="1.6">sign up</TextLink>
        </div>
      </section>
    );
};


export default Standard;
