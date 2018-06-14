import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
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
              <Hx color={ styles.offBlack } className={ styles.title } size="5">One Source For All Training</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>CompTIA, Microsoft, EC-Council, Apple, Cisco, ISACA, (ISC)<sup>2</sup>, and more.<TextLink to="/courses/" size="1.6" weight="400" ltrSpc="unset" className={ styles['text-link'] }>See all courses</TextLink></Para>
            </div>
          </li>
          <li className={ styles.item }>
            <div className={ styles['icon-box'] }>
            <IconLabs className={ styles['gear-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Hands-on With Virtual Labs</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Prepare for certification exams with current tests from Kaplan IT Training, formerly Transcender&reg;.</Para>
            </div>
          </li>
          <li className={ `${styles.item} ${styles.binge}` }>
            <div className={ styles['icon-box'] }>
              <IconExams className={ styles['popcorn-icon'] }/>
            </div>
            <div className={ styles.summary }>
              <Hx color={ styles.offBlack } className={ styles.title } size="5">Access Practice Exams</Hx>
              <Para color={ styles.greyDark } className={ styles.subtitle }>Try out your skills on virtual machine labs. Configure, troubleshoot, and more in a no-risk environment.</Para>
            </div>
          </li>
        </ul>
      </ViewportAnimation>

    </section>
  );
};


export default GovernmentContent;
