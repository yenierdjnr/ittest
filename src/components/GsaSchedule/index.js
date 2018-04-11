import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';


const GsaSchedule = props => {
  return (
    <section className={ styles.container }>

          <Hx color={ styles.offBlack } className={ styles.subtitle } >EdutainmentLive, LLC dba ITProTV</Hx>
          <Para className={ styles.intro } color={ styles.greyDark } >DUNs Number: 063939232</Para>
          <Para className={ styles.intro } color={ styles.greyDark } >Cage Code: 7AAH1</Para>
          <Para className={ styles.intro } color={ styles.greyDark } >NAICS Codes: 611420 - (Computer Training); 541519 - (Other computer related services)</Para>
          <Para className={ styles.intro } color={ styles.greyDark } >GSA Schedule Contract Number: GS-35F-474DA</Para>

    </section>
  );
};


export default GsaSchedule;
