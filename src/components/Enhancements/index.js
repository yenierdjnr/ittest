import React from 'react';

import styles from './styles.module.scss';
import Hx from 'Elements/Hx';
import Para from 'Elements/Para';
import TextLink from 'Elements/TextLink';
import { IconExams, IconLabs } from 'Elements/Icons';


const Enhancements = () =>
  <section className={ styles.capsule }>
    <div className={ styles.titleRow }>
      <div className={ styles.capsuleTitle }>
        <Hx className={ styles.sectionTitle } color={ styles.offBlack } size="2">Enhance Your Learning with Labs &amp; Practice Tests</Hx>
      </div>
    </div>
    <div className={ styles.list }>
      <div className={ styles['item'] }>
        <div className={ styles['icon-box']}>
          <IconLabs className={ styles['icon-labs'] }/>
        </div>
        <Hx className={ styles.title } color={ styles.offBlack } size="4">Hands-On Learning with Hosted Virtual Labs</Hx>
        <Para className={ styles.summary } color={ styles.darkGrey }>Try out your skills on virtual machine labs with multiple instances of Windows Server and Desktop Clients on your OSX, Linux, iOS device, and Windows platform.</Para>
        <TextLink to="/vlabs/">view virtual labs</TextLink>
      </div>
      <div className={ styles['item'] }>
        <div className={ styles['icon-box']}>
          <IconExams className={ styles['icon-exams'] }/>
        </div>
        <Hx className={ styles.title } color={ styles.offBlack } size="4">Pass Certifications with Practice Tests</Hx>
        <Para className={ styles.summary } color={ styles.darkGrey }>Prepare for tough certification examinations with current  tests from Kaplan IT Training&reg;. Take and re-take to ensure you're  ready before you sit for the exam.</Para>
        <TextLink to="/practice-tests/">see practice tests</TextLink>
      </div>
    </div>
  </section>
  ;

export default Enhancements;
