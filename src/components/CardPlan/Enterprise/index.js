import React from 'react';
import Link from 'gatsby-link';

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const Enterprise = ({ className='' }) => {
    let container = `${styles.container} ${className}`;
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
      <Link to="/for-teams/" className={ container }>
        <div className={ description }>
          <Hx className={ styles.title } color={ styles.orange } size="6">enterprise</Hx>
          <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Team Plan</Hx>
          <span className={ perks }>Full ITProTV, OfficeProTV, DevProTV, CreativeProTV, & BizProTV course libraries</span>
          <span className={ perks }>Virtual labs</span>
          <span className={ perks }>Practice exams</span>
        </div>
        <div className={ styles.pricing }>
          <Hx className={ price } color={ styles.orange } size="3.2">Quoted on team size</Hx>
          <TextLink className={ styles.link } color={ styles.orange } size="1.6" disabled>let's talk</TextLink>
        </div>
        <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.orange }}></div>
      </Link>
    );
};


export default Enterprise;
