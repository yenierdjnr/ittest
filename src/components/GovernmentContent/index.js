import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import { ViewportAnimation } from 'Elements/Viewport'
import { IconCertificate, IconLabs, IconExams } from 'Elements/Icons';


const GovernmentContent = props => {
  return (
    <section className={ styles.container }>

      <ViewportAnimation>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
              <IconCertificate className={ styles['laptop-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">One source for all training</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>CompTIA, Microsoft, EC-Council, Apple, Cisco, ISACA, (ISC)2 & more. See all courses.</Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
            <IconLabs className={ styles['gear-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Hands-on with virtual labs</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Prepare for certification exams with current tests from Kaplan IT Training, formerly Transcender®.</Para>
            </div>
          </li>
          <li className={ `${styles.item} ${styles.binge}` }>
            <div className={ styles['icon-box'] }>
              <IconExams className={ styles['popcorn-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Access practice exams</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Try out your skills on virtual machine labs. Configure, troubleshoot and more in a no-risk environment.</Para>
            </div>
          </li>
        </ul>
      </ViewportAnimation>

    </section>
  );
};


export default GovernmentContent;
