import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconExams, IconLabs } from 'Elements/Icons';


const Enhancements = props => {
  return (
    <section className={ styles.container }>
      <div className={ styles.containerTitle }>
        <Hx className={ styles.title } color={ styles.offBlack } size="3">ITProTV Office Locations</Hx>
      </div>

      <div className={ styles.maps }>
        <div className={ styles['usa'] }>
          <Para className={ styles.country } color={ styles.darkGrey }>United States</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>EdutainmentLive, LLC dba ITProTV</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>7525 NW 4th Blvd</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Gainesville, FL 32607</Para>
        </div>
        <div className={ styles['uk'] }>
          <Para className={ styles.country } color={ styles.darkGrey }>United Kingdom</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>EdutainmentLive, LLC dba ITProTV</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Unit 7 Hove Business Centre, Fonthill Road</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Hove BN3 6HA, UK</Para>
        </div>
      </div>
    </section>
  );
};


export default Enhancements;
