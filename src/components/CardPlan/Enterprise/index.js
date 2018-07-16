import React from 'react';
import { Link } from "gatsby";

import Hx from 'Elements/Hx';
import TextLink from 'Elements/TextLink';
import styles from '../styles.module.scss';


const Enterprise = ({ className='' }) => {
  let capsule = `${styles.capsulePlans} ${className}`;
  let description = styles.description;
  let perks = styles.perks;
  let price = styles.price;

  if (className === 'pricing') {
    capsule = `${capsule} ${styles.plans}`;
    description = `${description} ${styles.plans}`;
    perks = `${perks} ${styles.plans}`;
    price = `${price} ${styles.plans}`;
  }
    return (
      <div className={ capsule }>
        <div className={ styles.planWrap }>
          <Link to="/for-teams/">
            <div className={ description }>
              <Hx className={ styles.title } color={ styles.orange } size="6">enterprise</Hx>
              <Hx className={ styles.subtitle } color={ styles.offBlack } size="5">Team Plan</Hx>
              <span className={ perks }>Full ITProTV, OfficeProTV, DevProTV, CreativeProTV, &amp; BizProTV course libraries</span>
              <span className={ perks }>Virtual labs</span>
              <span className={ perks }>Practice tests</span>
            </div>
            <div className={ styles.pricing }>
              <Hx className={ price } color={ styles.orange } size="3.2">Quoted on team size</Hx>
              <TextLink className={ styles.link } color={ styles.orange } size="1.6" disabled>let's talk</TextLink>
            </div>
            <div className={ styles['bottom-bar'] } style={{ 'backgroundColor': styles.orange }}></div>
          </Link>
        </div>
      </div>
    );
};


export default Enterprise;
