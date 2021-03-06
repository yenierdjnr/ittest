import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { IconCertificate, IconExams, IconLabs } from 'Elements/Icons';


const GovernmentContent = () =>
  <section className={ styles.capsule }>
    <div className={ styles.item }>
      <div className={ styles.iconBox }>
        <IconCertificate className={ styles.certIcon }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="5">One Source For All Training</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>CompTIA, Microsoft, EC-Council, Apple, Cisco, ISACA, (ISC)<sup>2</sup>, and more.</Para>
        <a href="/courses/" target="_blank" className={ styles.link }> See all courses.</a>
      </div>
    </div>
    <div className={ styles.item }>
      <div className={ styles.iconBox }>
        <IconLabs className={ styles.labIcon }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="5">Hands-on with Virtual Labs</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>Try out your skills on more than 800 virtual machine labs. Configure, troubleshoot, and more in a no-risk environment.</Para>
      </div>
    </div>
    <div className={ `${styles.item} ${styles.binge}` }>
      <div className={ styles.iconBox }>
        <IconExams className={ styles.examIcon }/>
      </div>
      <div className={ styles.summary }>
        <Hx color={ styles.offBlack } className={ styles.title } size="5">Access Practice Tests</Hx>
        <Para color={ styles.greyDark } className={ styles.subtitle }>Prepare for certification exams with current tests from Kaplan IT Training, formerly Transcender&reg;.</Para>
      </div>
    </div>
  </section>
  ;


export default GovernmentContent;
