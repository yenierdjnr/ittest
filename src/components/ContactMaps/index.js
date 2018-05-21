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

      <div className={ styles.learnings }>
        <div className={ styles['usa'] }>
          <Para className={ styles.country } color={ styles.darkGrey }>United States</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>EdutainmentLive, LLC dba ITProTV</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>7525 NW 4th Blvd</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Gainesville, FL 32607</Para>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.2353078379347!2d-82.42492678446233!3d29.65494544382091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8bc850be9d05d%3A0x40aa843d8389ab91!2s7525+NW+4th+Blvd%2C+Gainesville%2C+FL+32607!5e0!3m2!1sen!2sus!4v1473941963985" width="400" height="450" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className={ styles['uk'] }>
          <Para className={ styles.country } color={ styles.darkGrey }>United Kingdom</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>EdutainmentLive, LLC dba ITProTV</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Unit 7 Hove Business Centre, Fonthill Road</Para>
          <Para className={ styles.summary } color={ styles.darkGrey }>Hove BN3 6HA, UK</Para>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.738013690154!2d-0.17426918433557312!3d50.83601646738868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0572e20ddc7d139!2sFreedom+Works+-+Creative+Hub!5e0!3m2!1sen!2sus!4v1518126637032" width="400" height="450" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

    </section>
  );
};


export default Enhancements;
