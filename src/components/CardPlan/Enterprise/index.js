import React from 'react';
import styles from '../styles.module.scss';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';


const Enterprise = ({ className='' }) => {
    let container = styles.container;
    let description = styles.description;
    let perks = styles.perks;
    let price = styles.price;

    if (className === 'pricing') {
      container = `${container} ${styles.plans}`;
      description = `${description} ${styles.plans}`;
      perks = `${perks} ${styles.plans}`;
      price = `${price} ${styles.plans}`;
    }

    return (
      <section className={ container }>
        <div className={ description }>
          <Hx className={ styles.title } color={ styles.orange } size="6">enterprise</Hx>
          <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Track ROI of your training spend</Hx>
          <span className={ perks }>Full ITProTV, OfficeProTV, DevProTV, & BizProTV  course libraries</span>
          <span className={ perks }>Virtual labs</span>
          <span className={ perks }>Practice exams</span>
        </div>
        <div className={ styles.pricing }>
          <Hx className={ price } color={ styles.orange } size="3.2">Quoted on team size</Hx>
          <TextLink className={ styles.link } color={ styles.orange } size="1.6">let's talk</TextLink>
        </div>
      </section>
    );
};


export default Enterprise;
