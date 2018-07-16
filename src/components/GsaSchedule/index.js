import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import gsaLogo from 'Images/gsa_schedule.jpg';


const GsaSchedule = () =>
  <section className={ styles.capsule }>

    <div className={ styles.gsa }>
      <div className={ styles.gsaLogo }>
        <img className={ styles.logo } src={ gsaLogo } alt="GSA schedule logo" />
      </div>
    </div>

    <div className={ styles.gsa }>
      <div className={ styles.gsaInfo }>
        <Hx color={ styles.offBlack } className={ styles.subtitle } size="5" >EdutainmentLive, LLC dba ITProTV</Hx>
        <Para className={ styles.intro } color={ styles.greyDark } >DUNs Number: 063939232</Para>
        <Para className={ styles.intro } color={ styles.greyDark } >Cage Code: 7AAH1</Para>
        <Para className={ styles.intro } color={ styles.greyDark } >NAICS Codes: 611420 - (Computer Training); 541519 - (Other computer related services)</Para>
        <Para className={ styles.intro } color={ styles.greyDark } >GSA Schedule Contract Number: GS-35F-474DA</Para>
        <div className={ styles.linkWrap }>
          <a href="https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-474DA&contractorName=EDUTAINMENTLIVE%2C+LLC&executeQuery=YES" className={ styles['link'] } target="_blank" rel="noopener noreferrer">Visit the GSA eLibrary</a>
        </div>
        <div className={ styles.linkWrap }>
          <a href="https://www.gsaadvantage.gov/advantage/s/search.do?db=0&q=0%3A2itprotv&searchType=1" className={ styles['link'] } target="_blank" rel="noopener noreferrer">Purchase via GSA Advantage</a>
        </div>
      </div>
    </div>

  </section>
  ;


export default GsaSchedule;
