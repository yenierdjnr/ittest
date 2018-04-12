import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import gsaLogo from 'Images/gsa_schedule.jpg';


const GsaSchedule = props => {
  return (
    <section className={ styles.container }>
          <div className={ styles.gsa }>
            <img className={ styles.gsaLogo } src={ gsaLogo } alt="GSA schedule logo" />
          </div>

          <div className={ styles.gsaInfo }>
            <Hx color={ styles.offBlack } className={ styles.subtitle } size="5" >EdutainmentLive, LLC dba ITProTV</Hx>
            <Para className={ styles.intro } color={ styles.greyDark } >DUNs Number: 063939232</Para>
            <Para className={ styles.intro } color={ styles.greyDark } >Cage Code: 7AAH1</Para>
            <Para className={ styles.intro } color={ styles.greyDark } >NAICS Codes: 611420 - (Computer Training); 541519 - (Other computer related services)</Para>
            <Para className={ styles.intro } color={ styles.greyDark } >GSA Schedule Contract Number: GS-35F-474DA</Para>
          </div>

    </section>
  );
};


export default GsaSchedule;
